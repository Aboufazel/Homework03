bmi(93 , 1.71);

function bmi (weight , height){
    let bmi = (weight/(height * height));
    if (bmi < 18.5){
        console.log("underweight");
        console.log(bmi);
    } else if(18.5 <= bmi && bmi < 25){
        console.log("normal");
        console.log(bmi);
    }else if(25 <= bmi && bmi < 30){
        console.log("overweght");
        console.log(bmi);
    }else{
        console.log("obse");
        console.log(bmi);
    }
}