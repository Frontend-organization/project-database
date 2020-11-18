const platesContainer = document.querySelector(".container-grid");

fetch("http://923148ce1ffb.ngrok.io/plates", {
  method: "GET",
})
  .then((response) => {
    return response.json();
  })
  .then((responseJson) => {
    const plates = responseJson.data.results;
    let template = ``;
    for (var i = 0; i < plates.length; i++) {
      const plate = plates[i];
      template += `<div class="product__cards-container">
            <article class="product__card-detail">
              <figure class="card__img-container">
                <img
                  class="card-img"
                  src=${plate.Image || "assets/hamburguer-img.jpg"}
                  alt="image card"
                />
              </figure>
              <div class="card-info">
                <p class="card-info-title">${plate.Nombre}</p>
                <p class="card-info-description">
                  ${plate.id}
                </p>
                <span>S/${plate.Precio.toFixed(2)}</span>
              </div>
            </article>
          </div>`;
    }
    platesContainer.innerHTML = template;
  });
