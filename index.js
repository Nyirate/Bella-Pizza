// business logic
function Pizorder(size, toppings, crust, number, delivery) {
  this.sizing = size;
  this.topping = toppings;
  this.crust = crust;
  this.number = number;
  this.deliver = delivery;
}

Pizorder.prototype.information = function() {
  return this.size + ", " + this.toppings + ", " + this.crust + ", " + this.number + ", " + this.delivery
}
