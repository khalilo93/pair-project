$("#form").hide();


function generateID() {
    var count = 0;
    return function () {
      return count++;
    };
  }
  var id = generateID();
   function createCar(category,price,releasedate,image,vitessemax){
    return{
        category:category,
        price:price,
        releasedate:releasedate,
        image:image,
        vitessemax:vitessemax,
        id:id()
    }
   }
   function MakeCar(initial){
    return{
        category:initial,
        list:[],
        add:add,
        addHtml:addHtml,
        display:display,
        remove:remove
    }

   }

   

   var display= function(){
    $('#car').empty()
    var y = this;
    for (let i = 0; i < this.list.length; i++) {
        var x = $(`<div id=${i} class="dis"></div>`);
        x.append(`<div ><p>category:${this.list[i].category}</p></div>`);
        x.append(`<div><p>price:${this.list[i].price}</p></div>`);
        x.append(`<div><p>releasedate:${this.list[i].releasedate}</p></div>`);
        x.append(`<img src="${this.list[i].image}"> `);
        x.append(`<div><p>vitessemax:${this.list[i].vitessemax}</p></div>`);
        var but = $("<button >remove</button>`)");
        but.on("click", function (i) {
            y.remove(i);
        })
        x.append(but);
    $("#car").append(x);
   
    }
   }
   var cat = $("#category")
   var p = $("#price")
   var d = $("#releasedate")
   var im = $("#image")
   var v = $("#vitesse")
   var add = function (category,price,releasedate,image,vitessemax){

 
  console.log(cat.val(),p.val(),d.val(),im.val(),v.val());
  
    this.list.push(createCar(category,price,releasedate,image,vitessemax))
    this.display()
   }
   var addHtml = function (){

 
    console.log(cat.val(),p.val(),d.val(),im.val(),v.val());
    
      this.list.push(createCar(cat.val(),p.val(),d.val(),im.val(),v.val()))
      this.display()
     }
   var remove = function(id){
    this.list.splice(id,1)
    this.display()
   }


   function show() {
    $("#form").show();
    $(".dis").hide();
  }
  $("#add").on("click",function (event) {
    event.preventDefault()
    karhba.addHtml()
  });


  var karhba =MakeCar ()
  karhba.add(
    "BMW serie 7",
    "782 900",
    "2024",
    "https://catalogue.automobile.tn/big/2023/04/46928.webp?t=1682351339",
    "250 km/h"
  )

  karhba.add(
    "Mercedes-Benz GLC Coupé",
    "339 000",
    "2023",
    "https://catalogue.automobile.tn/big/2023/11/47032.webp?t=1719823000",
    "227 km/h"
  )
  karhba.add(
    "toyota carolla sedan",
    "111 800",
    "2022",
    "https://catalogue.automobile.tn/big/2024/01/47083.webp?t=1706098072",
    "200 km/h"
  )
  karhba.display()
  
