const sides = document.querySelectorAll(".sides");
const checkButton = document.querySelector("#check-area");
const message = document.querySelector("#message-div");



function productOfSides(a, b) {
  const sideProduct = a * b;
  return sideProduct;
}

function calculateArea() {
  var base = Number(sides[0].value);
  var height = Number(sides[1].value);

  if (base > 0 && height > 0) {
    const sideProduct = productOfSides(base, height);
    const area = 1 / 2 * (sideProduct);
    message.innerText = `The area of triangle with the entered values is ${area} Cm-Square`;

  } else {
    message.innerText = `Input Error: Please Enter valid values in all the fields!`;

  }
}



checkButton.addEventListener("click", calculateArea);