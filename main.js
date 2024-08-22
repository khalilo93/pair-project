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
   function MakeCar(){
    return{
        list:[],
        
        add:add,
        display:display,
        remove:remove,
        filtered:filtered,
        filteredlowest:filteredlowest
    }

   }
   var add = function (){
    this.list.push(createCar(cat.val(),p.val(),d.val(),im.val(),v.val()))
    localStorage.setItem("this.list",JSON.stringify(karhba.list))

    this.display()
   }
   
   console.log(this.list)
   var display= function(){
    $('#car').empty()
    
    var arr=JSON.parse(localStorage.getItem("this.list") )
    karhba.list=arr
    for (let i = 0; i < karhba.list.length; i++) {
   
        var x = $(`<div id=${i} class="all"></div>`);
        x.append(`<div ><p>category:${karhba.list[i].category}</p></div>`);
        x.append(`<div><p>price:${karhba.list[i].price}</p></div>`);
        x.append(`<div><p>releasedate:${karhba.list[i].releasedate}</p></div>`);
        x.append(`<img src="${karhba.list[i].image}"> `);
        x.append(`<div><p>vitessemax:${karhba.list[i].vitessemax}</p></div>`);
        var but = $("<button >remove</button>`)");
        but.on("click", function () {
          karhba.remove(i);
        })
        x.append(but);
        var y = $(`<div id=${i} class="car"></div>`);
        y.append(x)

       
      
      $("#all").append(y);
   
    }
    
   }
   
   
   var cat = $("#category")
   var p = $("#price")
   var d = $("#releasedate")
   var im = $("#image")
   var v = $("#vitesse")
   
   
   
     
   var remove = function(id){
    this.list.splice(id,1)
    var o = this.list
    
    localStorage.setItem("this.list",JSON.stringify(o))
    this.display()
   }


 
  $(".add").on("click",function (event) {
    event.preventDefault()
  
    $("#form").show()
    
  
  });
  $("#addbutton").on("click",function (event) {
    event.preventDefault()
  karhba.add()
    $("#form").hide()
    cat.val(""),
    p.val(""),d.val(""),im.val(""),v.val("")
  
  });

  var karhba =MakeCar ()
  karhba.display()



  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, i) {
   if (predicate(element, i)) {
   acc.push(element);
   }
   });
   return acc;
   }
       
   var filtered=function(){

   var holder= $('.text').val()
   console.log(karhba.list)
   return each(karhba.list,function(elem){
    console.log(karhba.list)
   if(''===holder){
    console.log("heeeeee")
   show(karhba.list)
   }
    else if(elem.category===holder){
   $('.all').append(`
   <div> 
   <img id="${elem.category}" src="${elem.image}" />
    <h2>${elem.price}</h2>
   <h2>${elem.vitessemax}</h2> <h2>
    <h2>${elem.releasedate}</h2>
   </div>`)
           
   } 
       })
       }

       $(".btt").on("click",function (event) {
        event.preventDefault()
        filtered(this.list)
      });



      function each(coll, f) {
        if (Array.isArray(coll)) {
          for (var i = 0; i < coll.length; i++) {
            f(coll[i], i);
          }
        } else {
          for (var key in coll) {
            f(coll[key], key);
          }
        }
      }
      
      function filter(array, predicate) {
        var acc = [];
        each(array, function (element, i) {
          if (predicate(element, i)) {
            acc.push(element);
          }
        });
        return acc;
      }
      
      function map(array, func) {
        var acc = [];
        each(array, function (element, i) {
          acc.push(func(element, i));
        });
        return acc;
      }
      
      function reduce(array, f, acc) {
        if (acc === undefined) {
          acc = array[0];
          array = array.slice(1);
        }
        each(array, function (element, i) {
          acc = f(acc, element, i);
        });
        return acc;
      }
   
   
      var filteredlowest = function() {
        if (karhba.list.length === 0) return;
    
        var lowest = karhba.list[0];
    
        // Loop through the list to find the car with the lowest price
        for (let i = 1; i < karhba.list.length; i++) {
            if (parseFloat(karhba.list[i].price) < parseFloat(lowest.price)) {
                lowest = karhba.list[i];
            }
        }
    
        // Clear previous results if any
        $('.all').remove();
    
        // Append the car with the lowest price to the page
        $('#car').append(`
            <div class="all"> 
                <img id="${lowest.category}" src="${lowest.image}" />
                <h2>Category: ${lowest.category}</h2>
                <h2>Price: ${lowest.price}</h2>
                <h2>Vitesse Max: ${lowest.vitessemax}</h2>
                <h2>Release Date: ${lowest.releasedate}</h2>
            </div>
        `);
    };
    
    // Example usage: Attach this function to a button click event
    $(".btt-lowest").on("click", function(event) {
        event.preventDefault();
        filteredlowest();
    });