function clips(){
  watchArrow();
  return {
    clips:[
      {
        title:"Meet the Women Making Tinned Fish Cool",
        publisher:"Condé Nast Traveler",
        link:"https://www.cntraveler.com/story/meet-the-women-making-tinned-fish-cool",
        image:"https://media.cntraveler.com/photos/60596d8a7b588da524cfef4a/16:9/w_2560%2Cc_limit/SalmonSisters-2021-2.jpg",
      },
      {
        title:"9 North Fork food trucks for a delicious socially distanced date",
        publisher:"The Northforker",
        link:"https://northforker.com/2020/08/9-north-fork-food-trucks-for-a-delicious-socially-distanced-date/",
        image:"https://i0.wp.com/northforker.com/files/2020/08/RollinginDough.jpeg?resize=768%2C1024&ssl=1",
      },
      {
        title:"Farming in the Era of Climate Change: An Interview with Lauren Nagy",
        publisher:"Local Roots",
        link:"https://localrootsnyc.com/blogs/news/climate-week-an-interview-with-lauren-nagy-of-ironbound-farm?_pos=9&_sid=442bc9926&_ss=r",
        image:"https://cdn.shopify.com/s/files/1/1812/9769/files/Ironbound_Farm_Local_Roots_NYC_600x600.png?v=1600701467",
      },
      {
        title:"Guide to Preservation: Lacto-Fermentation",
        publisher:"Local Roots",
        link:"https://localrootsnyc.com/blogs/news/guide-to-preservation-lacto-fermentation",
        image:"https://cdn.shopify.com/s/files/1/1812/9769/files/Lacto-Fermented_Plums_Local_Roots_NYC_600x600.jpg?v=1601303428",
      },
      {
        title:"How to continue eating with friends when picnic season is over",
        publisher:"Local Roots",
        link:"https://localrootsnyc.com/blogs/news/how-to-continue-eating-with-friends-when-picnic-season-is-over?_pos=14&_sid=442bc9926&_ss=r",
        image:"https://cdn.shopify.com/s/files/1/1812/9769/files/Dining_Stock_grande.jpg?v=1598904925",
      },
      {
        title:"How to Host a COVID-Safe Thanksgiving",
        publisher:"Local Roots",
        link:"https://localrootsnyc.com/blogs/news/how-to-host-a-covid-safe-thanksgiving-1?_pos=10&_sid=442bc9926&_ss=r",
        image:"https://cdn.shopify.com/s/files/1/1812/9769/files/Pie___Local_Roots_NYC___High_Res_600x600.png?v=1603902349",
      },
      {
        title:"Soil Health Impacts Flavor and Nutrition",
        publisher:"Local Roots",
        link:"https://localrootsnyc.com/blogs/news/soil-health-impacts-flavor-and-nutrition?_pos=11&_sid=442bc9926&_ss=r",
        image:"https://cdn.shopify.com/s/files/1/1812/9769/files/Soil_Health_Local_Roots_grande.jpeg?v=1597936948",
      },
      {
        title:"The Overlooked History of Regenerative Agriculture and CSAs in America",
        publisher:"Local Roots",
        link:"https://localrootsnyc.com/blogs/news/the-overlooked-history-of-regenerative-agriculture-and-csas-in-america?_pos=12&_sid=442bc9926&_ss=r",
        image:"https://cdn.shopify.com/s/files/1/1812/9769/files/IMG_9084_480x480.jpg?v=1600278282",
      },
    ]
  }
}
var lastScrollTop = 0;

function watchArrow(){
  let arrow = document.querySelector(".more-arrow");
  let contentBody = document.querySelector("body");
  let lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      // downscroll code
      arrow.classList.remove("point-up");
   } else {
      // upscroll code
      arrow.classList.add("point-up");
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
}

