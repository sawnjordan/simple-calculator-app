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
