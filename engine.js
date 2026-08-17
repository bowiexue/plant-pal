var cv=document.getElementById('cv'),cx=cv.getContext('2d'),pts=0,sleep=false,act=Date.now(),time=1500,mId=null,on=false,list=[],historyLog=[],kind="sprout",pets=[],lockGrowth=false;
function convertStr(s,t){
  var o='',m=maps[t];if(!m)return s;
  for(var i=0;i<s.length;i++){
    var c=s[i],p=m[c];if(p&&typeof p==='string'&&p.indexOf('<')!==-1){p=p.replace(/<[^>]*>/g,'');}
    o+=p?p:c;
  }return o;
}
function copyText(v){navigator.clipboard.writeText(v);alert("📋 Copied: "+v);}
function genFonts(){
  var t=document.getElementById('cust-txt-in').value||'Plant Pal',f=document.getElementById('fnt-box'),c=plantData[kind],out=[];if(!c||!c.fonts)return;
  for(var j=0;j<c.fonts.length;j++){
    var k=c.fonts[j].key,n=c.fonts[j].name,v=convertStr(t,k);
    out.push('<div class="fnt-row" onclick="copyText(\''+v+'\')"><span>'+v+'</span><span style="color:#004d40;font-size:9px;">['+n+']</span></div>');
  }f.innerHTML=out.join('');
}
function updateStickers(){
  var c=plantData[kind];if(!c)return;document.getElementById('eco-desc').innerText=c.desc;
  var b=document.getElementById('stk-box'),out=[];
  for(var i=0;i<c.kaomojis.length;i++){out.push('<button class="stk-btn" onclick="copyText(\''+c.kaomojis[i]+'\')">'+c.kaomojis[i]+'</button>');}
  b.innerHTML=out.join('');genFonts();
}
setInterval(function(){var d=new Date(),el=document.getElementById('wdg-time');if(el)el.innerText=d.toLocaleTimeString()+' ('+d.toLocaleDateString()+')';},1000);
setInterval(function(){if(!on&&Date.now()-act>600000){sleep=true;msg();draw();}},10000);
function tch(){act=Date.now();sleep=false;msg();}
function setMode(){
  var m=document.getElementById('tmode').value,b=document.getElementById('tmbx');
  if(m=="focus"){b.className="tm-box mode-focus";document.getElementById('cust').value="25";}
  else{b.className="tm-box mode-break";document.getElementById('cust').value="5";}applyCustomTime();
}
function applyCustomTime(){clearInterval(mId);on=false;document.getElementById('go').innerText="Start";time=parseInt(document.getElementById('cust').value)*60;show();}
function run(){
  tch();var b=document.getElementById('go');
  if(on){clearInterval(mId);on=false;b.innerText="Start";}
  else{on=true;b.innerText="Pause";mId=setInterval(function(){if(time>0){time--;show();}else{reset();var m=document.getElementById('tmode').value;if(m=="focus"){pts+=3;alert("Complete!");}else{alert("Over!");}tch();draw();checkWin();}},1000);}
}
function reset(){clearInterval(mId);on=false;var m=document.getElementById('tmode').value;time=(m=="focus"?25:5)*60;document.getElementById('cust').value=m=="focus"?"25":"5";document.getElementById('go').innerText="Start";show();}
function show(){var m=Math.floor(time/60),s=time%60,el=document.getElementById('tm');if(el)el.innerText=(m<10?'0':'')+m+':'+(s<10?'0':'')+s;}
function add(){var i=document.getElementById('in'),v=i.value.trim();if(!v)return;list.push({t:v,d:false});i.value='';ren();tch();}
window.hF=function(el){
  if(lockGrowth)return;var x=parseInt(el.getAttribute('data-i'));list[x].d=!list[x].d;
  if(list[x].d){pts++;}else{if(pts>0)pts--;}ren();tch();draw();checkWin();
};
window.hR=function(el){if(lockGrowth)return;var x=parseInt(el.getAttribute('data-i'));if(list[x].d&&pts>0)pts--;list.splice(x,1);ren();tch();draw();};
function ren(){
  var out=[];for(var i=0;i<list.length;i++){var item=list[i],cls=item.d?' class="dn"':'',chk=item.d?' checked':'';out.push('<li'+cls+'><label><input type="checkbox"'+chk+' data-i="'+i+'" onclick="window.hF(this)"><span>'+item.t+'</span></label><button class="dl" data-i="'+i+'" onclick="window.hR(this)">X</button></li>');}
  var el=document.getElementById('el');if(el)el.innerHTML=out.join('');msg();
}
function chg(){if(lockGrowth)return;kind=document.getElementById('pt').value;tch();updateStickers();draw();}
function checkWin(){
  var c=plantPets[kind];if(pts&&pts%9===0&&!lockGrowth){
    lockGrowth=true;var e=document.createElement('div');e.className='pet';e.innerText=c;e.style.left=Math.random()*220+'px';
    var anEl=document.getElementById('an');if(anEl)anEl.appendChild(e);pets.push({dom:e,x:parseFloat(e.style.left),tx:parseFloat(e.style.left)});
    setTimeout(function(){alert("🎉 Full growth unlocked: "+c);lockGrowth=false;ren();draw();},3000);
  }
}
setInterval(function(){for(var i=0;i<pets.length;i++){var p=pets[i];if(Math.random()<0.2)p.tx=Math.random()*220;if(Math.abs(p.x-p.tx)>2){p.x+=p.tx>p.x?2:-2;p.dom.style.bottom=(Math.sin(p.x*0.1)*4+2)+'px';}p.dom.style.left=p.x+'px';}},80);
function msg(){
  var l=ptsZE=pts>=9?3:pts>=6?2:pts>=3?1:0,n=Math.max(0,9-pts),t="Needs "+n+" checks to grow!",stEl=document.getElementById('st');
  if(lockGrowth)t="✨ Growth unlocked!";else if(sleep||window.hamsterIsSad)t="Zzz... Pal is sleepy!";
  if(stEl)stEl.innerText=t;
}
function pxl(x,y,w,h,c){if(!cx)return;cx.fillStyle=c;cx.fillRect(x*9,y*9,w*9,h*9);}
function draw(){
  if(!cx)return;cx.clearRect(0,0,144,144);pxl(4,13,8,1,"#c2c5cc");pxl(4,14,8,1,"#8d99ae");pxl(5,12,6,1,'#4a3728');
  if(sleep||window.hamsterIsSad){pxl(7,10,2,2,'#52b788');pxl(9,2,4,1,"#90e0ef");pxl(8,3,6,1,"#00b4d8");return;}
  pxl(7,10,2,2,'#52b788');if(pts>=3){pxl(5,9,2,1,'#74c69d');pxl(9,9,2,1,'#74c69d');}if(pts>=6){pxl(7,5,2,3,'#52b788');}
}
