var cv=document.getElementById('cv'),cx=cv.getContext('2d'),pts=0,sleep=false,act=Date.now(),time=1500,mId=null,on=false,list=[],historyLog=[],kind="sprout",pets=[],lockGrowth=false;

// Safety code filter to strip broken tags out of database dictionaries
function convertStr(str,type){
  var out='',m=maps[type];if(!m)return str;
  for(var i=0;i<str.length;i++){
    var c=str[i],mapped=m[c];
    if(mapped && mapped.indexOf('<')!==-1){mapped=mapped.replace(/<[^>]*>/g,'');}
    out+= mapped?mapped:c;
  }return out;
}
function copyText(val){navigator.clipboard.writeText(val);alert("📋 Copied: "+val);}

function genFonts(){
  var txt=document.getElementById('cust-txt-in').value||'Plant Pal',fBox=document.getElementById('fnt-box'),pConfig=plantData[kind],out=[];
  if(!pConfig||!pConfig.fonts) return;
  for(var j=0;j<pConfig.fonts.length;j++){
    var fType=pConfig.fonts[j].key,fName=pConfig.fonts[j].name,converted=convertStr(txt,fType);
    out.push('<div class="fnt-row" onclick="copyText(\''+converted+'\')"><span>'+converted+'</span><span style="color:#004d40; font-size:9px; font-weight:normal;">['+fName+'] copy</span></div>');
  }fBox.innerHTML=out.join('');
}

function updateStickers(){
  var pConfig=plantData[kind];if(!pConfig) return;
  document.getElementById('eco-desc').innerText=pConfig.desc;
  var sBox=document.getElementById('stk-box'),sOut=[];
  for(var i=0;i<pConfig.kaomojis.length;i++){sOut.push('<button class="stk-btn" onclick="copyText(\''+pConfig.kaomojis[i]+'\')">'+pConfig.kaomojis[i]+'</button>');}
  sBox.innerHTML=sOut.join('');genFonts();
}

if(localStorage.getItem('p_hist')){try{historyLog=JSON.parse(localStorage.getItem('p_hist'));}catch(e){}}
setInterval(function(){var d=new Date();document.getElementById('wdg-time').innerText=d.toLocaleTimeString()+' ('+d.toLocaleDateString()+')';},1000);
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
  else{on=true;b.innerText="Pause";mId=setInterval(function(){if(time>0){time--;show();}else{reset();var m=document.getElementById('tmode').value;if(m=="focus"){pts+=3;alert("Focus complete!");}else{alert("Break over!");}tch();draw();checkWin();}},1000);}
}
function reset(){clearInterval(mId);on=false;var m=document.getElementById('tmode').value;time=(m=="focus"?25:5)*60;document.getElementById('cust').value=m=="focus"?"25":"5";document.getElementById('go').innerText="Start";show();}
function show(){var m=Math.floor(time/60),s=time%60;document.getElementById('tm').innerText=(m<10?'0':'')+m+':'+(s<10?'0':'')+s;}
function add(){var i=document.getElementById('in'),v=i.value.trim();if(!v)return;list.push({t:v,d:false});i.value='';ren();tch();}

window.hF=function(el){
  if(lockGrowth)return;var x=parseInt(el.getAttribute('data-i'));list[x].d=!list[x].d;
  if(list[x].d){pts++;var timestamp=new Date().toLocaleTimeString();historyLog.unshift(list[x].t+' ['+timestamp+']');localStorage.setItem('p_hist',JSON.stringify(historyLog));}else{if(pts>0)pts--;}ren();tch();draw();checkWin();
};
window.hR=function(el){if(lockGrowth)return;var x=parseInt(el.getAttribute('data-i'));if(list[x].d&&pts>0)pts--;list.splice(x,1);ren();tch();draw();};
function clearHist(){historyLog=[];localStorage.removeItem('p_hist');ren();}

