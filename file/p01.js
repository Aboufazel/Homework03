function bigPower(num){
    for(let i = 1 ; i <= num ; i++){
        if(i **2 > num){
            console.log(i);
            break;
        }
    }
}

bigPower(101);