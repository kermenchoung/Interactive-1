function randomMargin(){
    var randomnumber1=Math.floor(Math.random()*101) - 50;
    var randomnumber2=Math.floor(Math.random()*101) - 50;
    console.log(randomnumber1)
            console.log(randomnumber2)
    $('.smallbag').css({"margin-top": randomnumber1+"px", "margin-left": randomnumber2+"px"});
}

setInterval(randomMargin, 1000);

