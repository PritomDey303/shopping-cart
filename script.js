
//Creating addProduct function

function addProduct(e){
    let x=e.target.parentNode.parentNode.children;
    let product=x[0].innerText;
    let price=x[1].innerText;
    let add=x[2].children[0];
    //Select cart table
    let cart=document.getElementById("cart");

    //Create and append cart row
    let cartRow=document.createElement("tr");
    cart.appendChild(cartRow);

    //Create and append card Product
    let cartProduct=document.createElement("td");
    cartProduct.innerText=product;
    cartRow.appendChild(cartProduct);

    //Create and append cart quantity 
    let quantity=document.createElement("td");
    cartRow.appendChild(quantity);
    let quantitySelect=document.createElement("input");
    quantitySelect.value=1;
    quantitySelect.setAttribute("type","number");
    quantitySelect.setAttribute("max","20");
    quantitySelect.setAttribute("min","1");
    quantitySelect.setAttribute("onchange","changePrice(event)");
    quantitySelect.style.width="50px";
    quantitySelect.style.borderColor="#F2F2F2";
    quantitySelect.style.paddingLeft="10px";
    quantity.appendChild(quantitySelect);

    //Create and append cart Price
    let cartPrice=document.createElement("td");
    cartRow.appendChild(cartPrice);
    let cartPriceInp=document.createElement("li");
    cartPriceInp.setAttribute("value",price);
    cartPrice.appendChild(cartPriceInp);
    cartPriceInp.innerText=price;
    cartPriceInp.style.textAlign="center";
    cartPriceInp.style.listStyle="none";
    cartPriceInp.setAttribute("class","cartPrice");

    //Create and append cartRow remover
    let remove=document.createElement("td");
    remove.innerText="X";
    remove.style.color="red";
    remove.style.cursor="pointer";
    remove.setAttribute("onclick","removeRow(event)");
    cartRow.appendChild(remove);

    //Calling totalPrice function
    totalPrice();
}

//Removing Cart Row
function removeRow(e){
     let row=e.target.parentNode;
     var r=confirm("Are you sure?");
     if(r==true){
         row.remove();
     }
     //Calling totalPrice function
     totalPrice();
}

//Changing price according to quantity
function changePrice(e){
     let x=e.target.parentNode.parentNode.children[2].children[0];

     const item=e.target.value; 
     
     x.innerText=x.value*item;

     //calling totalPrice function
    totalPrice();
}

//totalPrice function
function totalPrice(){
    let cartPrice=document.getElementsByClassName("cartPrice");
    var total=0;
    for(let i=0;i<cartPrice.length;i++){
       total=total+parseInt(cartPrice[i].innerText);
       
    }
    document.getElementById("total").innerText=total;

}