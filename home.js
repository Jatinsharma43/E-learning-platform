let body = document.body
let side1= document.querySelector('.side-bar-instructor');
let side2 = document.querySelector('.side-bar-student');


document.querySelector('#menu-btnn').onclick = () => {
    side1.classList.toggle('Active');
    body.classList.toggle('active');
}
document.querySelector('#menu-btn').onclick = () => {
    side2.classList.toggle('Active');
    body.classList.toggle('active');
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
 
