let selectButton = document.querySelectorAll(".select");
let selectedPackage = document.querySelector(".selected-water");
let pickedWater = [];

pickedWater.map(function (specificWater) {
  const waterProduct = document.createElement("div");
  waterProduct.classList.add("main_water");
  waterProduct.innerHTML = `
    <p>${specificWater.name}</p>
    <div>
  //     <button class="decrement">-</button>

  //     <p>1</p>
  //     <button class="increment">+</button>
  //     </div>
    <p>${specificWater.price}</p>
    `;
  selectedPackage.append(waterProduct);
});

// Add a blank div and selection elements when the selected button is clicked

for (let button of selectButton) {
  //   button.addEventListener("click", (e) => {
  //     const parentDiv = e.target.parentElement;
  //     const selectedWater = document.createElement("div");
  //     selectedWater.classList.add("selected-water");
  //     selectedWater.innerHTML = `
  //      <div>
  //     <button class="decrement">-</button>

  //     <p>1</p>
  //     <button class="increment">+</button>
  //     </div>
  //     `;
  //     parentDiv.appendChild(selectedWater);
  //     console.log(parentDiv);
  //   });
  button.addEventListener("click", function (event) {
    selectedPackage.classList.toggle("show-selected");
    // console.log("hello")
    const waterName = event.target.parentElement.children[1].textContent;
    console.log(waterName);
    const waterPrice = parseInt(event.target.parentElement.children[2].textContent.replace("Ksh.","").replace(" Per Litre",""))
    console.log(waterPrice);

    if (button.textContent.toLowerCase() === "select") {
      button.textContent = "Selected";
      let waterType = {
        name: waterName,
        price: waterPrice,
      };
      pickedWater.push(waterType);
      console.log(pickedWater);
      
    } else {
      button.textContent = "select";
      
      const indexToremove=pickedWater.findIndex(function(element){
        element.name===waterName
      })
      pickedWater.splice(indexToremove,1)
      console.log(pickedWater)
    }

    const waterProduct = document.createElement("div");
    // Update DOM
    pickedWater.map(function (specificWater) {
      waterProduct.classList.add("main_water");
      waterProduct.innerHTML = `
    <p>${specificWater.name}</p>
    <div class="quantity">
      <button class="decrement">-</button>

       <p>1</p>
       <button class="increment">+</button>
       </div>
    <p>${specificWater.price}</p>
    <p class="item-total">${specificWater.price}</p>
    `;
    });
    selectedPackage.append(waterProduct);
  });
}
selectedPackage.addEventListener("click",function(event){
    if(event.target.classList.contains("increment")){
        event.target.parentElement.children[1].textContent++
        // updatePrice()
        // console.log("world")
    }else if(event.target.classList.contains("decrement")){
        if(event.target.parentElement.children[1].textContent>1)
        event.target.parentElement.children[1].textContent--
        // console.log("hello")
        // updatePrice()
    }
})


function updatePrice(){
const waterSelectedType=document.querySelector(".main_water")
console.log(waterSelectedType)
for(let type of waterSelectedType){
    const waterTypePrice=parseInt(type.children[2].textContent.replace("Ksh.","").replace(" Per Litre",""))

    const waterQuantity=parseInt(type.children[1].children[1].textContent)
    const totalWaterPrice=waterQuantity*waterTypePrice
    const waterTotal=type.children[3].textContent
    // updatePrice()
}
// console.log(waterTypePrice)

}
