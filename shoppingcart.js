var nums = [1, 2, 3, 4];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices = [7.5, 9.5, 8.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;
document.getElementById("checkout").addEventListener("click", checkOut);

//hide the receipt if there is a change in the table
document.getElementById("receipt").style.display = "none";

function add_selection(x) {
  console.log(x);
  quantities[x] = quantities[x] + 1;
  totals[x] = prices[x] * quantities[x];
  totalOrderAmt += prices[x];

  //hide the receipt if there is a change in the table
  document.getElementById("receipt").style.display = "none";
  display_all();
}

function remove_selection(x) {
  console.log(x);
  if (quantities[x] > 0) {
    quantities[x]--;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt -= prices[x];

    //hide the receipt if there is a change in the table
    document.getElementById("receipt").style.display = "none";
  } else {
    alert(`You currently do not have ${items[x]} items in your cart.`);
  }

  display_all();
}

function checkOut() {
  var totalItems = 0;
  for (let i = 0; i < quantities.length; i++) {
    totalItems += quantities[i];
  }

  if (totalItems === 0) return;

  document.getElementById("receipt").style.display = "grid";

  document.getElementById("num_of_items").innerHTML = totalItems;
  document.getElementById("subtotal").innerHTML = totalOrderAmt.toFixed(2);
  document.getElementById("tax").innerHTML = (totalOrderAmt * 0.15).toFixed(2);
  document.getElementById("total").innerHTML = (totalOrderAmt * 1.15).toFixed(
    2
  );
}

function display_all() {
  var myTable = "<table><th style='width: 100px; text-align: right;'>Num</th>";
  myTable += "<th style='width: 100px; text-align: right;'>Item</th>";
  myTable += "<th style='width: 100px; text-align: right;'>Price</th>";
  myTable += "<th style='width: 100px; text-align: right;'>Quantity</th>";
  myTable += "<th style='width: 100px; text-align: right;'>Total</th>";
  myTable += "<th style='width: 100px; text-align: center;'>Add</th>";
  myTable += "<th style='width: 100px; text-align: center;'>Remove</th>";

  for (i = 0; i < items.length; i++) {
    myTable +=
      "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
    myTable +=
      "<td style='width: 100px; text-align: right;'>" + items[i] + "</td>";
    myTable +=
      "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
    myTable +=
      "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
    myTable +=
      "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
    myTable +=
      "<td style='width: 100px; text-align: center;'><button onclick='add_selection(" +
      i +
      ")'>Add</button></td>";
    myTable +=
      "<td style='width: 100px; text-align: center;'><button onclick='remove_selection(" +
      i +
      ")'>Remove</button></td>";
  }

  myTable += "</table>";

  document.getElementById("demo").innerHTML = myTable;
}

window.onload = function () {
  display_all();
};
