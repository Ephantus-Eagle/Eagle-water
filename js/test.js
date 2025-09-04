let selectButton = document.querySelectorAll(".select");
let selectedPackage = document.querySelector(".selected-water");
let pickedWater = [];
let orderButton = document.querySelector("#order");

function updateDom() {
  // const waterTotalCost=document.createElement("div")
  // waterTotalCost.classList.add("cumulative-cost")
  // waterTotalCost.innerHTML`
  // <p class="total-amount"> </p>

  // `
  // selectedPackage.appendChild(waterTotalCost)
  const waterProduct = document.createElement("div");
  // Update DOM
  pickedWater.map(function (specificWater) {
    waterProduct.classList.add(`main_water`);
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
    console.log(specificWater.name);
    selectedPackage.appendChild(waterProduct);
  });
}

// updateDom();

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
    // console.log("hello")
    selectedPackage.classList.toggle("show-selected");

    const waterName = event.target.parentElement.children[1].textContent;
    console.log(waterName);
    const waterPrice = parseInt(
      event.target.parentElement.children[2].textContent
        .replace("Ksh.", "")
        .replace(" Per Litre", "")
    );
    console.log(waterPrice);

    if (button.textContent.toLowerCase() === "select") {
      button.textContent = "Selected";
      button.style.backgroundColor="red"

      let waterType = {
        name: waterName,
        price: waterPrice,
      };

      pickedWater.push(waterType);
      console.log(pickedWater);
      const mainWater = document.querySelectorAll(".main_water");
      console.log(mainWater);
      //   if (mainWater) {
      // mainWater.remove();
      //   }
      //   orderButton.style.display="block"
      orderButton.style.display="block"

      updateDom();
    } else {
      button.textContent = "select";
      button.style.backgroundColor=" blue"
      orderButton.style.display="none"
      const indexToRemove = pickedWater.findIndex(function (element) {
        return element.name === waterName;
      });
      console.log(indexToRemove);
      // Remove item from array
      pickedWater.splice(indexToRemove, 1);

      console.log(pickedWater);
      //   Remove item from DOM
      const mainWater = document.querySelectorAll(".main_water");

      mainWater.forEach(item=>{
        const productName =item.children[0]
        const productNameContent = productName.textContent;
        if(productName.textContent===waterName){
          productName.parentElement.remove()
        }
        console.log(productNameContent)
      })

      // selectedPackage.innerHTML=""
      //   updateDom();
      // orderButton.style.display="none"
    }
  });
}

selectedPackage.addEventListener("click", function (event) {
  if (event.target.classList.contains("increment")) {
    event.target.parentElement.children[1].textContent++;
    updatePrice();
    

  } else if (event.target.classList.contains("decrement")) {
    if (event.target.parentElement.children[1].textContent > 1)
      event.target.parentElement.children[1].textContent--;
    // console.log("hello")
    updatePrice();
  }
  // console.log("world")
  
});


function updatePrice() {
  const waterSelectedType = document.querySelectorAll(".main_water");
  console.log(waterSelectedType);
  for (let type of waterSelectedType) {
    const waterTypePrice = parseInt(
      type.children[2].textContent.replace("Ksh.", "").replace(" Per Litre", "")
    );

    const waterQuantity = parseInt(type.children[1].children[1].textContent);
    const totalWaterPrice = waterQuantity * waterTypePrice;
    const waterTotal = type.children[3];
    waterTotal.textContent = `Ksh.${totalWaterPrice}`;
    console.log(waterTotal);
  }

  // updatePrice()
}

// function updateSelectedWaterPrice(){
//   const allWaterTotal=document.querySelectorAll(".item-total")
//   const totalAmount=document.querySelector(".total-amount")
//   let totalCost=0
//   for ( let pickedTotal of allWaterTotal){
//     totalCost+=(pickedTotal.textContent)
//     console.log(totalCost)
//   }
// }

