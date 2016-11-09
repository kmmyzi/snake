$(function(){
  var input=$("input")
     var one=$("#one");
     for(var i=0;i<20;i++){
     for(var j=0;j<20;j++){
      var div=$("<div>")
      div.id=i+"-"+j;
      one.appendChild(div);
    }
  }
  var t;
  // 布局("#one0-1")   
  var she=[{x:0,y:0},{x:0,y:1},{x:0,y:2}]
  for(var i=0;i<she.length;i++)
  {
          var div=$("#"+she[i].x+"-"+she[i].y)
          div.className="she";
  }
  // 出现蛇身
  
  function getfood(){
    var m=Math.floor(Math.random()*20)
    var n=Math.floor(Math.random()*20)
    while(panduan(m,n)){
              m=Math.floor(Math.random()*20);
              n=Math.floor(Math.random()*20)
    }
    var div=$("#"+m+"-"+n);
    div.className="food";
    return {x:m,y:n}
  }
    function panduan(a,b){           //判断食物是不是在蛇身上
      for(var i=0;i<she.length;i++){
        if(she[i].x==a&&she[i].y==b){
                return true;
        }
      }
      return false;
    }
    var a;
    var b;
    var food=getfood();
     var newtou=$("#"+she[she.length-1].x+"-"+(she[she.length-1].y));
     newtou.style.backgroundImage='url(./images/tou.jpg)'
      var jiutou
     input[0].onclick=function(){
    
   
     // 出现食物
    var fangxiang="you";
   function run(){
    if(fangxiang=="you"){
         jiutou=$("#"+she[she.length-1].x+"-"+she[she.length-1].y);
         newtou=$("#"+she[she.length-1].x+"-"+(she[she.length-1].y+1));
        
         if(newtou==null||panduan(she[she.length-1].x,she[she.length-1].y+1)){  
          alert("game over") 
          clearInterval(t)
            return;   
        } 
        else{
           newtou.style.backgroundImage='url(./images/tou.jpg)'
           jiutou.style.backgroundImage='url(./images/shenzi.jpg)'
        var shewei=$("#"+she[0].x+"-"+she[0].y);
        if(food.x==a&&food.y==b)
           {
          
           shewei.className="she"
           food=getfood();                  
           }
        else{
        shewei.className="";
         $("#"+she[0].x+"-"+she[0].y).style.backgroundImage='url(./images/box.jpg)'
        she.shift();}
      }
       she.push({x:she[she.length-1].x,y:(she[she.length-1].y+1)})
       newtou.className="she";
       a=she[she.length-1].x;
       b=she[she.length-1].y;
  }
  if(fangxiang=="zuo"){
       jiutou=$("#"+she[she.length-1].x+"-"+she[she.length-1].y);
        newtou=$("#"+she[she.length-1].x+"-"+(she[she.length-1].y-1));
        
         if(newtou==null||panduan(she[she.length-1].x,she[she.length-1].y-1)){  
          alert("game over") 
          clearInterval(t)
            return;   
                         } 
        else{
          newtou.style.backgroundImage='url(./images/touz.jpg)'
           jiutou.style.backgroundImage='url(./images/shenzi.jpg)'
        var shewei=$("#"+she[0].x+"-"+she[0].y);
        if(food.x==a&&food.y==b)
           {
           shewei.className="she"
           food=getfood();  
            }
        else{
        shewei.className="";
        $("#"+she[0].x+"-"+she[0].y).style.backgroundImage='url(./images/box.jpg)'
        she.shift();
            } 
        newtou.className="she";
        she.push({x:she[she.length-1].x,y:(she[she.length-1].y-1)})
            }
        a=she[she.length-1].x;
        b=she[she.length-1].y;
  }
  if(fangxiang=="shang"){
         jiutou=$("#"+she[she.length-1].x+"-"+she[she.length-1].y);
         newtou=$("#"+(she[she.length-1].x-1)+"-"+(she[she.length-1].y));

         if(newtou==null||panduan(she[she.length-1].x-1,she[she.length-1].y)){  
          alert("game over") 
          clearInterval(t)
            return;   
        } 
        else{
          newtou.style.backgroundImage='url(./images/tous.jpg)'
           jiutou.style.backgroundImage='url(./images/shenzis.jpg)'
        var shewei=$("#"+she[0].x+"-"+she[0].y);
         if(food.x==a&&food.y==b)
           {
           shewei.className="she"
           food=getfood();               
            }
        else{
        shewei.className="";
         $("#"+she[0].x+"-"+she[0].y).style.backgroundImage='url(./images/box.jpg)'
        she.shift();

             }
        newtou.className="she";
        she.push({x:(she[she.length-1].x-1),y:(she[she.length-1].y)})
        
                         }
        a=she[she.length-1].x;
        b=she[she.length-1].y;
  }
  if(fangxiang=="xia"){
         jiutou=$("#"+she[she.length-1].x+"-"+she[she.length-1].y);
         newtou=$("#"+(she[she.length-1].x+1)+"-"+(she[she.length-1].y));
         
         if(newtou==null||panduan(she[she.length-1].x+1,she[she.length-1].y)){  
          alert("game over") 
          clearInterval(t)
            return;   
        } 
        else{
        newtou.style.backgroundImage='url(./images/toux.jpg)'
        jiutou.style.backgroundImage='url(./images/shenzis.jpg)'
        var shewei=$("#"+she[0].x+"-"+she[0].y);
         if(food.x==a&&food.y==b)
         {
           shewei.className="she"
           food=getfood();               
         }
        else{
        shewei.className="";
         $("#"+she[0].x+"-"+she[0].y).style.backgroundImage='url(./images/box.jpg)'
        she.shift();
           }
        newtou.className="she";
        she.push({x:(she[she.length-1].x+1),y:(she[she.length-1].y)})
        }
       a=she[she.length-1].x;
       b=she[she.length-1].y;
  }
}
  
   t=setInterval(run,200)

  // 蛇开始跑
  document.onkeydown=function(e){
        var e=e||window.event;
        var num=e.keyCode;
        if(num==37)
        {   if(fangxiang=="you"){
                return;
                 }
           else{fangxiang="zuo"}
        }
         if(num==38)
        {   
          if(fangxiang=="xia"){
                return; }
           else{fangxiang="shang";}
        }
         if(num==39)
        {
          if(fangxiang=="zuo"){
                return;}
            else
          {fangxiang="you";}
        }
         if(num==40)
        {   if(fangxiang=="shang"){
                return;
           }
          else{fangxiang="xia"}
        }
  }
   input[1].onclick=function(){
   clearInterval(t)
    input[2].onclick=function(){
      t=setInterval(run,200)
    }
 }
  }

	input[3].onclick=function(){
    window.close()
  }
})