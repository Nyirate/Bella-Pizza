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

$(document).ready(function(){
  $('button').click(function(){
    // pizza size
    if($('#small:checked').val()){
       var prix= '500Ksh';
      var size=$('#small').val(); + " " + "prix=500Ksh"
      console.log(size)
    }
    if($('#medium:checked').val()){
      var prix= '600Ksh';
     var size=$('#medium').val(); + " " + "prix=600Ksh"
     console.log(size)
   }
   if($('#large:checked').val()){
    var prix= '800Ksh';
   var size=$('#large').val(); + " " + "prix=800Ksh"
   console.log(size)
   }

  //  pizza toppings
  if($('#pep:checked').val()){
    var price= '400Ksh';
   var topping=$('#pep').val(); + " " + "prix=400Ksh"
   console.log(topping)
  }
  if($('#oni:checked').val()){
    var price= '200Ksh';
   var topping=$('#oni').val(); + " " + "prix=200Ksh"
   console.log(topping)
  }
  if($('#saus:checked').val()){
    var price= '600Ksh';
   var topping=$('#saus').val(); + " " + "prix=600Ksh"
   console.log(topping)
  }
  if($('#bac:checked').val()){
    var price= '450Ksh';
   var topping=$('#bac').val(); + " " + "prix=450Ksh"
   console.log(topping)
  }
  if($('#ches:checked').val()){
    var price= '500Ksh';
   var topping=$('#ches').val(); + " " + "prix=500Ksh"
   console.log(topping)
  }
  if($('#pine:checked').val()){
    var price= '500Ksh';
   var topping=$('#pine').val(); + " " + "prix=500Ksh"
   console.log(topping)
  }
  if($('#spine:checked').val()){
    var price= '300Ksh';
   var topping=$('#spine').val(); + " " + "prix=300Ksh"
   console.log(topping)
  }
  if($('#cris:checked').val()){
    var prices= '1000Ksh';
   var crust=$('#cris').val(); + " " + "prix=1000Ksh"
   console.log(crust)
  }
  if($('#stuf:checked').val()){
    var prices= '1200Ksh';
   var crust=$('#stuf').val(); + " " + "prix=1200Ksh"
   console.log(crust)
  }
  if($('#glut:checked').val()){
    var prices= '1500Ksh';
   var crust=$('#glut').val(); + " " + "prix=1500Ksh"
   console.log(crust)
  }
  });
});

