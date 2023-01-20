// const showFlower = () => {
//     const imgView1 = document.querySelector("#imgView1");
//     const txtWrap = document.querySelector(".txtWrap");
//     const imgViewText = document.querySelector("#imgViewText");

//     imgView1.setAttribute("src", "./images/cityFlower.png");
//     imgViewText.innerHTML = "동백꽃";
//     txtWrap.style.display = "block";
// }
// const showBird = () => {
//     const imgView2 = document.querySelector("#imgView1");
//     const txtWrap = document.querySelector(".txtWrap");
//     const imgViewText = document.querySelector("#imgViewText");
   
//     imgView2.setAttribute("src", "./images/cityBird.png");
//     imgViewText.innerHTML = "갈매기";
//     txtWrap.style.display = "block";
// }
// const showFish = () => {
//     const imgView3 = document.querySelector("#imgView1");
//     const txtWrap = document.querySelector(".txtWrap");
//     const imgViewText = document.querySelector("#imgViewText");
    
//     imgView3.setAttribute("src", "./images/cityFish.png");
//     imgViewText.innerHTML = "고등어";
//     txtWrap.style.display = "block";
// }

const show = (i) => {
    const pngName = ['cityFlower', 'cityBird', 'cityFish'];
    const txt = ['동백꽃', '갈매기', '고등어']
    //console.log(pngName[i], txt[i]);
    
    const imgView = document.querySelector("#imgView1");
    const txtWrap = document.querySelector(".txtWrap");
    const imgViewText = document.querySelector("#imgViewText");
    
    imgView.setAttribute("src", `./images/${pngName[i]}.png`);
    imgViewText.innerHTML = txt[i];
    txtWrap.style.display = "block";
}
// DOM 로드 후
document.addEventListener("DOMContentLoaded", () => {
    // const imgIcon1 = document.getElementById("imgIcon1");
    // const imgIcon2 = document.getElementById("imgIcon2");
    // const imgIcon3 = document.getElementById("imgIcon3");

    // imgIcon1.addEventListener("mouseover", () => showFlower());
    // imgIcon2.addEventListener("mouseover", () => showBird());
    // imgIcon3.addEventListener("mouseover", () => showFish());

    const imgIconItem = document.querySelectorAll(".imgIconItem");
    for (let [k, item] of imgIconItem.entries()) {
        console.log(k, item);
        item.addEventListener("mouseover", () => show(k));
        //console.log(item , k)
    }
});