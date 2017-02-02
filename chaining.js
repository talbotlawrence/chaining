var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

function makeChanges(array) {
	newArray = array
		.sort(function(a, b){return a-b}).reverse()
		.filter(function(number){return number < 19})
		.map(function(number){return (number * 1.5) - 1})
		.reduce(function(previous, current){return previous + current});
	return newArray;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////
function dumpToHtml(array){
	var output = document.getElementById("showMe");
	var myArray = makeChanges(array)
	output.innerHTML = `
	<h2>myArray is ${myArray}</h2>
	`;
};	

dumpToHtml(integers);