 
//INSIDE THOSE DIVS GOES DATAS APIS CALLS
 let DivContainer = document.getElementById('container');
 let DivContainer2 = document.getElementById('container2');
 let DivContainer3 = document.getElementById('container3');
 let backToTopButton = document.getElementById("btn-back-to-top");

async function getData(){
    try {
    //FIRST CALL
    let response1 = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Gluten+Free&product_type=nail_polish')
    let data = await response1.json();
        DivContainer.innerHTML = getImages(data);
  
        descriptionsEventsjQuery();
          
     //SECOND CALL  
    let response2 = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Natural&product_type=bronzer')
    let data2 = await response2.json()
    DivContainer2.innerHTML = getData2(data2)
    //console.log(data2)
    descriptions4EventsjQuery()

    //THIRD CALL
    let respnse3 = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_category=gel&product_type=eyeliner')
    let data3 = await respnse3.json();
    DivContainer3.innerHTML = getData3(data3);
   
    descriptions3EventsjQuery()



 
}catch(message){
    throw new Error(message);
}

}
// GRAB THE APIS OBJECTS CALL 1
 function getImages(dataApi1) {

    var images = '';
    for(let brands of dataApi1) {

    images += `<div class='products'>`;
    images += `<img src=" ${brands['image_link']} "/>`;
    images +=  `<h4>`;
    images += `<strong> Brand: </strong>`;
    images += `<i>${brands['brand']}</i>`;
    images +=   `</h4>`;
    images += `<strong> Name: </strong>`;
    images += `<p>${brands['name']}</p>`;
    images += `</div>`;
    images += `<div class='div2'>`
    images +=  `<button class='btn1'>Price</button>`
    images  += '<section class="hidden">';
    images += `<i>${'$'+brands['price']}</i>`;
    images += '</section>';
    images += `</div>`;
    images += `<div class='div3'>`
    images +=  `<button class='btn2'>Tags</button>`
    images  += '<section class="hidden">';
    images += `<strong> Tags: </strong>`;
    images += `<i>${brands['tag_list'].join(', ')}</i>`;
    images += '</section>';
    images += `</div>`; 
 

}
   
return images; 
    

 }getData()

// GRAB THE APIS OBJECTS CALL 2
 function getData2(dataApi2){
    let newString = ''
    for(let newData of dataApi2){

    newString += `<div class='products2'>`;
    newString += `<img src=" ${newData['image_link']} "/>`;
    newString += `<strong>Name:</strong>`;
    newString += `<br>`;
    newString += `<i>${newData['name']}</i>`;
    newString += `<div class='div4'>`;
    newString += `<br>`
    newString +=  `<button class='btn4'>Tags</button>`
    newString  += '<section class="hidden">';
    newString += `<h4>`;
    newString += `<strong> Tags: </strong>`;
    newString += `<br>`
    newString += `<i>${newData["tag_list"].join(', ')}</i>`;
    newString += `</h4>`
    newString += '</section>';
    newString += `<div class='div5'>`
    newString +=  `<button class='btn5'>Price</button>`
    newString += '<section class="hidden">';
    newString += `<i>${'$'+newData['price']}</i>`;
    newString += '</section>';
    newString += `</div>`;
    newString += `</div>`;
    newString += `</div>`;
  
  
}

return newString

}


// GRAB THE APIS OBJECTS CALL 3

function getData3(dataApi3){
    let newString = ''
    for(let newData of dataApi3){
    newString += `<div class='products3'>`;
    newString +=  `<button class='btn3'>Show this Product!</button>`
    newString +=  '<section class="hidden">';
    newString += `<img src=" ${newData['image_link']} "/>`;
    newString +=  `<h4>`;
    newString += `<strong> Name: </strong>`;
    newString += `<p>${newData['name']}</p>`;
    newString +=  `</h4>`;
    newString += `<strong> Description: </strong>`;
    newString += `<p>${newData['description']}</p>`;
    newString += '</section>';
    newString += `</div>`;


}

    return newString

}

//JQUERY TO GET THE CLICK ON THE BUTTONS AND DISPLAY DATA CALL3
 function descriptions3EventsjQuery() {
    let descriptions3 = $('#container3 button');
    descriptions3.on('click', function() {
    $(this).next().slideToggle() 
    });
 
   
}
//JQUERY TO GET THE CLICK ON THE BUTTONS AND DISPLAY DATA CALL2
function descriptions4EventsjQuery() {
    let descriptions4 = $('#container2 button');
    descriptions4.on('click', function() {
    $(this).next().slideToggle() 
    });
 
   
}
//JQUERY TO GET THE CLICK ON THE BUTTONS AND DISPLAY DATA CALL1
function descriptionsEventsjQuery() {
    let descriptions = $('#container button');
    descriptions.on('click', function() {
    $(this).next().slideToggle();
    });
}


//Function to the scrollButton backToTopButton
    window.addEventListener("scroll", scrollFunction); //two paramenters

function scrollFunction(){
if(window.pageYOffset >= 100){ // show backToTopButton
    backToTopButton.style.display = "block";

}
else{ // hide backToTopButton
    backToTopButton.style.display = "none";  // set the value of this display property to none

}

}
    backToTopButton.addEventListener("click", clickFunction);

    function clickFunction(){
        window.scrollTo(0,0);

        
    }











  







 
     

      
          
       





     


 

    

  



 
    




    









          



    


      
    
    
    

      