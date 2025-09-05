let x = async ()=>{
    try {
        let data = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner");
    let finalData = await data.json();
    console.log(finalData);
    finalData.map((x)=>{
        let section = document.body.querySelector('.sec');
        section.innerHTML += `<div class="card">
            <img src="${x.image_link}" alt="Loading" width="150px" height="180px" id="img">
            <p class="p1">Name:${x.name}</p>
            <p class="p1">Brand:${x.brand}</p>
            <p class="p1">Category:${x.category}</p>
            <p class="p1">Price:${x.price} ${x.price_sign}</p>
            <button id="btn">Add cart</button>
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

