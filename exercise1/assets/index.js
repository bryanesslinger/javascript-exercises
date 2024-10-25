var UNIT_PRICE = 11;
var TAX_RATE = 0.08;
var SHIPPING_COST = 4;
var totalCost = getTotalCost()

// cost

function getUnitPrice() {
  return UNIT_PRICE;
}

// taxes

function getTaxes() {
  return UNIT_PRICE*TAX_RATE;
}

// shipping

function getShipping() {
return SHIPPING_COST;
}

function getNumberOfItems() {
    // reading from HTML
    var quantity = document.getElementById("quantity").value;
return quantity;
}


// total cost

function getTotalCost() {
    var numberOfItems = getNumberOfItems();
  var totalCost = getUnitPrice()*numberOfItems + getTaxes()*numberOfItems + getShipping();
document.getElementById("cost").innerHTML = "Total Cost: $" + totalCost;
}

