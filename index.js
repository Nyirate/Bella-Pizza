// business logic
function Pizorder(size, toppings, crust, number, delivery) {
  this.sizing = size;
  this.topping = toppings;
  this.crust = crust;
  this.number = number;
  this.deliver = delivery;
}

Pizorder.prototype.information = function() {
  return this.sizing + ", " + this.topping + ", " + this.crust + ", " + this.number + ", " + this.deliver
}

$(document).ready(function(){
  $('button').click(function(){
    // pizza size
    if($('#small:checked').val()){
       var prix= '500Ksh';
      var size=$('#small').val()+ " " + "price=500Ksh";
      console.log(size)
    }
    if($('#medium:checked').val()){
      var prix= '600Ksh';
     var size=$('#medium').val() + " " + "price=600Ksh"
     console.log(size)
   }
   if($('#large:checked').val()){
    var prix= '800Ksh';
   var size=$('#large').val() + " " + "price=800Ksh";
   console.log(size)
   }

  //  pizza toppings

  if($('#pep:checked').val()){
    var price= '400Ksh';
   var topping=$('#pep').val() + " " + "price=400Ksh";
   console.log(topping)
  }
  if($('#oni:checked').val()){
    var price= '200Ksh';
   var topping=$('#oni').val() + " " + "price=200Ksh";
   console.log(topping)
  }
  if($('#saus:checked').val()){
    var price= '600Ksh';
   var topping=$('#saus').val() + " " + "price=600Ksh";
   console.log(topping)
  }
  if($('#bac:checked').val()){
    var price= '450Ksh';
   var topping=$('#bac').val() + " " + "price=450Ksh";
   console.log(topping)
  }
  if($('#ches:checked').val()){
    var price= '500Ksh';
   var topping=$('#ches').val() + " " + "price=500Ksh";
   console.log(topping)
  }
  if($('#pine:checked').val()){
    var price= '500Ksh';
   var topping=$('#pine').val() + " " + "price=500Ksh";
   console.log(topping)
  }
  if($('#spine:checked').val()){
    var price= '300Ksh';
   var topping=$('#spine').val() + " " + "price=300Ksh";
   console.log(topping)
  }

  // pizza crust
  if($('#cris:checked').val()){
    var prices= '1000Ksh';
   var crust=$('#cris').val() + " " + "prices=1000Ksh";
   console.log(crust)
  }
  if($('#stuf:checked').val()){
    var prices= '1200Ksh';
   var crust=$('#stuf').val() + " " + "prices=1200Ksh";
   console.log(crust)
  }
  if($('#glut:checked').val()){
    var prices= '1500Ksh';
   var crust=$('#glut').val() + " " + "prices=1500Ksh";
   console.log(crust)
  }

  // pizza delivery
  if($('#no:checked').val()){
   var choice=$('#no').val()  + " " + "price1=0Ksh";
   var price1= '0Ksh'
   console.log(choice)
  }
  if($('#yes:checked').val()){
    var location=prompt('Enter your Location in Order For Your Pizza To Be Delivered At Your Place');
    if(location===null){
      confirm('please enter your location');
    }
    else{
      confirm('Your Pizza will be deivered to you soon')
    }
   var choice=$('#yes').val()  + " " + "price1=500Ksh";
   var price1='500Ksh'
   console.log(choice)
  }
  // pizza number
  var number=$("select#num").val();
  console.log(number);
  
  var sum=parseInt(prix)+parseInt(price)+parseInt(prices)+parseInt(price1);
  console.log(sum)
  var newPiza=new Pizorder(size,topping,crust,number,choice);
  console.log(newPiza)
  $('h2#comm').show()
  $('p.T').show()
  $('ol#myorder').append("<li><span>"+newPiza.information() + "</span></li>")
  $('p#an').append('   ' + sum + '  ')
  });
});

