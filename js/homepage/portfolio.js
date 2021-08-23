const hoverMe = document.querySelector(".parent-hover, limeParent-hover")
const card = document.querySelector(".card");
const cardContainer = document.querySelector(".card-container");


cardContainer.addEventListener('mouseover', (e) => {
  hoverMe.classList.toggle("on-hover")
  console.alert(hoverMe);
});
card.addEventListener('click', () => {
    search.classList.toggle('active')
})
