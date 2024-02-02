function myNav(){
    let bar = document.querySelector(".bar")
    let nav = document.querySelector(".navigation")
    bar.onclick = ()=>{
        if(nav.style.left == "0%"){
            nav.style.left = "-100%" 
            bar.src = "menu.png"
        }
        else{
            nav.style.left = "0%"
            bar.src = "x.png"
        }
    }
}
myNav()

window.onload = () => {
    let homeContent = document.querySelector(".home-content")
    homeContent.style.left = "50px"
}

// Sample product data array
const products = [
    { category: "coffee", image: "/assets/picture-1.png", discount: "-7%", name: "Hot Coffee", rating: 4, price: "$32.00", oldPrice: "$45.00" },
    { category: "coffee", image: "/assets/picture-2.png", discount: "-12%", name: "Hot Coffee", rating: 3, price: "$82.00", oldPrice: "$95.00" },
    { category: "coffee", image: "/assets/picture-3.png", discount: "-13%", name: "Hot Coffee", rating: 4, price: "$84.00", oldPrice: "$102.00" },
    { category: "coffee", image: "/assets/picture-4.png", discount: "-8%", name: "Hot Coffee", rating: 4, price: "$66.00", oldPrice: "$85.00" },
    { category: "machines", image: "/assets/m1.png", discount: "-20%", name: "Coffee Machine", rating: 3, price: "$203.00", oldPrice: "$250.00" },
    { category: "machines", image: "/assets/m2.png", discount: "-5%", name: "Coffee Machine", rating: 4, price: "$265.00", oldPrice: "$293.00" },
    { category: "machines", image: "/assets/m3.png", discount: "-7%", name: "Coffee Machine", rating: 3, price: "$160.00", oldPrice: "$192.00" },
    { category: "sweets", image: "/assets/m4.png", discount: "-15%", name: "Hot Chocolate", rating: 3, price: "$28.00", oldPrice: "$66.00" },
    { category: "machines", image: "/assets/m3.png", discount: "-7%", name: "Coffee Machine", rating: 3, price: "$160.00", oldPrice: "$192.00" },
    // Add more products as needed
];

const productContainer = document.getElementById("productContainer");
const filterLinksContainer = document.getElementById("filterLinks");

function filterProducts(category) {
    const filteredProducts = category === "all" ? products : products.filter(product => product.category === category);

     // Clear existing product cards
     productContainer.innerHTML = "";

     filteredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = `shop-1 mix ${product.category}`;
    
        productCard.innerHTML = `
            <div class="shop-image">
                <img src="${product.image}">
                <div class="price">${product.discount}</div>
                <div class="social">
                    <a href="#"><i class="far fa-heart"></i></a>
                    <a href="#"><i class="fas fa-shopping-cart"></i></a>
                    <a href="#"><i class="fas fa-share-alt"></i></a>
                    <a href="#"><i class="fas fa-search"></i></a>
                </div>
            </div>
            <h2>${product.name}</h2>
            <div class="stars">
                ${Array.from({ length: product.rating }, (_, index) => `<i class="fas fa-star gold"></i>`).join('')}
                ${Array.from({ length: 5 - product.rating }, (_, index) => `<i class="far fa-star"></i>`).join('')}
            </div>
            <article>${product.price}</article>
            <span>${product.oldPrice}</span>
        `;

        productContainer.appendChild(productCard);
    });
}

// Generate filter links dynamically
const categories = [...new Set(products.map(product => product.category))];
categories.unshift("all");

categories.forEach(category => {
    const link = document.createElement("li");
    link.setAttribute("data-filter", `.${category}`);
    link.textContent = category;
    
    // Add click event listener to filter products when a category is clicked
    link.addEventListener("click", () => filterProducts(category));

    filterLinksContainer.appendChild(link);
});

// Initial load: Show all products
filterProducts("all");