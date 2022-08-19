score(14 , 0);

function score(x , day){
    if (day === 0){
        console.log(20);
    } else if (x === 7){
        console.log(x);
    }
    if (1 <= day && day < 6){
        for ( let i = 1 ; i <= day ; i++){
            x -= 1;
        }
        if (x < 0){
            console.log(0)
        } else{
            console.log(x);
        }
    } else if (day > 7){
        for ( let i = 1 ; i <= day ; i++){
            x -= 1;
        }
        if (x < 0){
            console.log(0)
        } else{
            console.log(x);
        }
    }
}