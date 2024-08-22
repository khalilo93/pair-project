$("form").hide()
function generateID(){
    var count = 0 
    return function (){
        return count++ 
    }
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
     display:display,
     remove:remove ,
     compare :compare ,
 }

}
var add = function (){
 this.list.push(createCar(cat.val(),p.val(),d.val(),im.val(),v.val()))
 localStorage.setItem("this.list",JSON.stringify(karhba.list))

 this.display()
}


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


function show() {
 $("#form").show();
 $(".all").hide();
}
$("#add").on("click",function (event) {
 event.preventDefault()
 karhba.add()

});


var karhba =MakeCar ()
karhba.display()

// 



  
var compare = function ($('#set')){
    var acc = []
    for (let i = 0; i < karhba.list.length; i++) {
        
           if (cat===$('#set')){
               acc.push(ArrOfObject[i])
           }
    } 
    return acc 
}