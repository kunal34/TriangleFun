const sides = document.querySelectorAll(".sides");
const checkButton = document.querySelector("#checkHypotenuse");
const message = document.querySelector("#outpt-div");


function squareOfSides(a, b) {
    const sumSquare = a * a + b * b;
    return sumSquare;
}

function calculateHypotenuse() {
    
    var base = Number(sides[0].value);
    var perpendicular=Number(sides[1].value);

      if(base>0 && perpendicular>0){
        const sumSquare = squareOfSides(base, perpendicular);
        const hypo = Math.sqrt(sumSquare);
        message.innerText = `The length of the Hypotenuse with the entered values is ${hypo.toFixed(2)} Cm`;

    
      }else{
        message.innerText = `Input Error: Please Enter valid values in all the fields!`;
      }

}

checkButton.addEventListener("click", calculateHypotenuse);