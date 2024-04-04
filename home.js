let body = document.body
let side = document.querySelector('.side-bar-instructor');


document.querySelector('#menu-btn').onclick = () => {
    side.classList.toggle('Active');
    body.classList.toggle('active');
}

document.querySelector('#logout-btn').onclick = () => {
    window.location.href = "log.html"
}

function changeform() {
    let change = document.querySelector('.instructor-login');
    let changename = document.getElementById("text-change");
    if (changename.innerHTML === "STUDENT &nbsp; LOGIN") {
        changename.innerHTML = "INSTRUCTOR &nbsp; LOGIN";
    }
    else {
        changename.innerHTML = "STUDENT &nbsp; LOGIN";
    }

    change.classList.toggle('Active');
}
 
