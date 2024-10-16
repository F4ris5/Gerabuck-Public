// Calculate fare
function calculateFare() {
    const baseFare = 5.00;
    const sst = 0.06;
    const totalFare = baseFare + (baseFare * sst);
    document.getElementById("fare-amount").innerText = "RM " + totalFare.toFixed(2);
}