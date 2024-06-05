/**
 * Validates the form inputs and adds a red border to the input if it's empty or 0.
 */

// Get form inputs
const profitsInput = document.getElementById("profits");
const unitsInput = document.getElementById("units");
const sharesInput = document.getElementById("shares");

const validateField = (e) => {
	if (e.target.value === "" || e.target.value === "0") {
		e.target.classList.add("border-red-500");
		e.target.classList.remove("border-slate-700");
	} else {
		e.target.classList.add("border-slate-700");
		e.target.classList.remove("border-red-500");
	}
};

profitsInput.addEventListener("input", (e) => {
	// Check if input is empty or 0 and toggle red border
	validateField(e);
});

unitsInput.addEventListener("input", (e) => {
	// Check if input is empty or 0 and toggle red border
	validateField(e);
});

sharesInput.addEventListener("input", (e) => {
	// Check if input is empty or 0 and toggle red border
	validateField(e);
});
