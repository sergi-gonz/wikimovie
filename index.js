 const video = document.getElementById('background-video');
  video.playbackRate = 0.35;


document.addEventListener("DOMContentLoaded", function()  {
  const menuContainer = document.querySelector(".menu-container");

  function createHomeMenu () {
    let menu = document.querySelector('#contains-menu');

    if(!menu) {
        menu = document.createElement("div");
        menu.id = "contains-menu";
        menu.innerHTML =`  
            <div class = "menu-item">
            <svg class = "icon-item" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m260-520 220-360 220 360H260ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-20v-320h320v320H120Zm580-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-500-20h160v-160H200v160Zm202-420h156l-78-126-78 126Zm78 0ZM360-340Zm340 80Z"/></svg>
            Género</div>
            <div class = "menu-item">
            <svg class = "icon-item" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
            Favoritos</div>
            <div class = "menu-item">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-120v-640q0-33 23.5-56.5T280-840h240v80H280v518l200-86 200 86v-278h80v400L480-240 200-120Zm80-640h240-240Zm400 160v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/></svg>
            Pendientes</div>
        `;
        document.body.appendChild(menu);
    }
    menu.classList.toggle("active");
  }

  menuContainer.addEventListener("click", function(e){
    e.stopPropagation();
    createHomeMenu();
  });

  document.addEventListener("click", function(e){
    const menu = document.querySelector('#contains-menu');
    if (menu && !menu.contains(e.target) && !menuContainer.contains(e.target)) {
        menu.classList.remove("active");
    }
  })
});
