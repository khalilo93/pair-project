$("#form").hide();

function generateID() {
  var count = 0;
  return function () {
    return count++;
  };
}
var id = generateID();
function createCar(category, price, releasedate, vitessemax, image) {
  return {
    category: category,
    price: price,
    releasedate: releasedate,
    vitessemax: vitessemax,
    image: image,
    
    id: id(),
  };
}
function MakeCar() {
  return {
    list: [],

    add: add,
    display: display,
    remove: remove,
    
  };
}
var add = function () {
  this.list.push(createCar(cat.val(), p.val(), d.val(), v.val(), im.val()));
  localStorage.setItem("this.list", JSON.stringify(karhba.list));
  
  this.display();
};

var display = function () {
  $("#car").empty();

  var arr = JSON.parse(localStorage.getItem("this.list"));
  karhba.list = arr;
  for (let i = 0; i < karhba.list.length; i++) {
    var x = $(`<div id=${i} class="all"></div>`);
    x.append(`<div ><p>category:${karhba.list[i].category}</p></div>`);
    x.append(`<div><p>price:${karhba.list[i].price}</p></div>`);
    x.append(`<div><p>releasedate:${karhba.list[i].releasedate}</p></div>`);
    x.append(`<div><p>vitessemax:${karhba.list[i].vitessemax}</p></div>`);
    x.append(`<img src="${karhba.list[i].image}"> `);
    var but = $("<button >remove</button>`)");
    but.on("click", function () {
      karhba.remove(i);
    });
    x.append(but);
    $("#car").append(x);
  }
};

var cat = $("#category");
var p = $("#price");
var d = $("#releasedate");
var v = $("#vitesse");
var im = $("#image");
var f= $('#find')

var remove = function (id) {
  this.list.splice(id, 1);
  var o = this.list;
  

  localStorage.setItem("this.list", JSON.stringify(o));
  this.display();
};

function show() {
  $("#form").show();
  $(".all").hide();
}
$("#add").on("click", function (event) {
  event.preventDefault();
  karhba.add();
  $("#form").hide();
    cat.val("");
    p.val("");
    d.val("");
    im.val("");
    v.val("");
  
});

var karhba = MakeCar();
karhba.display();

