function submitClothes() {
    // Handle clothes donation form submission
    var clothesType = document.getElementById("clothesType").value;
    var clothesQuantity = document.getElementById("clothesQuantity").value;
    var clothesSize = document.getElementById("clothesSize").value;

    // Perform further processing or send data to a server
    console.log("Clothes Donation - Type: " + clothesType + ", Quantity: " + clothesQuantity + ", Size: " + clothesSize);
}
document.getElementById('paymentMethod').addEventListener('change', function() {
    if (this.value === 'card') {
        document.getElementById('cardDetails').style.display = 'block';
        document.getElementById('upiDetails').style.display = 'none';
    } else if (this.value === 'upi') {
        document.getElementById('cardDetails').style.display = 'none';
        document.getElementById('upiDetails').style.display = 'block';
    }
});