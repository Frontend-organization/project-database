const platesContainerResult = document.querySelector(
  ".search-result-container"
);

async function searchPlate(food) {
  const body = JSON.stringify({
    plateName: food,
  });
  const result = await fetch(`${url}/plates/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      return responseJson;
    });

  return result;
}

const input = document.querySelector(".navigation-input");
input.addEventListener("keyup", (event) => {
  let inputContent = event.target.value;

  if (inputContent === "") {
    platesContainerResult.innerHTML = ``;
    return;
  }

  if (inputContent.length >= 3) {
    searchPlate(inputContent).then((response) => {
      let template = ``;
      const plates = response.data.results;

      if (inputContent === "") {
        platesContainerResult.innerHTML = ``;
        return;
      }

      for (var i = 0; i < plates.length; i++) {
        const plate = plates[i];
        template += `
      <div>
        <article class="product__card-result">
          <figure class="card__img-container">
            <img
              class="card-img"
              src=${plate.Image || "assets/hamburguer-img.jpg"}
              alt="image card"
            />
          </figure>
          <div class="card-info">
            <p class="card-info-title">${plate.Nombre}</p>
            <p class="product__card-result">
              ${plate.id}
            </p>
            <span>S/${plate.Precio.toFixed(2)}</span>
          </div>
        </article>
      </div>
      `;
      }
      platesContainerResult.innerHTML = template;
    });
  }
});
