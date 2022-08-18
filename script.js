function BMI(weight=68, height=1.75){
    let result=weight / (height * height)
    return result
    }
    
    console.log(BMI(68,1.75))


function Status(bmi) {
    if (bmi < 18.5) {
        return "لديك نقص في الوزن";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "وزنك صحي";
    } else {
       return "لديك زيادة في الوزن";
    }
    }

function calculate(){
let weight = document.getElementById("weight").value;
let height = document.getElementById("height").value;

let bmi = BMI(weight, height);

let desc = Status(bmi);

let div = document.getElementById("result");

div.innerText = bmi + " == " + desc;

}

