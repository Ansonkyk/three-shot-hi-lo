var prompt=require('prompt-sync')();

x=Math.ceil( Math.random()*100);
l=0;

while (l<2){
    g=Number(prompt("Please guess a number 1-100"));
    if (x==g){
         console.log("Congratulations, "+g+ "is correct!");
         break;
    }else if(x>g){
        console.log("This number is too small");
        l=l+1;

    }else if(x<g){
        console.log("This number is too big");
        l=l+1;

    }


}
if (l==2){
    g=Number(prompt("Please guess a number 1-100"));
    if (g>x){
        console.log("Still too big, i was thinging "+x)
    }else if (x<g){
        console.log("Still too small, i was thinging "+x)
    }else {
        console.log("Congratulations, "+g+ "is correct!");
    }
}
    
