const products = [
    {
      id: 1,
      name: "Camiseta Masculina",
      price: 59.99,
      image: "image.jpg",
    },
    {
      id: 2,
      name: "Vestido Feminino",
      price: 99.99,
      image: "assets/img/vestido.jpg",
    },
  ];
  
  const productContainer = document.querySelector(".product-list");
  
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
  
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>R$ ${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Comprar</button>
    `;
  
    productContainer.appendChild(productCard);
  });
  
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    alert(`Você adicionou "${product.name}" ao carrinho!`);
  }
