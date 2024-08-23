$("#form").hide();

function generateID() {
    let count = 0;
    return function () {
        return count++;
    };
}

const id = generateID();

function createCar(category, price, releasedate, image, vitessemax) {
    return {
        category: category,
        price: parseFloat(price),
        releasedate: releasedate,
        image: image,
        vitessemax: vitessemax,
        id: id()
    };
}

function MakeCar() {
    return {
        list: [],
        add: add,
        display: display,
        remove: remove,
        filtered: filtered,
        
    };
}

const add = function () {
    this.list.push(createCar(cat.val(), p.val(), d.val(), im.val(), v.val()));
    localStorage.setItem("this.list", JSON.stringify(this.list));
    this.display();
};

var display= function(){
  $('#car').empty()
  var arr=JSON.parse(localStorage.getItem("this.list") )
  karhba.list = arr 
  for (let i = 0; i < arr.length; i++) {
      var x = $(`<div id=${i} class="all"></div>`);
      x.append(`<div ><p>category:${arr[i].category}</p></div>`);
      x.append(`<div><p>price:${arr[i].price}</p></div>`);
      x.append(`<div><p>releasedate:${arr[i].releasedate}</p></div>`);
      x.append(`<img src="${arr[i].image}"> `);
      x.append(`<div><p>vitessemax:${arr[i].vitessemax}</p></div>`);
      var but = $("<button >remove</button>`)");
      but.on("click", function () {
          karhba.remove(i);
      })
      x.append(but);
  $("#car").append(x);
 
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
 

const remove = function (id) {
  this.list.splice(id, 1);
  localStorage.setItem("this.list", JSON.stringify(this.list));
  this.display();
};
 

$(".add").on("click", function (event) {
  event.preventDefault();
  $("#form").show();
});

$("#addbutton").on("click", function (event) {
  event.preventDefault();
  karhba.add();
  $("#form").hide();
  cat.val("");
  p.val("");
  d.val("");
  im.val("");
  v.val("");
});

$(".btt").on("click", function (event) {
  event.preventDefault();
  karhba.filtered();
});
 


const cat = $("#category");
const p = $("#price");
const d = $("#releasedate");
const im = $("#image");
const v = $("#vitesse");
