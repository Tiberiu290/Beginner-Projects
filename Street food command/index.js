
{
    let coma = document.getElementById("command")

    coma.addEventListener("mouseover", function (){
        coma.style.color = "black"
    })

    coma.addEventListener("mouseout", function (){
        coma.style.color = "rgb(201, 73, 94)"
    })
}



/* Quantity function => TOTAL PRICE */ 

var totalPrice = 0;

//* Hamburger Buttons and Quantity*/

var buttonPlusH = document.getElementById("btn-plus-h")
var buttonMinusH= document.getElementById("btn-minus-h")
var quantityHam = document.getElementById("quantity-ham")



buttonPlusH.addEventListener("click", function (){
let currentQuantity = parseInt(quantityHam.textContent);
if(currentQuantity < 10){
    let newQuantity = currentQuantity + 1;
    quantityHam.textContent = newQuantity; 
    totalPrice += 2.5;
    document.getElementById("total-price").textContent = totalPrice.toFixed(2);

}
});



buttonMinusH.addEventListener("click", function (){
    let currentQuantity = parseInt(quantityHam.textContent);
    if(currentQuantity > 0){
    let newQuantity = currentQuantity - 1;
    quantityHam.textContent = newQuantity;}
    if(totalPrice > 0){
        totalPrice -= 2.5;
    document.getElementById("total-price").textContent = totalPrice.toFixed(2);
    }else{
        alert("Wrong quantity")
    }
    });


/* Hamburger Buttons and Quantity*/





/* Pizza Buttons and Quantity */


var buttonPlusP = document.getElementById("btn-plus-p");
var buttonMinusP = document.getElementById("btn-minus-p");
var quantityPiz = document.getElementById("quantity-piz")

buttonPlusP.addEventListener("click", function (){
 let currentQuantity = parseInt(quantityPiz.textContent);
if(currentQuantity < 10){
let newQuantity = currentQuantity + 1;
quantityPiz.textContent = newQuantity;
totalPrice += 3;
document.getElementById("total-price").textContent = totalPrice.toFixed(2)

}
});


buttonMinusP.addEventListener("click", function () {
    let currentQuantity = parseInt(quantityPiz.textContent)
    if(currentQuantity > 0){
    let newQuantity = currentQuantity - 1;
    quantityPiz.textContent = newQuantity;
    totalPrice -= 3;
    document.getElementById("total-price").textContent = totalPrice.toFixed(2)
    }
})


/* Pizza Buttons and Quantity */



/* Shaormica Buttons and Quantity */ 


var buttonPlusS = document.getElementById("btn-plus-s");
var quantitySha = document.getElementById("quantity-sha");
var buttonMinusS = document.getElementById("btn-minus-sha");



buttonPlusS.addEventListener("click", function (){
    let currentQuantity = parseInt(quantitySha.textContent);
    if(currentQuantity < 10){
    let newQuantity = currentQuantity + 1;
    quantitySha.textContent = newQuantity;
    totalPrice += 5;
    document.getElementById("total-price").textContent = totalPrice.toFixed(2)

};
})



buttonMinusS.addEventListener("click", function() {
    let currentQuantity = parseInt(quantitySha.textContent)
    if(currentQuantity > 0){
    let newQuantity = currentQuantity - 1
    quantitySha.textContent = newQuantity;
    totalPrice -= 5;
    document.getElementById("total-price").textContent = totalPrice.toFixed(2)
    
    };
} )

















































