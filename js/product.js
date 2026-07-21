const productGrid = document.getElementById("productGrid");

products.forEach(product => {

    productGrid.innerHTML += `

        <div class="product-card">

            <div class="product-image">

                <img src="${product.image}" alt="${product.name}">

                <span class="badge-product">

                    ${product.badge}

                </span>

            </div>

            <div class="product-content">

                <h3>${product.name}</h3>

                <p>${product.category}</p>

                <h4>${product.price}</h4>

                <button>Beli Sekarang</button>

            </div>

        </div>

    `;

});