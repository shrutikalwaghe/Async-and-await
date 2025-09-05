let x = async ()=>{
    try {
        let data = await fetch("https://fakestoreapi.com/products");
        let finalData = await data.json();
        console.log(finalData);
        finalData.map((x)=>{
            let body = document.body;
            // let section = document.createElement('section');
            let section = document.body.querySelector('.sec');
            // body.appendChild(section);
            section.innerHTML += `<div class="card">
                <img src='${x.image}' width='120px' heigth='80px'>
                <p>${x.title}</p>
                 <p>${x.price} $</p>
                 <button>Add cart</button> 
            </div>`
        })
    } catch (error) {
        console.log(error);
    }
}
x();

function Search(){
    let input = document.getElementById('ip1').value;
    let x = document.getElementsByClassName('card');
    for (let index = 0; index < x.length; index++) {
        if (x[index].innerHTML.toLowerCase().includes(input)) {
            x[index].style.display = "card"
        } else {
            x[index].style.display = "none"
        }
        
    }

}

