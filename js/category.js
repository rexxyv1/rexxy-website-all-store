const categoryGrid = document.getElementById("categoryGrid");

categories.forEach(category => {

    categoryGrid.innerHTML += `

        <a href="${category.url}" class="category-card" target="_blank" rel="noopener noreferrer">

            <div class="icon">

                <i
                class="fa-solid ${category.icon}"
                style="color:${category.color};"></i>

            </div>

            <h3>${category.name}</h3>

            <p>${category.description}</p>

        </a>

    `;

});