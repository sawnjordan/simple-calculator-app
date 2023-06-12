let inputBox = document.getElementById("inputBox");
let calcButtons = document.querySelectorAll("button");

let inputChars = "";
let btnArr = Array.from(calcButtons);

btnArr.forEach((item) => {
  item.addEventListener("click", (e) => {
    let inputValue = e.target.innerHTML;

    switch (inputValue) {
      case "=":
        inputChars = inputChars.replace(/X/g, "*");
        inputChars = eval(inputChars);
        inputBox.value = inputChars;
        break;
      case "DEL":
        inputChars = inputChars.substring(0, inputChars.length - 1);
        inputBox.value = inputChars;
        break;
      case "AC":
        inputBox.value = "";
        inputChars = "";
        break;
      default:
        inputChars += e.target.innerHTML;
        inputBox.value = inputChars;
        break;
    }
  });
});

document.addEventListener("keydown", (e) => {
  console.log(e);
  e.preventDefault();
  if (e.key == "1") {
    inputChars += e.key;
    inputBox.value = inputChars;
  } else if (e.key == "2") {
    inputChars += e.key;
    inputBox.value = inputChars;
  } else if (e.key == "3") {
    inputChars += e.key;
    inputBox.value = inputChars;
  } else if (e.key == "4") {
    inputChars += e.key;
    inputBox.value = inputChars;
  } else if (e.key == "5") {
    inputChars += e.key;
    inputBox.value = inputChars;
  } else if (e.key == "6") {
    inputChars += e.key;
    inputBox.value = inputChars;
  } else if (e.key == "7") {
    inputChars += e.key;
    inputBox.value = inputChars;
  } else if (e.key == "8") {
    inputChars += e.key;
    inputBox.value = inputChars;
  } else if (e.key == "9") {
    inputChars += e.key;
    inputBox.value = inputChars;
  } else if (e.key == "0") {
    inputChars += e.key;
    inputBox.value = inputChars;
  } else if (e.key == "/") {
    inputChars += e.key;
    inputBox.value = inputChars;
  } else if (e.key == "*") {
    inputChars += e.key;
    inputBox.value = inputChars;
  } else if (e.key == "%") {
    inputChars += e.key;
    inputBox.value = inputChars;
  } else if (e.key == "-") {
    inputChars += e.key;
    inputBox.value = inputChars;
  } else if (e.key == "+") {
    inputChars += e.key;
    inputBox.value = inputChars;
  } else if (e.key == "Backspace") {
    inputChars = inputChars.substring(0, inputChars.length - 1);
    inputBox.value = inputChars;
  }
});