function ren(){
  var out=[];for(var i=0;i<list.length;i++){var item=list[i],cls=item.d?' class="dn"':'',chk=item.d?' checked':'';out.push('<li'+cls+'><label><input type="checkbox"'+chk+' data-i="'+i+'" onclick="window.hF(this)"><span>'+item.t+'</span></label><button class="dl" data-i="'+i+'" onclick="window.hR(this)">X</button></li>');}
  document.getElementById('el').innerHTML=out.join('');
  var hOut=[];for(var j=0;j<historyLog.length;j++){hOut.push('<li style="color:#666;">✓ '+historyLog[j]+'</li>');}document.getElementById('hist-log').innerHTML=hOut.join('');msg();
}
function chg(){
  if(lockGrowth)return;kind=document.getElementById('pt').value;var b="#f4f9f4",c="#d8f3dc";
  if(kind=="cactus"||kind=="rose"){b="#fdf0d5";c="#fcd5a1";}else if(kind=="flower"||kind=="mushroom"){b="#fffbfa";c="#fef1d2";}else if(kind=="orchid"||kind=="maple"){b="#1a1a2e";c="#16213e";}else if(kind=="bamboo"||kind=="fern"){b="#f0f7f4";c="#cdeac0";}
  document.body.style.background=b;cv.style.background=c;tch();updateStickers();draw();
}
function checkWin(){
  var currentAnimal=plantPets[kind];
  if(pts&&pts%9===0&&!lockGrowth){
    lockGrowth=true;var d=new Date(),stamp=d.toLocaleDateString()+' @ '+d.toLocaleTimeString(),e=document.createElement('div');
    e.className='pet';e.innerText=currentAnimal;e.style.left=Math.random()*450+'px';document.getElementById('an').appendChild(e);
    pets.push({dom:e,x:parseFloat(e.style.left),tx:parseFloat(e.style.left),ani:currentAnimal});
    setTimeout(function(){if(confirm("🎉 Full growth! Unlocked: "+currentAnimal+" on "+stamp+"!\n\nReset seed?")){pts=0;list=[];}lockGrowth=false;ren();draw();},7000);
  }
}
setInterval(function(){for(var i=0;i<pets.length;i++){var p=pets[i];if(Math.random()<0.2)p.tx=Math.random()*450;if(Math.abs(p.x-p.tx)>2){p.x+=p.tx>p.x?2:-2;p.dom.style.bottom=(Math.sin(p.x*0.1)*4+2)+'px';}p.dom.style.left=p.x+'px';}},80);
function msg(){
  var l=pts>=9?3:pts>=6?2:pts>=3?1:0,n=Math.max(0,9-pts),t="Needs "+n+" checks to grow!";
  if(lockGrowth)t="✨ Growth unlocked!";else if(sleep||window.hamsterIsSad)t="Zzz... Pal is sleepy!";else if(l==1)t="Strong sprout!";else if(l==2)t="Thick and growing!";else if(l==3||pts>=9)t="Grand size!";
  document.getElementById('st').innerText=t;
}
function pxl(x,y,w,h,c){cx.fillStyle=c;cx.fillRect(x*9,y*9,w*9,h*9);}
function draw(){
  cx.clearRect(0,0,144,144);var l=pts>=9?3:pts>=6?2:pts>=3?1:0;pxl(4,13,8,1,"#c2c5cc");pxl(4,14,8,1,"#8d99ae");pxl(5,12,6,1,'#4a3728');
  
  // If hamster is sad, force plant canvas to display the dark cloud + sleep frame
  if(sleep || window.hamsterIsSad){
    pxl(7,10,2,2,'#52b788');
    cx.fillStyle=(kind=="orchid"||kind=="maple")?'#fff':'#2f3e46';
    cx.font="12px monospace";cx.fillText("z Z",100,40);
    // Draw small pixel rain cloud inside plant zone
    pxl(9,2,4,1,"#90e0ef");pxl(8,3,6,1,"#00b4d8");
    return;
  }
  var k=kind;
  if(k=="sprout"){if(l>0||lockGrowth){pxl(7,10,2,2,'#52b788');}if(l>1||lockGrowth){pxl(7,8,2,2,'#52b788');pxl(5,9,2,1,'#74c69d');pxl(9,9,2,1,'#74c69d');}if(l>2||lockGrowth){pxl(7,5,2,3,'#52b788');pxl(4,7,3,1,'#74c69d');}}
  else if(k=="cactus"){if(l>0||lockGrowth){pxl(7,10,2,2,'#2d6a4f');}if(l>1||lockGrowth){pxl(6,8,4,2,'#2d6a4f');pxl(5,9,1,2,'#40916c');}if(l>2||lockGrowth){pxl(7,5,2,3,'#2d6a4f');pxl(9,6,1,2,'#40916c');}}
  else if(k=="flower"){if(l>0||lockGrowth){pxl(7,10,2,1,'#1b4332');}if(l>1||lockGrowth){pxl(7,8,2,2,'#2d6a4f');pxl(5,9,2,1,'#74c69d');}if(l>2||lockGrowth){pxl(5,5,6,3,'#ffc300');pxl(7,6,2,1,'#ffb703');}}
  else if(k=="orchid"){if(l>0||lockGrowth){pxl(7,10,2,2,'#7209b7');}if(l>1||lockGrowth){pxl(6,8,4,2,'#560bad');}if(l>2||lockGrowth){pxl(4,6,8,2,'#b5179e');pxl(7,5,2,1,'#f72585');}}
  else if(k=="sakura"){if(l>0||lockGrowth){pxl(7,10,2,2,'#6f4e37');}if(l>1||lockGrowth){pxl(6,8,3,2,'#6f4e37');pxl(5,8,1,1,'#ffb3c1');}if(l>2||lockGrowth){pxl(4,5,7,3,'#ffcbf2');pxl(8,4,2,2,'#ffb3c1');}}
  else if(k=="fern"){if(l>0||lockGrowth){pxl(7,11,2,1,'#1b4332');}if(l>1||lockGrowth){pxl(6,9,3,2,'#1b4332');pxl(4,10,2,1,'#2d6a4f');}if(l>2||lockGrowth){pxl(5,6,4,3,'#1b4332');pxl(9,7,2,1,'#2d6a4f');pxl(3,8,2,1,'#2d6a4f');}}
  else if(k=="bamboo"){if(l>0||lockGrowth){pxl(7,9,2,3,'#38b000');}if(l>1||lockGrowth){pxl(7,6,2,3,'#38b000');pxl(9,8,2,1,'#70e000');}if(l>2||lockGrowth){pxl(7,3,2,3,'#38b000');pxl(5,5,2,1,'#70e000');}}
  else if(k=="rose"){if(l>0||lockGrowth){pxl(7,10,2,2,'#2d6a4f');}if(l>1||lockGrowth){pxl(7,8,2,2,'#2d6a4f');pxl(5,8,2,1,'#40916c');}if(l>2||lockGrowth){pxl(6,5,4,3,'#e63946');pxl(7,4,2,1,'#b5179e');}}
  else if(k=="maple"){if(l>0||lockGrowth){pxl(7,10,2,2,'#af2916');}if(l>1||lockGrowth){pxl(6,8,4,2,'#af2916');pxl(4,9,2,1,'#d90429');}if(l>2||lockGrowth){pxl(5,5,6,3,'#d90429');pxl(7,4,2,1,'#ffb703');}}
  else if(kind=="mushroom"){if(l>0||lockGrowth){pxl(7,11,2,1,'#f7a399');}if(l>1||lockGrowth){pxl(7,9,2,2,'#f7a399');}if(l>2||lockGrowth){pxl(5,6,6,3,'#e63946');pxl(6,7,1,1,'#fff');pxl(9,6,1,1,'#fff');}}
}
