const btnContainer = document.querySelector(".product__filter-btn");
btnContainer.appendChild;

fetch(`${url}/categories`, {
  method: "GET",
})
  .then((response) => {
    return response.json();
  })
  .then((responseJson) => {
    const categories = responseJson.data.results;
    let templateBtn = `<button id="clearFilterBtn" class="btn active-btn">Todos</button>`;

    //Poner texto a los botones dinamicamente
    for (let i = 0; i < categories.length; i++) {
      templateBtn += `
      <button id="${categories[i].Id}" class="btn">${categories[i].Categoria}</button>
      `;
    }
    btnContainer.innerHTML = templateBtn;

    //Filtrar los platos
    const btn = document.querySelectorAll(".btn");

    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener("click", (event) => {
        for (let j = 0; j < btn.length; j++) {
          btn[j].classList.remove("active-btn");
        }
        btn[i].classList.toggle("active-btn");

        let btnId = event.target.id;
        console.log(btnId);

        fetch(`${url}/plates?category=${btnId}`, {
          method: "GET",
        })
          .then((response) => {
            return response.json();
          })
          .then((responseJson) => {
            const platesFilter = responseJson.data.results;
            console.log(platesFilter);
            let templateFilter = ``;
            console.log(platesFilter[0]);
            for (let i = 0; i < platesFilter.length; i++) {
              templateFilter += `
              <div class="product__cards-container">
                <article class="product__card-detail">
                  <figure class="card__img-container">
                    <img
                      class="card-img"
                      src=${
                        platesFilter[i].Image || "assets/hamburguer-img.jpg"
                      }
                      alt="image card"
                    />
                  </figure>
                  <div class="card-info">
                    <p class="card-info-title">${platesFilter[i].Nombre}</p>
                    <p class="card-info-description">
                      ${platesFilter[i].id}
                    </p>
                    <span>S/${platesFilter[i].Precio.toFixed(2)}</span>
                  </div>
                </article>
              </div>`;
            }
            platesContainer.innerHTML = templateFilter;

            document
              .querySelector("#clearFilterBtn")
              .addEventListener("click", () => {
                fetch(`${url}/plates`, {
                  method: "GET",
                })
                  .then((response) => {
                    return response.json();
                  })
                  .then((responseJson) => {
                    let platesALL = responseJson.data.results;
                    let templateAll = ``;

                    for (var i = 0; i < platesALL.length; i++) {
                      templateAll += `
                        <div class="product__cards-container">
                          <article class="product__card-detail">
                            <figure class="card__img-container">
                              <img
                                class="card-img"
                                src=${
                                  platesALL[i].Image ||
                                  "assets/hamburguer-img.jpg"
                                }
                                alt="image card"
                              />
                            </figure>
                            <div class="card-info">
                              <p class="card-info-title">${
                                platesALL[i].Nombre
                              }</p>
                              <p class="card-info-description">
                                ${platesALL[i].id}
                              </p>
                              <span>S/${platesALL[i].Precio.toFixed(2)}</span>
                            </div>
                          </article>
                        </div>`;
                    }
                    platesContainer.innerHTML = templateAll;
                  });
              });
          });
      });
    }
  });
