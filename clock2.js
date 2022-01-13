mydate=new Date();
hours=mydate.getHours();
min=mydate.getMinutes();
sec=mydate.getSeconds();
cn=document.getElementById("clock");
clr=setInterval(function(){
    mydate=new Date();
    hours=mydate.getHours();
    min=mydate.getMinutes();
    sec=mydate.getSeconds();
    if(min<10){
        min="0"+min
    }
    if(sec<10){
        sec="0"+sec;
    }
    if(hours<10){
        hours="0"+hours;
    }
    cn.innerText=hours+":"+min+":"+sec;
},1000);