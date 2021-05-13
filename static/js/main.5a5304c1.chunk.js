(this.webpackJsonpreactlife=this.webpackJsonpreactlife||[]).push([[0],{12:function(t,e,i){},13:function(t,e,i){},14:function(t,e,i){},16:function(t,e,i){"use strict";i.r(e);var s=i(3),n=i.n(s),a=i(5),c=i.n(a),h=(i(12),i(13),i(0)),l=i(1),r=i(7),o=i(6),u=function(){function t(e,i,s,n){Object(h.a)(this,t),this.corner=void 0,this.width=void 0,this.height=void 0,"number"===typeof e?(this.corner={x:e,y:i},this.width=s,this.height=n):(this.corner=e,this.width=i,this.height=s)}return Object(l.a)(t,[{key:"x",get:function(){return this.corner.x}},{key:"y",get:function(){return this.corner.y}}]),t}(),_=function(){function t(e){Object(h.a)(this,t),this._cell=void 0,this._cell=e}return Object(l.a)(t,[{key:"state",get:function(){return 0!==(this._cell&t._statem)}},{key:"count",get:function(){return this._cell&t._countm}},{key:"allDead",get:function(){return 0===this._cell}},{key:"makeAlive",value:function(){return new t(this._cell|t._statem)}},{key:"makeDead",value:function(){return new t(this._cell&~t._statem)}},{key:"increment",value:function(){return new t(this._cell+1)}},{key:"decrement",value:function(){return new t(this._cell-1)}},{key:"clone",value:function(){return new t(this._cell)}}]),t}();_._state=4,_._statem=1<<_._state,_._countm=15;var d=function(){function t(){Object(h.a)(this,t),this._width=258,this._height=258,this._cells=[],this.clear()}return Object(l.a)(t,[{key:"clear",value:function(){this._cells=[];for(var t=0;t<this._width;t++){this._cells[t]=[];for(var e=0;e<this._height;e++)this._cells[t][e]=new _(0)}}},{key:"isValidPoint",value:function(t,e){return 0<t&&t<this._width-1&&0<e&&e<this._height-1}},{key:"becomeAlive",value:function(t,e){this._cells[t-1][e-1]=this._cells[t-1][e-1].increment(),this._cells[t-1][e+0]=this._cells[t-1][e+0].increment(),this._cells[t-1][e+1]=this._cells[t-1][e+1].increment(),this._cells[t+0][e-1]=this._cells[t+0][e-1].increment(),this._cells[t+0][e+0]=this._cells[t+0][e+0].makeAlive(),this._cells[t+0][e+1]=this._cells[t+0][e+1].increment(),this._cells[t+1][e-1]=this._cells[t+1][e-1].increment(),this._cells[t+1][e+0]=this._cells[t+1][e+0].increment(),this._cells[t+1][e+1]=this._cells[t+1][e+1].increment()}},{key:"becomeDead",value:function(t,e){this._cells[t-1][e-1]=this._cells[t-1][e-1].decrement(),this._cells[t-1][e+0]=this._cells[t-1][e+0].decrement(),this._cells[t-1][e+1]=this._cells[t-1][e+1].decrement(),this._cells[t+0][e-1]=this._cells[t+0][e-1].decrement(),this._cells[t+0][e+0]=this._cells[t+0][e+0].makeDead(),this._cells[t+0][e+1]=this._cells[t+0][e+1].decrement(),this._cells[t+1][e-1]=this._cells[t+1][e-1].decrement(),this._cells[t+1][e+0]=this._cells[t+1][e+0].decrement(),this._cells[t+1][e+1]=this._cells[t+1][e+1].decrement()}},{key:"get",value:function(t,e){return!!this.isValidPoint(t,e)&&this._cells[t][e].state}},{key:"set",value:function(t,e,i){this.isValidPoint(t,e)&&(this._cells[t][e].state!==i&&(i?this.becomeAlive(t,e):this.becomeDead(t,e)))}},{key:"step",value:function(){for(var t=this._cells.map((function(t){return t.map((function(t){return{state:t.state,count:t.count,allDead:t.allDead}}))})),e=1;e<this._height-1;e++)for(var i=1;i<this._width-1;i++){var s=t[i][e];if(!s.allDead){var n=s.count;s.state?2!==n&&3!==n&&this.becomeDead(i,e):3===n&&this.becomeAlive(i,e)}}}},{key:"draw",value:function(t,e){for(var i=Math.max(1,t.x),s=Math.min(this._width-1,t.x+t.width),n=Math.max(1,t.y-t.height+1),a=Math.min(this._height-1,t.y+1),c=n;c<a;c++)for(var h=i;h<s;h++)this._cells[h][c].state&&e({x:h,y:c})}}]),t}();var f="#909";var v=function(){function t(e){Object(h.a)(this,t),this._doLoop=!0,this._canvas=void 0,this._maxScale=0,this._minScale=-6,this._scale=void 0,this._gridScale=void 0,this._corner=void 0,this._life=void 0,this._prevTime=0,this._dragging=!1,this._dragStart={x:-1,y:-1},this._canvas=document.getElementById(e),this._scale=-1,this._gridScale=-3,this._corner={x:-2,y:this.lifeHeight-2},this._life=new d,function(t,e){var i=e.x,s=e.y;t.set(i+1,s+0,!0),t.set(i+2,s+0,!0),t.set(i+0,s-1,!0),t.set(i+1,s-1,!0),t.set(i+1,s-2,!0)}(this._life,{x:128,y:128}),window.addEventListener("resize",this.onWindowResize.bind(this)),this._canvas.addEventListener("wheel",this.onScroll.bind(this)),window.addEventListener("keydown",this.onKeyDown.bind(this)),this._canvas.addEventListener("mousedown",this.onMouseDown.bind(this)),this._canvas.addEventListener("mousemove",this.onMouseMove.bind(this)),this._canvas.addEventListener("mouseup",this.onMouseUp.bind(this)),this.onWindowResize(),this.start()}return Object(l.a)(t,[{key:"start",value:function(){this._doLoop=!0,window.requestAnimationFrame(this.loop.bind(this))}},{key:"stop",value:function(){this._doLoop=!1}},{key:"onWindowResize",value:function(){this._canvas.width=window.innerWidth,this._canvas.height=window.innerHeight,this._corner={x:-2,y:this.lifeHeight-2}}},{key:"onKeyDown",value:function(t){switch(t.key){case"s":this.screenshot();break;case" ":this._doLoop?this.stop():this.start()}}},{key:"onScroll",value:function(t){var e=this.bitmapToLife(t);t.deltaY<0?this.zoomIn(e):t.deltaY>0&&this.zoomOut(e)}},{key:"onMouseDown",value:function(t){this._dragging=!0,this._dragStart=this.bitmapToLife({x:t.clientX,y:t.clientY})}},{key:"onMouseMove",value:function(t){if(this._dragging){var e=this.bitmapToLife({x:t.clientX,y:t.clientY});this._corner={x:this._corner.x+this._dragStart.x-e.x,y:this._corner.y+this._dragStart.y-e.y},this.drawDisplay()}}},{key:"onMouseUp",value:function(t){this._dragging=!1}},{key:"loop",value:function(t){var e=t-this._prevTime;this._life.step(),e>=29.999999999999996&&(this.draw(),this._prevTime=t),this._doLoop&&window.requestAnimationFrame(this.loop.bind(this))}},{key:"draw",value:function(){this.drawDisplay()}},{key:"clearDisplay",value:function(){var t=this.ctx,e=this.width,i=this.height;t.fillStyle="#333",t.fillRect(0,0,e,i)}},{key:"drawDisplay",value:function(){this.clearDisplay(),this._scale<0?this.drawBlocks():this.drawPixels()}},{key:"drawGrid",value:function(){if(this.gridEnabled){var t=this.ctx,e=this.width,i=this.height;t.strokeStyle="#000",t.beginPath();for(var s=0;s<e;s+=1<<-this._scale)t.moveTo(s,0),t.lineTo(s,i-1);for(var n=0;n<i;n+=1<<-this._scale)t.moveTo(0,n),t.lineTo(e-1,n);t.closePath(),t.stroke()}}},{key:"drawBlocks",value:function(){var t=this,e=this.ctx;e.fillStyle=f;this._life.draw(this.lifeRect,(function(i){var s=t.lifeToBitmap(i);t.isValidBitmapPoint(s)&&e.fillRect(s.x,s.y,1<<-t._scale,1<<-t._scale)})),this.drawGrid()}},{key:"drawPixels",value:function(){var t=this,e=this.ctx,i=this.width,s=this.height,n=e.getImageData(0,0,i,s),a=function(t){var e=t.slice(1),i=[];if(3===e.length)for(var s=0;s<3;s++)i.push(Number("0x".concat(e.charAt(s).repeat(2))));else for(var n=0;n<6;n+=2)i.push(Number("0x".concat(e.slice(n,n+2))));return i}(f);this._life.draw(this.lifeRect,(function(e){var s=t.lifeToBitmap(e);n.data[s.y*i*4+4*s.x+0]=a[0],n.data[s.y*i*4+4*s.x+1]=a[1],n.data[s.y*i*4+4*s.x+2]=a[2],n.data[s.y*i*4+4*s.x+3]=255})),e.putImageData(n,0,0)}},{key:"screenshot",value:function(){var t=this._canvas.toDataURL("image/png").replace(/^data:image\/[^;]/,"data:application/octet-stream"),e=document.createElement("a");e.setAttribute("download","Life.png"),e.setAttribute("href",t),e.click()}},{key:"zoomOut",value:function(t){this._scale<this._maxScale&&(this._corner={x:2*this._corner.x-t.x,y:2*this._corner.y-t.y},this._scale++,this.drawDisplay())}},{key:"zoomIn",value:function(t){this._scale>this._minScale&&(this._corner={x:Math.floor((this._corner.x+t.x)/2),y:Math.floor((this._corner.y+t.y)/2)},this._scale--,this.drawDisplay())}},{key:"canvas",get:function(){return this._canvas}},{key:"scale",get:function(){return this._scale},set:function(t){this._scale=t}},{key:"gridScale",get:function(){return this._gridScale}},{key:"corner",get:function(){return this._corner},set:function(t){this._corner=t}},{key:"life",get:function(){return this._life}},{key:"ctx",get:function(){return this._canvas.getContext("2d")}},{key:"width",get:function(){return this._canvas.width}},{key:"height",get:function(){return this._canvas.height}},{key:"scaleUp",value:function(t){return this._scale>=0?t<<this._scale:t>>-this._scale}},{key:"scaleDown",value:function(t){return this._scale>=0?t>>this._scale:t<<-this._scale}},{key:"lifeWidth",get:function(){return this.scaleUp(this._canvas.width)}},{key:"lifeHeight",get:function(){return this.scaleUp(this._canvas.height)}},{key:"lifeRect",get:function(){return new u(this._corner,this.lifeWidth,this.lifeHeight)}},{key:"lifeToBitmap",value:function(t){return{x:this.scaleDown(t.x-this._corner.x),y:this.scaleDown(this._corner.y-t.y)}}},{key:"bitmapToLife",value:function(t){return{x:this._corner.x+this.scaleUp(t.x),y:this._corner.y-this.scaleUp(t.y)}}},{key:"gridEnabled",get:function(){return this._scale<=this._gridScale}},{key:"isValidBitmapPoint",value:function(t){return 0<=t.x&&t.x<this._canvas.width&&0<=t.y&&t.y<this._canvas.height}}]),t}(),y=(i(14),i(2)),m=function(t){Object(r.a)(i,t);var e=Object(o.a)(i);function i(){return Object(h.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"componentDidMount",value:function(){var t=new v("lifeCanvas");this.setState({lifeData:t})}},{key:"componentWillUnmount",value:function(){var t;null===(t=this.state.lifeData)||void 0===t||t.stop()}},{key:"render",value:function(){return Object(y.jsx)("canvas",{className:"Life",id:"lifeCanvas"})}}]),i}(n.a.Component);var g=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(m,{})})},w=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,17)).then((function(e){var i=e.getCLS,s=e.getFID,n=e.getFCP,a=e.getLCP,c=e.getTTFB;i(t),s(t),n(t),a(t),c(t)}))};c.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(g,{})}),document.getElementById("root")),w()}},[[16,1,2]]]);
//# sourceMappingURL=main.5a5304c1.chunk.js.map