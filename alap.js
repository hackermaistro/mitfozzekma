var tomb=[
    {
        "etelneve":"babgulyás",
        "kepneve":"1.jpg",
        "elkeszitesiido":120,
        "kaloriatartalma":110,


    },
    {
        "etelneve":"spagetti",
        "kepneve":"2.jpg",
        "elkeszitesiido":50,
        "kaloriatartalma":87,
        

    },
    {
        "etelneve":"palacsinta",
        "kepneve":"3.jpg",
        "elkeszitesiido":60,
        "kaloriatartalma":170,
        

    },
    {
        "etelneve":"steak",
        "kepneve":"4.jpg",
        "elkeszitesiido":190,
        "kaloriatartalma":60,
        

    }
]
var sorsolas=()=>{
    var veletlen=Math.floor(Math.random()*tomb.length)
    document.getElementById("etelhelye").innerHTML=`<span style="color:blue">${tomb[veletlen].etelneve}</span> <br>`
    document.getElementById("etelhelye").innerHTML+=`<img src="kepek/${tomb[veletlen].kepneve}" alt="">`
    document.getElementById("etelhelye").innerHTML+=`<span id="zold">${tomb[veletlen].elkeszitesiido}</span> <br>`


    document.getElementById("etelhelye").innerHTML+=`<span class="rozsaszin">${tomb[veletlen].kaloriatartalma}</span> <br>`
    document.getElementById("zold").style.backgroundColor="yellow"
    document.getElementById("zold").style.fontWeight="bold"



}






console.log(tomb)


var sz=""
tomb.forEach(elem =>{
    sz+=`<div class="col-sm-3">
        <p>
        ${elem.etelneve}
        </p>
        <p>
        ${elem.kepneve}
        </p>
        <p>
        ${elem.elkeszitesiido}
        </p>
        <p>
        ${elem.kaloriatartalma}
        </p>
        
    </div>`

});
document.getElementById("kajak").innerHTML=sz