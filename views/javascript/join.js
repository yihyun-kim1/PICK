// var signState = 0;

// function signIn(){
//     location.href = "kiosk_join.html";
//     document.getElementById("join").innerText = "SIGN OUT";
//     signState = 1;
// }

// function signOut(){
//     document.getElementById("join").innerText = "JOIN";
//     signState = 0;
// }

// function join(){
//     if(signState == 1){
//         signOut();
//     }
//     else{
//         signIn();
//     }
// }

// function gohome(){
//     location.href = "kiosk_home.html"
// }



//         function openPop() {
//     document.getElementById("popup_layer").style.display = "block";

// }


// function closePop() {
//     document.getElementById("popup_layer").style.display = "none";
// }

function movePage(event) {
    event.preventDefault();
    const username = document.getElementById("phone").value;

    const formData = {
        username: username,
    };

    fetch("/home", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    // .then((response) => response.json())
    // .then((data) => {
    //     console.log(data);
    //     window.location.href = "/scan";
    // })
    // .catch((error) => {
    //     console.error("Error:", error);
    // });
}

signState = 0;

function openPop() {
    document.getElementById("join-pop").style.display = "block";
}

function closePop() {
    console.log("close");
    document.getElementById("join-pop").style.display = "none";
    document.getElementById("join").innerText = "SIGN OUT";
    signState = 1;
}

function join() {
    if (signState == 0) {
        openPop();
    }

    else {
        document.getElementById("join").innerText = "JOIN";
        signState = 0;
    }
}

