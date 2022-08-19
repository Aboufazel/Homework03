function divisor (num){
    let s = 0;
    for(let i = 1 ; i <= num / 2 ; i++){
        if (num % i === 0){
            s += i;
        }
    }
    if (s === num){
        console.log ("yes");
    } else {
        console.log ("no");
    }
}

divisor(27);
divisor(6);