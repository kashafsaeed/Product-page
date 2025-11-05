// let main = document.getElementById("main");


// async function getproduct() {
//     let response = await fetch('https://dummyjson.com/products')
//     let data = await response.json();
//     console.log(data);
  
    

// }

//   data.products.forEach(product => {
//         let div = document.createElement("div");
//         div.classList.add("product");
//         div.innerHTML = `
//         <h2>${product.title}</h2>
//         <p>Price: $${product.price}</p>
//         <p>${product.description}</p>
//         <img src="${product.thumbnail}" alt="${product.title}" />
//         `;
//         main.appendChild(div);
//     });

// getproduct();






// let main = document.getElementById("main");

// async function getProducts() {
//   let response = await fetch('https://dummyjson.com/products');
// // let response = await fetch('https://fakestoreapi.com/products');
//   let data = await response.json();
//   console.log(data);

//   data.products.forEach(product => {
//     let div = document.createElement("div");
//     div.classList.add("product");
//     div.innerHTML = `
//       <h2>${product.title}</h2>
//       <p>Price: $${product.price}</p>
//       <p>${product.description}</p>
//       <img src="${product.thumbnail}" alt="${product.title}" width="200" />
//     `;
//     main.appendChild(div);
//   });
// }

// // call the function
// getProducts();




// let main = document.getElementById("main");

// async function getProducts() {
//   let response = await fetch('https://dummyjson.com/products');
//   let data = await response.json();
//   console.log(data);

//   // map returns a new array of HTML strings
//   let productsHTML = data.products.map(product => {
//     return `
//       <div class="product">
//         <h2>${product.title}</h2>
//         <p>Price: $${product.price}</p>
//         <p>${product.description}</p>
//         <img src="${product.thumbnail}" alt="${product.title}" width="200" />
//       </div>
//     `;
//   });

//   // join() combines all HTML strings and adds to the page
//   main.innerHTML = productsHTML.join("");
// }

// getProducts();






let main = document.getElementById("main");

async function getProducts() {
  let response = await fetch('https://dummyjson.com/products');
  let data = await response.json();
  console.log(data);
    let productsHTML = data.products.map(product => {

    return `
    <div class="card pro" style="width: 18rem; " >
  <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">${product.description}</p>
    <a href="#" class="btn btn-primary"> $${product.price}</a>
   
  </div>
</div>
    `;

  });

  main.innerHTML = productsHTML.join("");
}
getProducts();