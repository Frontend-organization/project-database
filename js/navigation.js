window.onload = () => {
  const search = document.querySelector(".navigation__search");
  const searchInput = document.querySelector(".navigation__seeker");

  function showSearch() {
    searchInput.classList.toggle("hidde");
  }

  search.addEventListener("click", showSearch);
};
