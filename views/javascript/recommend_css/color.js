var color1 = document.getElementById("color1")
var color2 = document.getElementById("color2")
var color3 = document.getElementById("color3")
var color4 = document.getElementById("color4")
var color5 = document.getElementById("color5")
const black = ["#F2F2F2", "#BFBFBF", "#737373", "#404040", "#0D0D0D"]
const neutral = ["#555548", "#D0C6BC", "#E8E4E0", "#7D543B", "#C5C4BE"]
const deep = ["#4E4F54", "#BFBFBF", "#AFA69D", "#776A62", "#75767A"]
const vivid = ["#6D33A6", "#EF562C", "#03A64A", "#0C4C8A", "#BF0404"]
const pastel = ["#F2DFE4", "#B499BF", "#ADD4D9", "#C1D9B0", "#BFCFDE"]
const pattern = ['../../../image/pattern1.jpg', '../../../image/pattern2.jpg', '../../../image/pattern3.jpg', '../../../image/pattern4.jpg', '../../../image/pattern5.jpg']

const colorList = [black, deep, vivid, pastel, pattern]
const colorList2 = ["BLACK&WHITE", "DEEP", "VIVID", "PASTEL", "PATTERN"]
const colorValue = ["b&w", "deep", "vivid", "pastel", "pattern"]

let selectedTopColor = "b&w";
let selectedBottomColor = "b&w";

var i = 0;

function colorChange() {
    i--
    if (i === -1) { i = 3; }
    if (i === 4) {
        color1.style.backgroundImage = "url('../../image/pattern1.jpg')"
        color1.innerText = ""
        color2.style.backgroundImage = "url('../../image/pattern2.jpg')"
        color2.innerText = ""
        color3.style.backgroundImage = "url('../../image/pattern3.jpg')"
        color3.innerText = ""
        color4.style.backgroundImage = "url('../../image/pattern4.jpg')"
        color4.innerText = ""
        color5.style.backgroundImage = "url('../../image/pattern5.jpg')"
        color5.innerText = ""
    }
    else {
        color1.style.backgroundImage = "none"
        color1.style.backgroundColor = colorList[i][0]
        color1.innerText = colorList[i][0]
        color2.style.backgroundImage = "none"
        color2.style.backgroundColor = colorList[i][1]
        color2.innerText = colorList[i][1]
        color3.style.backgroundImage = "none"
        color3.style.backgroundColor = colorList[i][2]
        color3.innerText = colorList[i][2]
        color4.style.backgroundImage = "none"
        color4.style.backgroundColor = colorList[i][3]
        color4.innerText = colorList[i][3]
        color5.style.backgroundImage = "none"
        color5.style.backgroundColor = colorList[i][4]
        color5.innerText = colorList[i][4]
    }
    document.getElementById("color-name").innerText = colorList2[i]
    selectedTopColor = colorValue[i];
}

function colorChange2() {
    i++
    if (i === 4) { i = 0 }
    if (i === 4) {
        color1.style.backgroundImage = "url('../../image/pattern1.jpg')"
        color1.innerText = ""
        color2.style.backgroundImage = "url('../../image/pattern2.jpg')"
        color2.innerText = ""
        color3.style.backgroundImage = "url('../../image/pattern3.jpg')"
        color3.innerText = ""
        color4.style.backgroundImage = "url('../../image/pattern4.jpg')"
        color4.innerText = ""
        color5.style.backgroundImage = "url('../../image/pattern5.jpg')"
        color5.innerText = ""
    }
    else {
        color1.style.backgroundImage = "none"
        color1.style.backgroundColor = colorList[i][0]
        color1.innerText = colorList[i][0]
        color2.style.backgroundImage = "none"
        color2.style.backgroundColor = colorList[i][1]
        color2.innerText = colorList[i][1]
        color3.style.backgroundImage = "none"
        color3.style.backgroundColor = colorList[i][2]
        color3.innerText = colorList[i][2]
        color4.style.backgroundImage = "none"
        color4.style.backgroundColor = colorList[i][3]
        color4.innerText = colorList[i][3]
        color5.style.backgroundImage = "none"
        color5.style.backgroundColor = colorList[i][4]
        color5.innerText = colorList[i][4]
    }
    document.getElementById("color-name").innerText = colorList2[i]
    selectedTopColor = colorValue[i];
}

function colorChange3() {
    i--
    if (i === -1) { i = 3 }
    if (i === 4) {
        color6.style.backgroundImage = "url('../../image/pattern1.jpg')"
        color6.innerText = ""
        color7.style.backgroundImage = "url('../../image/pattern2.jpg')"
        color7.innerText = ""
        color8.style.backgroundImage = "url('../../image/pattern3.jpg')"
        color8.innerText = ""
        color9.style.backgroundImage = "url('../../image/pattern4.jpg')"
        color9.innerText = ""
        color0.style.backgroundImage = "url('../../image/pattern5.jpg')"
        color0.innerText = ""
    }
    else {
        color6.style.backgroundImage = "none"
        color6.style.backgroundColor = colorList[i][0]
        color6.innerText = colorList[i][0]
        color7.style.backgroundImage = "none"
        color7.style.backgroundColor = colorList[i][1]
        color7.innerText = colorList[i][1]
        color8.style.backgroundImage = "none"
        color8.style.backgroundColor = colorList[i][2]
        color8.innerText = colorList[i][2]
        color9.style.backgroundImage = "none"
        color9.style.backgroundColor = colorList[i][3]
        color9.innerText = colorList[i][3]
        color0.style.backgroundImage = "none"
        color0.style.backgroundColor = colorList[i][4]
        color0.innerText = colorList[i][4]
    }
    document.getElementById("color-name2").innerText = colorList2[i]
    selectedBottomColor = colorValue[i];
}

function colorChange4() {
    i++
    if (i === 4) { i = 0 }
    if (i === 4) {
        color6.style.backgroundImage = "url('../../image/pattern1.jpg')"
        color6.innerText = ""
        color7.style.backgroundImage = "url('../../image/pattern2.jpg')"
        color7.innerText = ""
        color8.style.backgroundImage = "url('../../image/pattern3.jpg')"
        color8.innerText = ""
        color9.style.backgroundImage = "url('../../image/pattern4.jpg')"
        color9.innerText = ""
        color0.style.backgroundImage = "url('../../image/pattern5.jpg')"
        color0.innerText = ""
    }
    else {
        color6.style.backgroundImage = "none"
        color6.style.backgroundColor = colorList[i][0]
        color6.innerText = colorList[i][0]
        color7.style.backgroundImage = "none"
        color7.style.backgroundColor = colorList[i][1]
        color7.innerText = colorList[i][1]
        color8.style.backgroundImage = "none"
        color8.style.backgroundColor = colorList[i][2]
        color8.innerText = colorList[i][2]
        color9.style.backgroundImage = "none"
        color9.style.backgroundColor = colorList[i][3]
        color9.innerText = colorList[i][3]
        color0.style.backgroundImage = "none"
        color0.style.backgroundColor = colorList[i][4]
        color0.innerText = colorList[i][4]
    }
    document.getElementById("color-name2").innerText = colorList2[i]
    selectedBottomColor = colorValue[i];
}


function movePage(event) {
    event.preventDefault();

    const formData = {
        color_top: selectedTopColor,
        color_bottom: selectedBottomColor
    };

    fetch("/color", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            window.location.href = "/fit";
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}