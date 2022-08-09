const n1 = document.getElementById("number1");
const n2 = document.getElementById("number2");
const operation = document.getElementById("signo");
const main = document.getElementById("main");

document.addEventListener("keyup", operations)
n1.addEventListener("keydown", block)
n2.addEventListener("keydown", block)

let invalidChars = ["+","e",];

function block(event) {
  if (invalidChars.includes(event.key)) {
    event.preventDefault()
  }
}

function operations(event) {
  if (event.keyCode === 13 && n1.value=== "" && n2.value==="" && operation.value === "") {
    alert("Por favor complete todos los campos")
  }
  else if (event.keyCode === 13 && operation.value === "") {
    alert("Por favor ingrese un operador")
  }
  else if(event.keyCode === 13 && operation.value !== "+" && operation.value !== "-" && operation.value !== "*" && operation.value !== "/" && operation.value !== "%") {
    alert("Ingresaste un operador incorrecto")
  }
  else if (event.keyCode === 13 && operation.value === "+") {
      return add()
  }
  else if (event.keyCode === 13 && operation.value === "-") {
    return substract()
  }
  else if (event.keyCode === 13 && operation.value === "*") {
    return multiply()
  }
  else if (event.keyCode === 13 && operation.value === "/") {
      return divition()
  }
  else if(event.keyCode === 13 && operation.value === "%") {
    return module()
  }
}


function add() {
  let number1 =  Number(n1.value);
  let number2 =  Number(n2.value);
  let suma = number1+number2;
  console.log(number1);

  if ( n1.value=== "" || n2.value==="") {
    alert("Por favor complete todos los campos")
  }
  
  else{

  main.textContent = `Resultado: ${suma}`
  }
}

function substract() {
  let number1 =  Number(n1.value);
  let number2 =  Number(n2.value);
  let  resta = number1-number2;
  if ( n1.value=== "" || n2.value==="") {
    alert("Por favor complete todos los campos")
  }
  else{
  main.textContent = `Resultado: ${resta}`;
  }
}

function multiply() {
  let number1 =  Number(n1.value)
  let number2 =  Number(n2.value)
  let multiplicacion = number1*number2;
  if ( n1.value=== "" || n2.value==="") {
    alert("Por favor complete todos los campos")
  }
  else{
    main.textContent = `Resultado: ${multiplicacion}`;
  }
}

function divition() {
  let number1 =  Number(n1.value)
  let number2 =  Number(n2.value)
  let division = number1/number2;
  if ( n1.value=== "" || n2.value==="") {
    alert("Por favor complete todos los campos")

  }
  else if (number2 === 0) {
    alert("No es posible dividir entre 0")
  }
  else{
    main.textContent = `Resultado: ${division.toFixed(2)}`;
  }
}

function module() {
  let number1 =  Number(n1.value)
  let number2 =  Number(n2.value)
  let modulo = ((number1 % number2)+number2)% number2;

  if (number2 === 0) {
    alert("No es posible encontrar el modulo cuando el divisior es 0")
  }
  else if ( n1.value=== "" || n2.value==="") {
    alert("Por favor complete todos los campos")
  }
  else{
  main.textContent = `Resultado: ${modulo.toFixed(1)}`;
  }
}
