function BMI(p1 = 68, p2 = 1.75) {
     console.log(`Result is ${p1 / (p2 * p2)}`)  
        }
        
        
    BMI()

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
    
    