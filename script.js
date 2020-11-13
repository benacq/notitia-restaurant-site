window.onload = function(){

    let button = document.querySelectorAll(".order-btn");

    // console.log(button);

    for(i=0; i<4; i++){
        button[i].addEventListener('click', function(){
            alert("Order has been placed")
        });
    }

}