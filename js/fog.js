/* fog */
function addNewParticle(a){var b={};b.top=canvasHeight,b.left=randBetween(-200,800),b.start=(new Date).getTime()+a,b.life=8e3,b.speedUp=30,b.speedRight=randBetween(0,20),b.rot=randBetween(-1,1),b.red=Math.floor(randBetween(0,255)),b.blue=Math.floor(randBetween(0,255)),b.green=Math.floor(randBetween(0,255)),b.startOpacity=.3,b.newTop=b.top,b.newLeft=b.left,b.size=200,b.growth=10,pCollection[pCount]=b,pCount++}function draw(a,b){var c=(new Date).getTime()-a,d=!1,e=document.getElementById("fog"),f=e.getContext("2d");f.clearRect(0,0,e.width,e.height),e.width=e.width;for(var g=0;g<pCount;g++){var h=pCollection[g],i=(new Date).getTime()-h.start,j=i/h.life;if(i>0){i<=h.life&&(d=!0);var k=h.top-h.speedUp*(i/1e3),l=h.left+h.speedRight*(i/1e3),m=Math.max(h.startOpacity*(1-j),0),n=h.size+h.growth*(i/1e3);h.newTop=k,h.newLeft=l,f.fillStyle="rgba(150,150,150,"+m+")",f.globalAlpha=m,f.drawImage(smokeImage,l,k,n,n)}}d?requestAnimationFrame(function(){draw(a,b)}):clog(c+": stopped")}function randBetween(a,b){var c=Math.random()*(b-a)+a;return c}function randOffset(a,b){var c=1+b,d=1-b,e=Math.random()*(c-d)+d;return a*e}function clog(a){console.log(a)}console.clear(),canvasWidth=1600,canvasHeight=200,pCount=0,pCollection=new Array;var puffs=1,particlesPerPuff=2e3,img="img/smoke.png",smokeImage=new Image;smokeImage.src=img;for(var i1=0;i1<puffs;i1++)for(var puffDelay=1500*i1,i2=0;i2<particlesPerPuff;i2++)addNewParticle(50*i2+puffDelay);draw((new Date).getTime(),3e3);