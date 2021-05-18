import { Life, LifePoint } from './api';

export interface Pattern {
    add: (life: Life, corner: LifePoint) => void;
}

class PlaintextPattern implements Pattern {
    // The plaintext Life pattern format is described here: https://www.conwaylife.com/wiki/Plaintext
    // Briefly:
    // ! indicates a comment
    // O is a living cell
    // . is a dead cell
    // Rows are indicated by line breaks
    private readonly _plaintext: string;

    public constructor(plaintext: string) {
        this._plaintext = plaintext;
    }

    add(life: Life, corner: LifePoint) {
        var lines = this._plaintext.split(/\r?\n/).filter(line => !line.startsWith('!'));
        let y = corner.y;
        for (let line of lines) {
            let x = corner.x;
            for (let c of line) {
                if (c === 'O') life.set(x, y, true);
                x++;
            }
            y--;
        }
    }
}

class RLEPattern implements Pattern {
    // The RLE Life pattern format is described here: https://www.conwaylife.com/wiki/Run_Length_Encoded
    // Briefly:
    // # indicates a comment
    // "x = n, y = n" gives the bounding box of the pattern.
    // A number followed by b or o indicates that number of dead or
    // alive cells, respectively, and the number may be omitted if the number is one.
    // A number followed by $ is a newline, and again, it may bo omitted if one.
    // ! is the end of the pattern.
    private readonly _rle: string;
    public constructor(rle: string) {
        this._rle = rle;
    }

    public add(life: Life, corner: LifePoint) {
        const lines = this._rle.split(/\r?\n/)
            .map(line => line.trim())
            .filter(line => !line.startsWith('#') && !line.startsWith('x'));
        
        let { x, y } = corner;
        let len = 0;
        for (let line of lines) {
            for (let c of line) {
                switch (c) {
                    case '0':
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        len = len * 10 + Number(c);
                        break;
                    case 'b':
                        x += Math.max(len, 1);
                        len = 0;
                        break;
                    case 'o':
                        len = Math.max(len, 1);
                        for (let i = 0; i < len; i++) life.set(x + i, y, true);
                        x += len;
                        len = 0;
                        break;
                    case '$':
                        y -= Math.max(len, 1);
                        x = corner.x;
                        len = 0;
                        break;
                    case '!': return;
                }
            }
        }
    }
}

