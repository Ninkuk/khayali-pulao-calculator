/**
 * Validates the form inputs and adds a red border to the input if it's empty or 0.
 */

// Get form inputs
const profitsInput = document.getElementById("profits");
const unitsInput = document.getElementById("units");
const sharesInput = document.getElementById("shares");

profitsInput.addEventListener("input", (e) => {
	// Check if input is empty or 0 and toggle red border
	if (e.target.value === "" || e.target.value === "0") {
		e.target.classList.add("border-red-500");
	} else {
		e.target.classList.remove("border-red-500");
	}
});

unitsInput.addEventListener("input", (e) => {
	// Check if input is empty or 0 and toggle red border
	if (e.target.value === "" || e.target.value === "0") {
		e.target.classList.add("border-red-500");
	} else {
		e.target.classList.remove("border-red-500");
	}
});

sharesInput.addEventListener("input", (e) => {
	// Check if input is empty or 0 and toggle red border
	if (e.target.value === "" || e.target.value === "0") {
		e.target.classList.add("border-red-500");
	} else {
		e.target.classList.remove("border-red-500");
	}
});
