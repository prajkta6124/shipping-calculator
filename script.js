function calculateShipping() {
    const weight = parseFloat(document.getElementById("weight").value);
    const distance = parseFloat(document.getElementById("distance").value);
    const speed = document.getElementById("speed").value;
  
    if (isNaN(weight) || isNaN(distance) || weight <= 0 || distance <= 0) {
      document.getElementById("result").innerText = "Please enter valid weight and distance.";
      return;
    }
  
    // Base rate per kg per km
    let rate = 0.05;
  
    // Increase rate for express delivery
    if (speed === "express") {
      rate *= 1.5;
    }
  
    const cost = (weight * distance * rate).toFixed(2);
    document.getElementById("result").innerText = `Estimated Shipping Cost: ₹${cost}`;
  }
  