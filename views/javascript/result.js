// loading

var showPage = function () {
    var loader = document.getElementById("loader");
    var container = document.getElementById("container");
    loader.style.display = "none";
    container.style.display = "block";
};

setTimeout(() => {
    showPage();
    console.log("finish")
}, 1000);

const topData = [
    { img: "<%= userData.result_top1 %>", link: "<%= userData.link_top1 %>" },
    { img: "<%= userData.result_top2 %>", link: "<%= userData.link_top2 %>" },
    { img: "<%= userData.result_top3 %>", link: "<%= userData.link_top3 %>" },
    { img: "<%= userData.result_top4 %>", link: "<%= userData.link_top4 %>" },
    { img: "<%= userData.result_top5 %>", link: "<%= userData.link_top5 %>" },
    { img: "<%= userData.result_top6 %>", link: "<%= userData.link_top6 %>" },

];

const bottomData = [
    { img: "<%= userData.result_bottom1 %>", link: "<%= userData.link_bottom1 %>" },
    { img: "<%= userData.result_bottom2 %>", link: "<%= userData.link_bottom2 %>" },
    { img: "<%= userData.result_bottom3 %>", link: "<%= userData.link_bottom3 %>" },
    { img: "<%= userData.result_bottom4 %>", link: "<%= userData.link_bottom4 %>" },
    { img: "<%= userData.result_bottom5 %>", link: "<%= userData.link_bottom5 %>" },
    { img: "<%= userData.result_bottom6 %>", link: "<%= userData.link_bottom6 %>" },
];

var topIndex = 0;
var botIndex = 0;

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");

var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");


var i = 0

function topChange1() {
    topIndex--;
    if (topIndex === -1) { topIndex = topData.length - 2; }
    document.getElementById("img1").src = topData[topIndex].img;
    document.getElementById("img2").src = topData[(topIndex + 1) % topData.length].img;
    document.querySelector("#link-button1 a").href = topData[topIndex].link;
    document.querySelector("#link-button2 a").href = topData[(topIndex + 1) % topData.length].link;
}

function topChange2() {
    topIndex++;
    if (topIndex === topData.length - 1) { topIndex = 0; }
    document.getElementById("img1").src = topData[topIndex].img;
    document.getElementById("img2").src = topData[(topIndex + 1) % topData.length].img;
    document.querySelector("#link-button1 a").href = topData[topIndex].link;
    document.querySelector("#link-button2 a").href = topData[(topIndex + 1) % topData.length].link;
}

function botChange1() {
    botIndex--;
    if (botIndex === -1) { botIndex = bottomData.length - 2; }
    document.getElementById("img3").src = bottomData[botIndex].img;
    document.getElementById("img4").src = bottomData[(botIndex + 1) % bottomData.length].img;
    document.querySelector("#link-button3 a").href = bottomData[botIndex].link;
    document.querySelector("#link-button4 a").href = bottomData[(botIndex + 1) % bottomData.length].link;
}

function botChange2() {
    botIndex++;
    if (botIndex === bottomData.length - 1) { botIndex = 0; }
    document.getElementById("img3").src = bottomData[botIndex].img;
    document.getElementById("img4").src = bottomData[(botIndex + 1) % bottomData.length].img;
    document.querySelector("#link-button3 a").href = bottomData[botIndex].link;
    document.querySelector("#link-button4 a").href = bottomData[(botIndex + 1) % bottomData.length].link;
}
