window.onload = () => {
  const search = document.querySelector(".navigation__search");
  const inputContainer = document.querySelector(".navigation__seeker");
  const input = document.querySelector(".navigation-input");
  const platesContainerToHidde = document.querySelector(
    ".search-result-container"
  );

  function showSearch() {
    inputContainer.classList.toggle("hidde");

    if (inputContainer.classList.contains("hidde")) {
      platesContainerToHidde.innerHTML = ``;
      input.value = "";
    } else {
      input.focus();
    }
  }

  search.addEventListener("click", showSearch);
};
