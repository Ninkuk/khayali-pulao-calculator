const form = document.querySelector("form");

form.addEventListener("input", (e) => {
	e.preventDefault();

	// Get form values
	const profits = document.getElementById("profits").value;
	const units = document.getElementById("units").value;
	const durationUnit = document.getElementById("duration-unit").value;
	const shares = document.getElementById("shares").value;
	const result = document.getElementById("result");
	const resultUnit = document.getElementById("result-unit").value;

	// Calculate result
	result.innerText = `$ ${calculate(profits, units, durationUnit, shares, resultUnit)}`;
});

const calculate = (profits, units, durationUnit, shares, resultUnit) => {
	// Check if all fields are filled in
	if (profits === "" || units === "" || shares === "") {
		return 0;
	}

	// Check if all fields are more than 0
	if (profits === "0" || units === "0" || shares === "0") {
		return 0;
	}

	// calculate profits
	const dailyProfits = (profits * units) / durationUnit;
	const dailyProfitsShared = dailyProfits / shares;
	const result = dailyProfitsShared * resultUnit;

	// Round to 2 decimal places and add commas
	return Math.round(result).toLocaleString();
};
