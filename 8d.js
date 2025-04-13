function calculateLabourCost() {
    const ratePerHour = 45;
    let hoursWorked = parseFloat(prompt("Enter the number of hours worked:"));
    let materialCost = parseFloat(prompt("Enter the cost of materials:"));
    let labourCost = ratePerHour * hoursWorked;
    let totalCharge = labourCost + materialCost;
    alert("Labour Cost: Rs." + labourCost +
    "\nTotal Charge: Rs." + totalCharge);
    }
    calculateLabourCost();