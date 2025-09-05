let x = async () => {
  try {
    let data = await fetch("https://dummyjson.com/products");
    let finalData = await data.json();
    console.log(finalData);
    finalData.products.map((x) => {
      let section = document.getElementById("sec");
      section.innerHTML += `<div class="card">
      <img src="${x.images[0]}" width="200px" height="200px">
        <h5>${x.title}</h5>
        <p>Category: ${x.category}</p>
        <p><b>Price: ${x.price} $</b></p>
        <button>Add Cart</button>
    </div>`;
    });
  } catch (error) {
    console.log("error");
  }
};

x();

function searchs(){
    let x = document.getElementsByClassName('card');
    let input = document.getElementById('inp').value;
    for (let index = 0; index < x.length; index++) {
        if (x[index].innerHTML.toLowerCase().includes(input)) {
            x[index].style.display = "block";
        } else {
            x[index].style.display = "none";
        }
        
    }
}