//--PATTERNS
const acorn = new PlaintextPattern('!Name: Acorn\n!Author: Charles Corderman\n!A methuselah that stabilizes after 5206 generations.\n!www.conwaylife.com/wiki/index.php?title=Acorn\n.O\n...O\nOO..OOO\n');
const ak94 = new PlaintextPattern('! AK-94\n! Mike Playle\n! The smallest known true p94 gun, found in May 2013.\n! www.conwaylife.com/wiki/AK-94\n...............O.......OO.............\n...............OOO.....OO.............\n..................O...................\n.................OO................OO.\n..............................OO..O..O\n..............................O.O..OO.\n.................................OO...\n.....O............................O...\n.....OOO..........................O.OO\n........O......................OO.O..O\n.......OO......................OO.OO..\n......................................\n......................................\n.................O....................\n..OO.OO.........O.O..........OO.......\nO..O.OO........O...O.........O........\nOO.O...........O...O..........OOO.....\n...O...........O...O............O.....\n...OO...........O.O...................\n.OO..O.O.........O....................\nO..O..OO..............................\n.OO................OO.................\n...................O..................\n.............OO.....OOO...............\n.............OO.......O...............');
const beehive = new PlaintextPattern('!Name: Beehive\n!Author: John Conway\n!The second most common still life.\n!www.conwaylife.com/wiki/index.php?title=Beehive\n.OO\nO..O\n.OO\n');
const blinker = new PlaintextPattern('!Name: Blinker\n!Author: John Conway\n!The smallest and most common oscillator.\n!www.conwaylife.com/wiki/index.php?title=Blinker\nOOO\n');
const block = new PlaintextPattern('!Name: Block\n!The most common still life.\n!www.conwaylife.com/wiki/index.php?title=Block\nOO\nOO\n');
const boat = new PlaintextPattern('!Name: Boat\n!The only 5-cell still life.\n!www.conwaylife.com/wiki/index.php?title=Boat\nOO\nO.O\n.O\n');
const bookends = new PlaintextPattern('!Name: Bookends\n!A still life.\n!www.conwaylife.com/wiki/index.php?title=Bookends\nOO...OO\nO.O.O.O\n..O.O\n.OO.OO\n');
const canadagoose = new PlaintextPattern('!Name: Canada goose\n!Author: Jason Summers\n!Canada goose consists of a glider plus a tagalong. At the time of its discovery, the Canada goose was the smallest known diagonal spaceship other than the glider, but this record has since been beaten, first by Orion 2, and more recently by the crab.\n!www.conwaylife.com/wiki/index.php?title=Canada_goose\nOOO\nO.........OO\n.O......OOO.O\n...OO..OO\n....O\n........O\n....OO...O\n...O.O.OO\n...O.O..O.OO\n..O....OO\n..OO\n..OO\n');
const eater1 = new PlaintextPattern('!Name: Eater 1\n!Author: Bill Gosper\n!The first discovered eater.\n!http://www.conwaylife.com/wiki/index.php?title=Eater_1\nOO\nO.O\n..O\n..OO\n');
const glider = new PlaintextPattern('!Name: Glider\n!Author: Richard K. Guy\n!The smallest, most common, and first discovered spaceship.\n!www.conwaylife.com/wiki/index.php?title=Glider\n.O\n..O\nOOO\n');
const gosperglidergun = new PlaintextPattern('!Name: Gosper glider gun\n!Author: Bill Gosper\n!The first known gun and the first known finite pattern with unbounded growth.\n!www.conwaylife.com/wiki/index.php?title=Gosper_glider_gun\n........................O\n......................O.O\n............OO......OO............OO\n...........O...O....OO............OO\nOO........O.....O...OO\nOO........O...O.OO....O.O\n..........O.....O.......O\n...........O...O\n............OO\n');
const honeyfarm = new PlaintextPattern('!Name: Honey farm\n!A common formation of four beehives.\n!http://www.conwaylife.com/wiki/index.php?title=Honey_farm\n......O\n.....O.O\n.....O.O\n......O\n\n.OO.......OO\nO..O.....O..O\n.OO.......OO\n\n......O\n.....O.O\n.....O.O\n......O\n');
const hwss = new PlaintextPattern('﻿!Name: HWSS\n!Author: John Conway\n!The fourth most common spaceship (after the glider, lightweight spaceship and middleweight spaceship).\n!http://www.conwaylife.com/wiki/index.php?title=Heavyweight_spaceship\n...OO..\n.O....O\nO......\nO.....O\nOOOOOO.');
const lwss = new PlaintextPattern('﻿!Name: LWSS\n!Author: John Conway\n!The smallest known orthogonally moving spaceship, and the second most common spaceship(after the glider).\n!http://www.conwaylife.com/wiki/index.php?title=Lightweight_spaceship\n.O..O\nO....\nO...O\nOOOO');
const mwss = new PlaintextPattern('﻿!Name: MWSS\n!Author: John Conway\n!The third most common spaceship (after the glider and lightweight spaceship).\n!http://www.conwaylife.com/wiki/index.php?title=Middleweight_spaceship\n...O..\n.O...O\nO.....\nO....O\nOOOOO.');
const pond = new PlaintextPattern('!Name: Pond\n!A still life.\n!www.conwaylife.com/wiki/index.php?title=Pond\n.OO\nO..O\nO..O\n.OO\n');
const puffer1 = new PlaintextPattern('﻿!Name: Puffer 1\n!Author: Bill Gosper\n!An orthogonal, period-128 puffer and the first puffer to be discovered\n!http://www.conwaylife.com/wiki/index.php?title=Puffer_1\n.OOO......O.....O......OOO.\nO..O.....OOO...OOO.....O..O\n...O....OO.O...O.OO....O...\n...O...................O...\n...O..O.............O..O...\n...O..OO...........OO..O...\n..O...OO...........OO...O..');
const puffer2 = new PlaintextPattern('﻿!Name: Puffer 2\n!Author: Bill Gosper\n!The second puffer to be found.It uses two lightweight spaceships to escort a B-heptomino.\n!http://www.conwaylife.com/wiki/index.php?title=Puffer_2\n.OOO...........OOO\nO..O..........O..O\n...O....OOO......O\n...O....O..O.....O\n..O....O........O.');
const pulsar = new PlaintextPattern('!Name: Pulsar\n!Author: John Conway\n!Despite its size, this is the fourth most common oscillator (and by far the most common of period greater than 2).\n!www.conwaylife.com/wiki/index.php?title=Pulsar\n..OOO...OOO\n\nO....O.O....O\nO....O.O....O\nO....O.O....O\n..OOO...OOO\n\n..OOO...OOO\nO....O.O....O\nO....O.O....O\nO....O.O....O\n\n..OOO...OOO\n');
const queenbee = new PlaintextPattern('!Name: Queen bee\n!A pattern that lays a beehive on either side of itself before exploding.\n!www.conwaylife.com/wiki/index.php?title=Queen_bee\n...O\n..O.O\n.O...O\n..OOO\nOO...OO\n');
const queenbeeshuttle = new PlaintextPattern('!Name: Queen bee shuttle\n!Author: Bill Gosper\n!A period 30 oscillator.\n!www.conwaylife.com/wiki/index.php?title=Queen_bee_shuttle\n.........O\n.......O.O\n......O.O\nOO...O..O...........OO\nOO....O.O...........OO\n.......O.O\n.........O\n');
const rpentomino = new PlaintextPattern('!Name: R-pentomino\n!The most active polyomino with less than six cells; all of the others stabilize in at most 10 generations, but the R-pentomino does not do so until generation 1103, by which time it has a population of 116.\n!www.conwaylife.com/wiki/index.php?title=R-pentomino\n.OO\nOO\n.O\n');
const snake = new PlaintextPattern('!Name: Snake\n!The twenty-first most common still life.\n!http://www.conwaylife.com/wiki/index.php?title=Snake\nOO.O\nO.OO\n');
const spider = new RLEPattern('﻿#N Spider\n#O David Bell\n#C A c/5 period 5 orthogonal spaceship found in April 1997. It is the \n#C smallest known c/5 spaceship.\n#C http://www.conwaylife.com/wiki/index.php?title=Spider\nx = 27, y = 8, rule = B3/S23\n9bo7bo9b$3b2obobob2o3b2obobob2o3b$3obob3o9b3obob3o$o3bobo5bobo5bobo3bo\n$4b2o6bobo6b2o4b$b2o9bobo9b2ob$b2ob2o15b2ob2ob$5bo15bo!');
const trafficlight = new PlaintextPattern('!Name: Traffic light\n!A common formation of four blinkers.\n!www.conwaylife.com/wiki/index.php?title=Traffic_light\n..OOO\n\nO.....O\nO.....O\nO.....O\n\n..OOO\n');
const tub = new PlaintextPattern('!Name: Tub\n!A very common still life.\n!www.conwaylife.com/wiki/index.php?title=Tub\n.O\nO.O\n.O\n');
export const allPatterns = { acorn, ak94, beehive, blinker, block, boat, bookends, canadagoose, eater1, glider, gosperglidergun, honeyfarm, hwss, lwss, mwss, pond, puffer1, puffer2, pulsar, queenbee, queenbeeshuttle, rpentomino, snake, spider, trafficlight, tub };
export type PatternName = keyof typeof allPatterns;
//--END