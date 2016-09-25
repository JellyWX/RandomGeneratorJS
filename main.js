var out = document.getElementById('out');
var trigger = document.getElementById('make');
var advanced = document.getElementById('advanced');
var table = document.getElementById('out2');
var foot = document.getElementById('foot');

var start,finish,repeat,limit,tableon,visible,r,output,i, f=[];

visible = false;
advanced.style.visibility='hidden';

var gen = function(){
  start=document.getElementById('s').value;
  finish=document.getElementById('f').value;
  repeat=document.getElementById('repeat').value;
  limit=document.getElementById('limit').checked;
  frequency=document.getElementById('table').checked;
  
  output="";
  
  if(limit){
    if(repeat > 1000){
      repeat = 1000;
    }
  }
  
  if(!frequency){
    for(i=0;i<repeat;i++){
      range=finish-start;
      r = Math.random();

      r=Math.floor(r * (range + 1)) + Math.round(start);
      output=output+r.toString()+" ";
    }
  }
  else if(frequency){
    for(i=0;i<finish-start + 1;i++){
      f[i]=0;
    }
    for(i=0;i<repeat;i++){
      range = finish - start;
      r = Math.random();

      r=Math.floor(r * (range + 1)) + Math.round(start);
      console.log(r);
      f[r]++;
    }
    output=f.toString();
  }
  
  out.innerHTML = output;
  
}

var dropdown = function(){
  visible = !visible;
 
  if (!visible){
    advanced.style.visibility = 'hidden';
  } else{
    advanced.style.visibility = 'visible';
  }

}

var hovering = function(info){
  foot.innerHTML=info;

}
  
