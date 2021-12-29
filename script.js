let adds = document.getElementsByClassName('add')

for(let btn of adds){
    btn.addEventListener('click', function(){
        btn.nextElementSibling.innerHTML++;
        sum()
    })
}
let minus = document.getElementsByClassName('minus')

for(let btn of minus){
    btn.addEventListener('click', function(){
        if(btn.previousElementSibling.innerHTML>0){
            btn.previousElementSibling.innerHTML--;
            sum()
        }
    })
}

let trash = document.getElementsByClassName('fa-trash-alt')
for(let btn of trash){
    btn.addEventListener('click', function(){
        btn.parentNode.remove();
        sum()
    })
}

let hearts = document.getElementsByClassName('fa-heart')
for(let heart of hearts){
    heart.addEventListener('click', function(){
        heart.classList.toggle('myClass')
        // if (heart.style.color==="red") {
        //     heart.style.color="gray"
        // } else {
        //     heart.style.color="red"
        // }
    })
}




function sum(){
    let price = document.getElementsByClassName('price')
    let qte = document.getElementsByClassName('qte')
    let s = 0;
    for(let i=0; i<price.length; i++){
        s+= price[i].innerHTML * qte[i].innerHTML
    }
    return document.getElementById('totalp').innerHTML="Shopping Bag total : $"+ s
}