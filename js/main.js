document.querySelectorAll("button").forEach( function(item){

    item.onclick = function (){
        document.querySelector("#demo").style.color = item.dataset.color;
    }
});

document.querySelector("#red1").onclick = function(){
    document.querySelector("#demo1").style.color= 'red';
}
document.querySelector("#green1").onclick = function(){
    document.querySelector("#demo1").style.color= 'green';
}
document.querySelector("#blue1").onclick = function(){
    document.querySelector("#demo1").style.color= 'blue';
}

function taskData(){

    var mouse  = document.querySelector("#test").value;
    var result = document.querySelector("#result");

    if(mouse == ""){
        return false;
    }else{
        var myLi = document.createElement("li");
        myLi.innerHTML = mouse;
        result.appendChild(myLi);
        document.querySelector("#test").value = "";
        return false;
    }
}

window.addEventListener("scroll",function(){

    var scrollValue = window.scrollY;
    var navbar = document.querySelector(".navbar");

    if(scrollValue>500){
        navbar.classList.remove("bg-primary");
        navbar.classList.add("bg-danger");
    }else{
        navbar.classList.remove("bg-danger");
        navbar.classList.add("bg-primary");
    }

});