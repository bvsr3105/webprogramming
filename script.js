function calculateTotal() {
    let adultCount = document.getElementById("adults").value;
    let childCount = document.getElementById("children").value;
    let total = (adultCount * 10) + (childCount * 5);
    document.getElementById("totalAmount").value = total;
    }