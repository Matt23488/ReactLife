(this.webpackJsonpreactlife=this.webpackJsonpreactlife||[]).push([[0],{17:function(t,e,i){},18:function(t,e,i){},19:function(t,e,i){},21:function(t,e,i){"use strict";i.r(e);var n=i(1),r=i.n(n),s=i(12),o=i.n(s),a=(i(17),i(18),i(2)),h=i(3),l=i(8),c=i(7),u=i(6),f=i(4),_=function(){function t(e,i,n,r){Object(a.a)(this,t),this.corner=void 0,this.width=void 0,this.height=void 0,"number"===typeof e?(this.corner={x:e,y:i},this.width=n,this.height=r):(this.corner=e,this.width=i,this.height=n)}return Object(h.a)(t,[{key:"x",get:function(){return this.corner.x}},{key:"y",get:function(){return this.corner.y}}]),t}(),O=i(11),p=i(5),m=function(){function t(e){Object(a.a)(this,t),this._triplet=void 0,this._triplet=e}return Object(h.a)(t,[{key:"leftNext",get:function(){return 0!==(t._lnm&this._triplet)}},{key:"middleNext",get:function(){return 0!==(t._mnm&this._triplet)}},{key:"rightNext",get:function(){return 0!==(t._rnm&this._triplet)}},{key:"leftNextRaw",get:function(){return(this._triplet&t._lnm)>>t._lnext}},{key:"middleNextRaw",get:function(){return(this._triplet&t._mnm)>>t._mnext}},{key:"rightNextRaw",get:function(){return(this._triplet&t._rnm)>>t._rnext}},{key:"setLeftNext",value:function(e){return new t(e?t._lnm|this._triplet:~t._lnm&this._triplet)}},{key:"setMiddleNext",value:function(e){return new t(e?t._mnm|this._triplet:~t._mnm&this._triplet)}},{key:"setRightNext",value:function(e){return new t(e?t._rnm|this._triplet:~t._rnm&this._triplet)}},{key:"leftCurrent",get:function(){return 0!==(t._lcm&this._triplet)}},{key:"middleCurrent",get:function(){return 0!==(t._mcm&this._triplet)}},{key:"rightCurrent",get:function(){return 0!==(t._rcm&this._triplet)}},{key:"leftCurrentRaw",get:function(){return(this._triplet&t._lcm)>>t._lcur}},{key:"middleCurrentRaw",get:function(){return(this._triplet&t._mcm)>>t._mcur}},{key:"rightCurrentRaw",get:function(){return(this._triplet&t._rcm)>>t._rcur}},{key:"setLeftCurrent",value:function(e){return new t(e?t._lcm|this._triplet:~t._lcm&this._triplet)}},{key:"setMiddleCurrent",value:function(e){return new t(e?t._mcm|this._triplet:~t._mcm&this._triplet)}},{key:"setRightCurrent",value:function(e){return new t(e?t._rcm|this._triplet:~t._rcm&this._triplet)}},{key:"leftCountRaw",get:function(){return(t._lcountm&this._triplet)>>t._lcount}},{key:"middleCountRaw",get:function(){return(t._mcountm&this._triplet)>>t._mcount}},{key:"rightCountRaw",get:function(){return(t._rcountm&this._triplet)>>t._rcount}},{key:"leftCount",get:function(){return this.middleCurrentRaw+this.leftCountRaw}},{key:"middleCount",get:function(){return this.middleCountRaw+this.leftCurrentRaw+this.rightCurrentRaw}},{key:"rightCount",get:function(){return this.middleCurrentRaw+this.rightCountRaw}},{key:"setLeftCountRaw",value:function(e){return new t(e<<t._lcount|~t._lcountm&this._triplet)}},{key:"setMiddleCountRaw",value:function(e){return new t(e<<t._mcount|~t._mcountm&this._triplet)}},{key:"setRightCountRaw",value:function(e){return new t(e<<t._rcount|~t._rcountm&this._triplet)}},{key:"uup",get:function(){return new t(t._rcountone+this._triplet)}},{key:"uum",get:function(){return new t(-t._rcountone+this._triplet)}},{key:"upu",get:function(){return new t(t._mcountone+this._triplet)}},{key:"upp",get:function(){return new t(t._mcountone+t._rcountone+this._triplet)}},{key:"umu",get:function(){return new t(-t._mcountone+this._triplet)}},{key:"umm",get:function(){return new t(-t._mcountone-t._rcountone+this._triplet)}},{key:"puu",get:function(){return new t(t._lcountone+this._triplet)}},{key:"pum",get:function(){return new t(t._lcountone-t._rcountone+this._triplet)}},{key:"ppu",get:function(){return new t(t._lcountone+t._mcountone+this._triplet)}},{key:"ppp",get:function(){return new t(t._lcountone+t._mcountone+t._rcountone+this._triplet)}},{key:"muu",get:function(){return new t(-t._lcountone+this._triplet)}},{key:"mup",get:function(){return new t(-t._lcountone+t._rcountone+this._triplet)}},{key:"mmu",get:function(){return new t(-t._lcountone-t._mcountone+this._triplet)}},{key:"mmm",get:function(){return new t(-t._lcountone-t._mcountone-t._rcountone+this._triplet)}},{key:"currentState",get:function(){return(t._currentm&this._triplet)>>t._rcur}},{key:"nextState",get:function(){return(t._nextm&this._triplet)>>t._rnext}},{key:"changed",get:function(){return this.currentState!==this.nextState}}]),t}();m._lnext=14,m._mnext=13,m._rnext=12,m._lcur=11,m._mcur=10,m._rcur=9,m._lcount=6,m._mcount=3,m._rcount=0,m._lnm=1<<m._lnext,m._mnm=1<<m._mnext,m._rnm=1<<m._rnext,m._lcm=1<<m._lcur,m._mcm=1<<m._mcur,m._rcm=1<<m._rcur,m._lcountm=7<<m._lcount,m._mcountm=7<<m._mcount,m._rcountm=7<<m._rcount,m._lcountone=1<<m._lcount,m._mcountone=1<<m._mcount,m._rcountone=1<<m._rcount,m._currentm=m._lcm|m._mcm|m._rcm,m._nextm=m._lnm|m._mnm|m._rnm;var d=function(){function t(){Object(a.a)(this,t),this._width=342,this._height=1026,this._triplets=[],this._changes=[],this.clear()}return Object(h.a)(t,[{key:"clear",value:function(){this._triplets=[],this._changes=[];for(var t=0;t<this._width;t++){this._triplets[t]=[];for(var e=0;e<this._height;e++)this._triplets[t][e]=new m(0)}}},{key:"width",get:function(){return 3*this._width}},{key:"height",get:function(){return this._height}},{key:"isValidPoint",value:function(t,e){return 1<=t&&t<3*(this._width-1)&&1<=e&&e<this._height-1}},{key:"becomeAlive",value:function(t,e){var i=Math.floor(t/3),n=this._triplets[i][e];switch(t%3){case 0:if(n.leftCurrent)return!1;this._triplets[i-1][e-1]=this._triplets[i-1][e-1].uup,this._triplets[i][e-1]=this._triplets[i][e-1].ppu,this._triplets[i-1][e]=this._triplets[i-1][e].uup,this._triplets[i][e]=n.setLeftCurrent(!0),this._triplets[i-1][e+1]=this._triplets[i-1][e+1].uup,this._triplets[i][e+1]=this._triplets[i][e+1].ppu;break;case 1:if(n.middleCurrent)return!1;this._triplets[i][e-1]=this._triplets[i][e-1].ppp,this._triplets[i][e]=n.setMiddleCurrent(!0),this._triplets[i][e+1]=this._triplets[i][e+1].ppp;break;case 2:if(n.rightCurrent)return!1;this._triplets[i][e-1]=this._triplets[i][e-1].upp,this._triplets[i+1][e-1]=this._triplets[i+1][e-1].puu,this._triplets[i][e]=n.setRightCurrent(!0),this._triplets[i+1][e]=this._triplets[i+1][e].puu,this._triplets[i][e+1]=this._triplets[i][e+1].upp,this._triplets[i+1][e+1]=this._triplets[i+1][e+1].puu}return!0}},{key:"becomeDead",value:function(t,e){var i=Math.floor(t/3),n=this._triplets[i][e];switch(t%3){case 0:if(!n.leftCurrent)return!1;this._triplets[i-1][e-1]=this._triplets[i-1][e-1].uum,this._triplets[i][e-1]=this._triplets[i][e-1].mmu,this._triplets[i-1][e]=this._triplets[i-1][e].uum,this._triplets[i][e]=n.setLeftCurrent(!1),this._triplets[i-1][e+1]=this._triplets[i-1][e+1].uum,this._triplets[i][e+1]=this._triplets[i][e+1].mmu;break;case 1:if(!n.middleCurrent)return!1;this._triplets[i][e-1]=this._triplets[i][e-1].mmm,this._triplets[i][e]=n.setMiddleCurrent(!1),this._triplets[i][e+1]=this._triplets[i][e+1].mmm;break;case 2:if(!n.rightCurrent)return!1;this._triplets[i][e-1]=this._triplets[i][e-1].umm,this._triplets[i+1][e-1]=this._triplets[i+1][e-1].muu,this._triplets[i][e]=n.setRightCurrent(!1),this._triplets[i+1][e]=this._triplets[i+1][e].muu,this._triplets[i][e+1]=this._triplets[i][e+1].umm,this._triplets[i+1][e+1]=this._triplets[i+1][e+1].muu}return!0}},{key:"get",value:function(t,e){if(!this.isValidPoint(t,e))return!1;var i=this._triplets[Math.floor(t/3)][e];switch(t%3){case 0:return i.leftCurrent;case 1:return i.middleCurrent;case 2:return i.rightCurrent}return!1}},{key:"set",value:function(t,e,i){this.isValidPoint(t,e)&&(i?this.becomeAlive(t,e)&&this._changes.push([Math.floor(t/3),e]):this.becomeDead(t,e)&&this._changes.push([Math.floor(t/3),e]))}},{key:"step",value:function(){var t,e=[],i=Object(p.a)(this._changes);try{for(i.s();!(t=i.n()).done;)for(var n=Object(O.a)(t.value,2),r=n[0],s=n[1],o=Math.max(r-1,1),a=Math.min(r+2,this._width-1),h=Math.max(s-1,1),l=Math.min(s+2,this._height-1),c=h;c<l;c++)for(var u=o;u<a;u++){var f=this._triplets[u][c],_=f.leftCount,m=f.middleCount,d=f.rightCount;(f=(f=(f=f.setLeftNext(3===_||f.leftCurrent&&2===_)).setMiddleNext(3===m||f.middleCurrent&&2===m)).setRightNext(3===d||f.rightCurrent&&2===d)).changed&&(e.push([u,c]),this._triplets[u][c]=f)}}catch(x){i.e(x)}finally{i.f()}this._changes=[];for(var w=0,y=e;w<y.length;w++){var g=Object(O.a)(y[w],2),v=g[0],k=g[1],b=this._triplets[v][k];b.changed&&(b.leftNext?this.becomeAlive(3*v,k):this.becomeDead(3*v,k),b.middleNext?this.becomeAlive(3*v+1,k):this.becomeDead(3*v+1,k),b.rightNext?this.becomeAlive(3*v+2,k):this.becomeDead(3*v+2,k),this._changes.push([v,k]))}}},{key:"draw",value:function(t,e){for(var i=Math.max(0,t.x),n=Math.min(3*this._width,t.x+t.width),r=Math.max(0,t.y-t.height+1),s=Math.min(this._height,t.y+1),o=r;o<s;o++)for(var a=i;a<n;a++)this.get(a,o)&&e({x:a,y:o})}}]),t}(),w=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object(a.a)(this,t),this.renderTime=void 0,this._limitTick=void 0,this._lastRenderTime=0,this._lastTickTime=0,this._doLoop=!1,this.renderTime=e,this._limitTick=i}return Object(h.a)(t,[{key:"loop",value:function(t){var e=t-this._lastRenderTime,i=t-this._lastTickTime;this._limitTick||(this.tick(i),this._lastTickTime=t),e>=this.renderTime&&(this._limitTick&&(this.tick(i),this._lastTickTime=t),this.render(e),this._lastRenderTime=t),this._doLoop&&window.requestAnimationFrame(this.loop.bind(this))}},{key:"running",get:function(){return this._doLoop}},{key:"start",value:function(){this._doLoop=!0,window.requestAnimationFrame(this.loop.bind(this))}},{key:"stop",value:function(){this._doLoop=!1}}]),t}(),y=function(){function t(e){Object(a.a)(this,t),this._plaintext=void 0,this._plaintext=e}return Object(h.a)(t,[{key:"add",value:function(t,e){var i,n=this._plaintext.split(/\r?\n/).filter((function(t){return!t.startsWith("!")})),r=e.y,s=Object(p.a)(n);try{for(s.s();!(i=s.n()).done;){var o,a=i.value,h=e.x,l=Object(p.a)(a);try{for(l.s();!(o=l.n()).done;){"O"===o.value&&t.set(h,r,!0),h++}}catch(c){l.e(c)}finally{l.f()}r--}}catch(c){s.e(c)}finally{s.f()}}}]),t}(),g=function(){function t(e){Object(a.a)(this,t),this._rle=void 0,this._rle=e}return Object(h.a)(t,[{key:"add",value:function(t,e){var i,n=this._rle.split(/\r?\n/).map((function(t){return t.trim()})).filter((function(t){return!t.startsWith("#")&&!t.startsWith("x")})),r=e.x,s=e.y,o=0,a=Object(p.a)(n);try{for(a.s();!(i=a.n()).done;){var h,l=i.value,c=Object(p.a)(l);try{for(c.s();!(h=c.n()).done;){var u=h.value;switch(u){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":o=10*o+Number(u);break;case"b":r+=Math.max(o,1),o=0;break;case"o":o=Math.max(o,1);for(var f=0;f<o;f++)t.set(r+f,s,!0);r+=o,o=0;break;case"$":s-=Math.max(o,1),r=e.x,o=0;break;case"!":return}}}catch(_){c.e(_)}finally{c.f()}}}catch(_){a.e(_)}finally{a.f()}}}]),t}(),v={acorn:new y("!Name: Acorn\n!Author: Charles Corderman\n!A methuselah that stabilizes after 5206 generations.\n!www.conwaylife.com/wiki/index.php?title=Acorn\n.O\n...O\nOO..OOO\n"),beehive:new y("!Name: Beehive\n!Author: John Conway\n!The second most common still life.\n!www.conwaylife.com/wiki/index.php?title=Beehive\n.OO\nO..O\n.OO\n"),blinker:new y("!Name: Blinker\n!Author: John Conway\n!The smallest and most common oscillator.\n!www.conwaylife.com/wiki/index.php?title=Blinker\nOOO\n"),block:new y("!Name: Block\n!The most common still life.\n!www.conwaylife.com/wiki/index.php?title=Block\nOO\nOO\n"),boat:new y("!Name: Boat\n!The only 5-cell still life.\n!www.conwaylife.com/wiki/index.php?title=Boat\nOO\nO.O\n.O\n"),bookends:new y("!Name: Bookends\n!A still life.\n!www.conwaylife.com/wiki/index.php?title=Bookends\nOO...OO\nO.O.O.O\n..O.O\n.OO.OO\n"),canadagoose:new y("!Name: Canada Goose\n!Author: Jason Summers\n!It conists of a glider pulling a tagalong.\n!At the time of its discovery, the Canada goose was the smallest known diagonal spaceship other than the glider, but this record has since been beaten, first by Orion 2, and more recently by the crab.\nOOO..........\nO.........OO.\n.O......OOO.O\n...OO..OO....\n....O........\n........O....\n....OO...O...\n...O.O.OO....\n...O.O..O.OO.\n..O....OO....\n..OO.........\n..OO.........\n"),glider:new y("!Name: Glider\n!Author: Richard K. Guy\n!The smallest, most common, and first discovered spaceship.\n!www.conwaylife.com/wiki/index.php?title=Glider\n.O\n..O\nOOO\n"),honeyfarm:new y("!Name: Honey farm\n!A common formation of four beehives.\n!http://www.conwaylife.com/wiki/index.php?title=Honey_farm\n......O\n.....O.O\n.....O.O\n......O\n\n.OO.......OO\nO..O.....O..O\n.OO.......OO\n\n......O\n.....O.O\n.....O.O\n......O\n"),hwss:new y("\ufeff!Name: HWSS\n!Author: John Conway\n!The fourth most common spaceship (after the glider, lightweight spaceship and middleweight spaceship).\n!http://www.conwaylife.com/wiki/index.php?title=Heavyweight_spaceship\n...OO..\n.O....O\nO......\nO.....O\nOOOOOO."),lwss:new y("\ufeff!Name: LWSS\n!Author: John Conway\n!The smallest known orthogonally moving spaceship, and the second most common spaceship(after the glider).\n!http://www.conwaylife.com/wiki/index.php?title=Lightweight_spaceship\n.O..O\nO....\nO...O\nOOOO"),mwss:new y("\ufeff!Name: MWSS\n!Author: John Conway\n!The third most common spaceship (after the glider and lightweight spaceship).\n!http://www.conwaylife.com/wiki/index.php?title=Middleweight_spaceship\n...O..\n.O...O\nO.....\nO....O\nOOOOO."),pond:new y("!Name: Pond\n!A still life.\n!www.conwaylife.com/wiki/index.php?title=Pond\n.OO\nO..O\nO..O\n.OO\n"),puffer1:new y("\ufeff!Name: Puffer 1\n!Author: Bill Gosper\n!An orthogonal, period-128 puffer and the first puffer to be discovered\n!http://www.conwaylife.com/wiki/index.php?title=Puffer_1\n.OOO......O.....O......OOO.\nO..O.....OOO...OOO.....O..O\n...O....OO.O...O.OO....O...\n...O...................O...\n...O..O.............O..O...\n...O..OO...........OO..O...\n..O...OO...........OO...O.."),puffer2:new y("\ufeff!Name: Puffer 2\n!Author: Bill Gosper\n!The second puffer to be found.It uses two lightweight spaceships to escort a B-heptomino.\n!http://www.conwaylife.com/wiki/index.php?title=Puffer_2\n.OOO...........OOO\nO..O..........O..O\n...O....OOO......O\n...O....O..O.....O\n..O....O........O."),pulsar:new y("!Name: Pulsar\n!Author: John Conway\n!Despite its size, this is the fourth most common oscillator (and by far the most common of period greater than 2).\n!www.conwaylife.com/wiki/index.php?title=Pulsar\n..OOO...OOO\n\nO....O.O....O\nO....O.O....O\nO....O.O....O\n..OOO...OOO\n\n..OOO...OOO\nO....O.O....O\nO....O.O....O\nO....O.O....O\n\n..OOO...OOO\n"),rpentomino:new y("!Name: R-pentomino\n!The most active polyomino with less than six cells; all of the others stabilize in at most 10 generations, but the R-pentomino does not do so until generation 1103, by which time it has a population of 116.\n!www.conwaylife.com/wiki/index.php?title=R-pentomino\n.OO\nOO\n.O\n"),snake:new y("!Name: Snake\n!The twenty-first most common still life.\n!http://www.conwaylife.com/wiki/index.php?title=Snake\nOO.O\nO.OO\n"),spider:new g("\ufeff#N Spider\n#O David Bell\n#C A c/5 period 5 orthogonal spaceship found in April 1997. It is the \n#C smallest known c/5 spaceship.\n#C http://www.conwaylife.com/wiki/index.php?title=Spider\nx = 27, y = 8, rule = B3/S23\n9bo7bo9b$3b2obobob2o3b2obobob2o3b$3obob3o9b3obob3o$o3bobo5bobo5bobo3bo\n$4b2o6bobo6b2o4b$b2o9bobo9b2ob$b2ob2o15b2ob2ob$5bo15bo!"),trafficlight:new y("!Name: Traffic light\n!A common formation of four blinkers.\n!www.conwaylife.com/wiki/index.php?title=Traffic_light\n..OOO\n\nO.....O\nO.....O\nO.....O\n\n..OOO\n"),tub:new y("!Name: Tub\n!A very common still life.\n!www.conwaylife.com/wiki/index.php?title=Tub\n.O\nO.O\n.O\n")},k="#a0c";var b=function(t){Object(l.a)(i,t);var e=Object(c.a)(i);function i(t,n){var r;return Object(a.a)(this,i),(r=e.call(this,n,!0))._canvas=void 0,r._maxScale=0,r._minScale=-6,r._scale=void 0,r._gridScale=void 0,r._corner=void 0,r._life=void 0,r._dragging=!1,r._dragStart={x:-1,y:-1},r._canvas=document.getElementById(t),r._scale=-1,r._gridScale=-3,r._corner={x:-2,y:r.lifeHeight-2},r._life=new d,r.pattern=v.puffer2,window.addEventListener("resize",r.onWindowResize.bind(Object(f.a)(r))),r._canvas.addEventListener("wheel",r.onScroll.bind(Object(f.a)(r))),window.addEventListener("keydown",r.onKeyDown.bind(Object(f.a)(r))),r._canvas.addEventListener("mousedown",r.onMouseDown.bind(Object(f.a)(r))),r._canvas.addEventListener("mousemove",r.onMouseMove.bind(Object(f.a)(r))),r._canvas.addEventListener("mouseup",r.onMouseUp.bind(Object(f.a)(r))),r.onWindowResize(),r.draw(),r}return Object(h.a)(i,[{key:"step",value:function(){this.running||(this._life.step(),this.draw())}},{key:"tick",value:function(t){this._life.step()}},{key:"render",value:function(t){this.drawDisplay()}},{key:"onWindowResize",value:function(){this._canvas.width=this._canvas.clientWidth,this._canvas.height=this._canvas.clientHeight,this._corner={x:Math.floor(this._life.width/2)-Math.floor(this.lifeWidth/2),y:Math.floor(this._life.height/2)+Math.floor(this.lifeHeight/2)},this.running||this.draw()}},{key:"onKeyDown",value:function(t){switch(t.key){case"s":this.screenshot();break;case" ":this.running?this.stop():this.start()}}},{key:"onScroll",value:function(t){var e=this.bitmapToLife(t);t.deltaY<0?this.zoomIn(e):t.deltaY>0&&this.zoomOut(e)}},{key:"onMouseDown",value:function(t){this._dragging=!0,this._dragStart=this.bitmapToLife({x:t.clientX,y:t.clientY})}},{key:"onMouseMove",value:function(t){if(this._dragging){var e=this.bitmapToLife({x:t.clientX,y:t.clientY});this._corner={x:this._corner.x+this._dragStart.x-e.x,y:this._corner.y+this._dragStart.y-e.y},this.drawDisplay()}}},{key:"onMouseUp",value:function(t){this._dragging=!1}},{key:"draw",value:function(){this.drawDisplay()}},{key:"clearDisplay",value:function(){var t=this.ctx,e=this.width,i=this.height;t.fillStyle="#333",t.fillRect(0,0,e,i)}},{key:"drawDisplay",value:function(){this.clearDisplay(),this._scale<0?this.drawBlocks():this.drawPixels()}},{key:"drawGrid",value:function(){if(this.gridEnabled){var t=this.ctx,e=this.width,i=this.height;t.strokeStyle="#000",t.beginPath();for(var n=0;n<e;n+=1<<-this._scale)t.moveTo(n,0),t.lineTo(n,i-1);for(var r=0;r<i;r+=1<<-this._scale)t.moveTo(0,r),t.lineTo(e-1,r);t.closePath(),t.stroke()}}},{key:"drawBlocks",value:function(){var t=this,e=this.ctx;e.fillStyle=k;this._life.draw(this.lifeRect,(function(i){var n=t.lifeToBitmap(i);t.isValidBitmapPoint(n)&&e.fillRect(n.x,n.y,1<<-t._scale,1<<-t._scale)})),this.drawGrid()}},{key:"drawPixels",value:function(){var t=this,e=this.ctx,i=this.width,n=this.height,r=e.getImageData(0,0,i,n),s=function(t){var e=t.slice(1),i=[];if(3===e.length)for(var n=0;n<3;n++)i.push(Number("0x".concat(e.charAt(n).repeat(2))));else for(var r=0;r<6;r+=2)i.push(Number("0x".concat(e.slice(r,r+2))));return i}(k);this._life.draw(this.lifeRect,(function(e){var n=t.lifeToBitmap(e);r.data[n.y*i*4+4*n.x+0]=s[0],r.data[n.y*i*4+4*n.x+1]=s[1],r.data[n.y*i*4+4*n.x+2]=s[2],r.data[n.y*i*4+4*n.x+3]=255})),e.putImageData(r,0,0)}},{key:"screenshot",value:function(){var t=this._canvas.toDataURL("image/png").replace(/^data:image\/[^;]/,"data:application/octet-stream"),e=document.createElement("a");e.setAttribute("download","Life.png"),e.setAttribute("href",t),e.click()}},{key:"zoomOut",value:function(t){this._scale<this._maxScale&&(this._corner={x:2*this._corner.x-t.x,y:2*this._corner.y-t.y},this._scale++,this.drawDisplay())}},{key:"zoomIn",value:function(t){this._scale>this._minScale&&(this._corner={x:Math.floor((this._corner.x+t.x)/2),y:Math.floor((this._corner.y+t.y)/2)},this._scale--,this.drawDisplay())}},{key:"canvas",get:function(){return this._canvas}},{key:"scale",get:function(){return this._scale},set:function(t){this._scale=t}},{key:"gridScale",get:function(){return this._gridScale}},{key:"corner",get:function(){return this._corner},set:function(t){this._corner=t}},{key:"life",get:function(){return this._life}},{key:"ctx",get:function(){return this._canvas.getContext("2d")}},{key:"width",get:function(){return this._canvas.width}},{key:"height",get:function(){return this._canvas.height}},{key:"pattern",set:function(t){this._life.clear(),t.add(this._life,{x:Math.floor(this._life.width/2),y:Math.floor(this._life.height/2)}),this.draw()}},{key:"scaleUp",value:function(t){return this._scale>=0?t<<this._scale:t>>-this._scale}},{key:"scaleDown",value:function(t){return this._scale>=0?t>>this._scale:t<<-this._scale}},{key:"lifeWidth",get:function(){return this.scaleUp(this._canvas.width)}},{key:"lifeHeight",get:function(){return this.scaleUp(this._canvas.height)}},{key:"lifeRect",get:function(){return new _(this._corner,this.lifeWidth,this.lifeHeight)}},{key:"lifeToBitmap",value:function(t){return{x:this.scaleDown(t.x-this._corner.x),y:this.scaleDown(this._corner.y-t.y)}}},{key:"bitmapToLife",value:function(t){return{x:this._corner.x+this.scaleUp(t.x),y:this._corner.y-this.scaleUp(t.y)}}},{key:"gridEnabled",get:function(){return this._scale<=this._gridScale}},{key:"isValidBitmapPoint",value:function(t){return 0<=t.x&&t.x<this._canvas.width&&0<=t.y&&t.y<this._canvas.height}}]),i}(w),x=(i(19),i(0)),C=function(t){Object(l.a)(i,t);var e=Object(c.a)(i);function i(t){var n;return Object(a.a)(this,i),(n=e.call(this,t)).state={selectedPattern:"puffer2",renderTime:10},n}return Object(h.a)(i,[{key:"onPatternChange",value:function(t){if(this.state.lifeData){var e=t.target.value;this.state.lifeData.running&&this.state.lifeData.stop(),this.state.lifeData.pattern=v[e],this.setState({selectedPattern:e})}}},{key:"onRenderTimeChange",value:function(t){if(this.state.lifeData){var e=Number(t.target.value);isNaN(e)||(this.state.lifeData.renderTime=e,this.setState({renderTime:e}))}}},{key:"onToggleRunning",value:function(){this.state.lifeData&&(this.state.lifeData.running?this.state.lifeData.stop():this.state.lifeData.start())}},{key:"onReset",value:function(){this.state.lifeData&&(this.state.lifeData.running&&this.state.lifeData.stop(),this.state.lifeData.pattern=v[this.state.selectedPattern])}},{key:"onStepForward",value:function(){this.state.lifeData&&this.state.lifeData.step()}},{key:"componentDidMount",value:function(){var t=new b("lifeCanvas",this.state.renderTime);this.setState({lifeData:t})}},{key:"componentWillUnmount",value:function(){var t;null===(t=this.state.lifeData)||void 0===t||t.stop()}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"Life",children:[Object(x.jsx)("canvas",{className:"LifeCanvas",id:"lifeCanvas"}),Object(x.jsxs)("div",{className:"LifeControls",children:[Object(x.jsx)("select",{value:this.state.selectedPattern,onChange:this.onPatternChange.bind(this),children:Object.keys(v).map((function(t){return Object(x.jsx)("option",{value:t,children:t},t)}))}),Object(x.jsx)("input",{type:"number",value:this.state.renderTime,onChange:this.onRenderTimeChange.bind(this),min:10,max:250,step:10}),Object(x.jsx)("button",{onClick:this.onReset.bind(this),children:Object(x.jsx)(u.a,{})}),Object(x.jsxs)("button",{onClick:this.onToggleRunning.bind(this),children:[Object(x.jsx)(u.c,{}),Object(x.jsx)(u.b,{})]}),Object(x.jsx)("button",{onClick:this.onStepForward.bind(this),children:Object(x.jsx)(u.d,{})})]})]})}}]),i}(r.a.Component);var j=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(C,{})})},T=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,22)).then((function(e){var i=e.getCLS,n=e.getFID,r=e.getFCP,s=e.getLCP,o=e.getTTFB;i(t),n(t),r(t),s(t),o(t)}))};o.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(j,{})}),document.getElementById("root")),T()}},[[21,1,2]]]);
//# sourceMappingURL=main.84f2d45f.chunk.js.map