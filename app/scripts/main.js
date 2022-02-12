// Slick slider
// $(document).ready(function () {
//   $(".quote-list").slick({
//     prevArrow:
//       "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   });
// });

const headerToggle = document.querySelector(".header__toggle");
const headerMenu = document.querySelector(".header-menu");
const shadow = document.querySelector(".shadow");
const CLASS_SHOW = "show";
const listWeDoHeader = document.querySelectorAll(".wedo-item__header");
const listWeDoItem = document.querySelectorAll(".wedo-item");

headerToggle.addEventListener("click", () => {
  shadow.classList.add(CLASS_SHOW);
  headerMenu.classList.add(CLASS_SHOW);
});

shadow.addEventListener("click", () => {
  headerMenu.classList.remove(CLASS_SHOW);
  shadow.classList.remove(CLASS_SHOW);
});

listWeDoHeader.forEach((item,index)=>{
  item.addEventListener("click", () => {
    const WeDoItem = item.parentElement;
   if(WeDoItem.classList.toggle(CLASS_SHOW)){
    listWeDoItem.forEach((parentItem,parentIndex)=>{
      if(parentIndex!== index){
        parentItem.classList.remove(CLASS_SHOW)
      }
    })
   }
  });
})