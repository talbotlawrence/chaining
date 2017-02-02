var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

//reverse the array
function reverseArray(array) {
	array.reverse();
};

//Remove any integers greater than 19
function removeGreaterNumbers(array) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] > 19) {
			array.splice(array[i], 1);
		}
	}
};

//Multiply each remaining number by 1.5 and then subtract 1
function multiplyLeftovers(array) {
	for (var i = 0; i < array.length; i++) {
		(array[i] * 1.5) - 1;
	}
};


//Then output (either in the DOM or the console) the sum of all the resulting numbers
// function mySum(total, number) {
// 	multiplyLeftovers();
// 	console.log("total is: ", total);
// 	console.log("number is: ", number);
//     return total + number;
// }

// integers = integers.reduce(mySum);
// dumpToHtml(integers);




//////////////////////////////////////////////////////////////////////
// function dumpToHtml(code){
// 	var output = document.getElementById("showMe");
// 	output.innerHTML = `<h2>${code}</h2>`;
// };	