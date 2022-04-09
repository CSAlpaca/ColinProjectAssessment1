let currNum = 0;
let htmlCurrNum = document.getElementById("currNum");
let htmlInputNumValue = document.getElementById("inputNum");

window.onload = function () {
  htmlInputNumValue.addEventListener("input", function () {
    console.log(htmlInputNumValue.value);
  });
};

htmlCurrNum.innerHTML = parseInt(currNum);

function onAdd() {
  htmlCurrNum.innerHTML = "";
  currNum += parseInt(htmlInputNumValue.value);
  htmlCurrNum.innerHTML = parseInt(currNum);
}

function onSubtract() {
  htmlCurrNum.innerHTML = "";
  currNum -= parseInt(htmlInputNumValue.value);
  htmlCurrNum.innerHTML = parseInt(currNum);
}
