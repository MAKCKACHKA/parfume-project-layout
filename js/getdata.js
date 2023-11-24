// import * as parfum from '../parfume-data/parfume.json';

// const productListDiv = document.getElementById('productList');

// products.forEach(product => {
//   const productInfo = document.createElement('p');
//   productInfo.textContent = `Code: ${product.code}, Name: ${product.name}`;
//   productListDiv.appendChild(productInfo);
// });

// Задайте шлях до вашого JSON файлу
const jsonFilePath = '../parfume-data/parfume.json';

function renderProd(item) {
  return `
   <li id="${item.code}" class="portfolio-list-item">
          <a href="#" class="portfolio-item-link">
            <div class="img-wrapper">
              <img
                src="${item.image}"
                alt="${item.name}"
                max-width="360"
                max-height="300"
                style="
                  max-width: 360px;
                  max-height: 260px;
                  margin-left: auto;
                  margin-right: auto;
                "
              />
              <p class="overlay">
                ${item.description}
              </p>
            </div>
            <div class="portfolio-text">
              <h3 class="portfolio-item-title">
                ${item.name}
              </h3>
              <p class="portfolio-item-text">${item.category}</p>
            </div>
          </a>
        </li>
  `;
}
fetch('https://makckachka.github.io/parfume-project-layout/parfume.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(
        `Network response was not ok, status: ${response.status}`
      );
    }
    return response.json();
  })
  .then(data => {
    const sorted = data.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });

    return sorted;
  })
  .then(data => {
    const productListDiv = document.getElementById('productList');
    data.forEach(product => {
      const productInfo = renderProd(product);
      // productListDiv.appendChild(productInfo);
      productListDiv.innerHTML += productInfo;
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// function renderPopularItems(data) {
//   productList.innerHTML = '';
//   for (let i = 0; i < maxIterations; i++) {
//     const item = data[i];
//     const masterClassHTML = renderPopular(item);
//     listDiv.innerHTML += masterClassHTML;
//     hideLoader();
//   }
// }
