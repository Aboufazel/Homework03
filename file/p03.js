
trinagelArea(3 , 4 , 5);

function trinagelArea(a , b , c){
    if (a > b && a > c){
        if(a==Math.sqrt(b**2 + c**2)){
            console.log("yes");
        }else console.log("no");
    }
    
    if (b > a && b > c){
        if(b==Math.sqrt(a**2 + c**2)){
            console.log("yes");
        }else console.log("no");
    }
    
    if (c > a && c > b){
        if(c==Math.sqrt(a**2 + b**2)){
            console.log("yes");
        }else console.log("no");
    }
}