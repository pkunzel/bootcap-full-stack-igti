let divBox = document.querySelectorAll(".bar__face");
let ranges = document.querySelectorAll("input[type=range]");
let numbers = document.querySelectorAll("input[type=number]");

ranges.forEach((inputRange) => {
	inputRange.addEventListener("input", function (e) {
		e.target.nextElementSibling.value = e.target.value;
        //divBox.style.backgroundColor = `rgb(${numbers[0].value},${numbers[1].value},${numbers[2].value})`;
        alterarCores(`rgb(${numbers[0].value},${numbers[1].value},${numbers[2].value})`);
	});
});

numbers.forEach((inputText) => {
	inputText.addEventListener("change", function (e) {
		e.target.previousElementSibling.value = e.target.value;
		//divBox.style.backgroundColor = `rgb(${numbers[0].value},${numbers[1].value},${numbers[2].value})`;
	});
});

function alterarCores(novoRgb){
    divBox.forEach(box => box.style.backgroundColor = novoRgb);
}