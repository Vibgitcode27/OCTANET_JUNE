let count = 0;
const deep = document.getElementById("instaset");
const above = document.getElementById("logout");

deep.addEventListener("click", function(event) {
   console.log("button clicked");
   open();
});

function open(){
    console.log("called")

    if(count == 0){
        above.style.display ="flex";
        count = count + 1;
    }

    else{
        above.style.display = "none";
        count = 0;
        
    }

   
}

let we = 0;

function show(){
    const lal = document.getElementById("liked");
    const fifa = document.getElementById("fifa");
    if(we === 0){
        lal.src = "images/hearts.png";
        fifa.textContent = "1025 likes"
        we = we +1;
        
    }
    
    else{
        lal.src = "images/heart.png";
        fifa.textContent = "1024 likes"
        we = 0;
    }
}
function showone(){
    const lal = document.getElementById("likedone");
    if(we === 0){
        lal.src = "images/hearts.png";
        we = we +1;

    }

    else{
        lal.src = "images/heart.png";
        we = 0;
    }
}
function showtwo(){
    const lal = document.getElementById("likedtwo");
    if(we === 0){
        lal.src = "images/hearts.png";
        we = we +1;

    }

    else{
        lal.src = "images/heart.png";
        we = 0;
    }
}
function showthree(){
    const lal = document.getElementById("likedthree");
    const fifa = document.getElementById("fifathree");
    if(we === 0){
        lal.src = "images/hearts.png";
        fifa.innerText = "103 likes"
        we = we +1;
        
    }
    
    else{
        lal.src = "images/heart.png";
        fifa.innerText = "102 likes"
        we = 0;
    }
}
function showfour(){
    const lal = document.getElementById("likedfour");
    if(we === 0){
        lal.src = "images/hearts.png";
        we = we +1;

    }

    else{
        lal.src = "images/heart.png";
        we = 0;
    }
}
function showfive(){
    const lal = document.getElementById("likedfive");
    if(we === 0){
        lal.src = "images/hearts.png";
        we = we +1;

    }

    else{
        lal.src = "images/heart.png";
        we = 0;
    }
}
function showsix(){
    const lal = document.getElementById("likedsix");
    if(we === 0){
        lal.src = "images/hearts.png";
        we = we +1;

    }

    else{
        lal.src = "images/heart.png";
        we = 0;
    }
}



const whiteheart = document.querySelector('.whiteheart');
const box = document.getElementById("dool");

const showheart = (e) => {
    console.log("function Called");
    const fam = document.createElement('img');

    fam.src = "images/heart (1).png";
    whiteheart.appendChild(fam);
    

    setTimeout(() => {
        fam.remove();
    },600)

}


box.addEventListener('dblclick', (e) =>{
    console.log("double");
    showheart(e);
    const lal = document.getElementById("liked");
    lal.src = "images/hearts.png";
    const fifa = document.getElementById("fifa");
    fifa.textContent = "1025 likes"
});



const whitehearttwo = document.querySelector('.whitehearttwo');
const boxtwo = document.getElementById("dooltwo");

const showhearttwo = (e) => {
    console.log("function Called");
    const jam = document.createElement('img');

    jam.src = "images/heart (1).png";
    whitehearttwo.appendChild(jam);
    

    setTimeout(() => {
        jam.remove();
    },600)

}


boxtwo.addEventListener('dblclick', (e) =>{
    console.log("double");
    showhearttwo(e);
    const lal = document.getElementById("likedone");
    lal.src = "images/hearts.png";
});

const whiteheartthree = document.querySelector('.whiteheartthree');
const boxthree = document.getElementById("doolthree");

const showheartthree = (e) => {
    console.log("function Called");
    const three = document.createElement('img');

    three.src = "images/heart (1).png";
    whiteheartthree.appendChild(three);
    

    setTimeout(() => {
        three.remove();
    },600)

}


boxthree.addEventListener('dblclick', (e) =>{
    console.log("double");
    showheartthree(e);
    const lal = document.getElementById("likedthree");
    lal.src = "images/hearts.png";
    const fifa = document.getElementById("fifathree");
    fifa.innerText = "103 likes"
});

 const profile = document.getElementById("adminfile");

 profile.addEventListener("click",(k) =>{
    window.location = "profile.html";
 })





