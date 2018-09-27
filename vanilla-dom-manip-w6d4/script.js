document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  const addPlace = (e) => {
    e.preventDefault();
    const place = document.querySelector('.favorite-input').value;
    document.querySelector('.favorite-input').value = "";
    // debugger;
    const newPlace = document.createElement('li');
    newPlace.textContent = place;
    const list = document.getElementById("sf-places")
    list.appendChild(newPlace);
  }

  document.querySelector('.favorite-submit').addEventListener('click', addPlace);

  // adding new photos

  const addPhoto = (e) => {

  }



});
