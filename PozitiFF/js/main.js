document.querySelectorAll(".toggle-more-info").forEach((el) => {
   el.addEventListener("click", ({target}) => {
       target.classList.toggle("active");
       target.parentElement.querySelector(".more-info").classList.toggle("visible");
   })
});

document.getElementById('open-button').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'block';
});

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});