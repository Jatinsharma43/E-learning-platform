let body = document.body
let side1 = document.querySelector('.side-bar-instructor');
let side2 = document.querySelector('.side-bar-student');

document.querySelector('#menu-btnn').onclick = () => {
    side1.classList.toggle('Active');
    body.classList.toggle('active');
}
function side() {
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
var counter = 0;

function goprev() {
    let sides1 = document.querySelector('.live-classes .classes-container .upper')
    let sides2 = document.querySelector('.live-classes .classes-container .middle ')
    let sides3 = document.querySelector('.live-classes .classes-container .lower')

    counter--

    if (counter<0) {
        counter = 2;
        sides1.style.display = "none"
        sides2.style.display = "none"
        sides3.style.display = "block"

    }
    else if (counter==0) {
        sides2.style.display = "none"
        sides3.style.display = "none"
        sides1.style.display = "block"

    }
    else {
       
       
        if (counter == 1) {
            sides1.style.display = "none"
            sides3.style.display = "none"
            sides2.style.display = "block"

        }
        else{
            sides1.style.display = "none"
            sides2.style.display = "none"
            sides3.style.display = "block"

        }
    }



}

function gonext() {
    let sides1 = document.querySelector('.live-classes .classes-container .upper')
    let sides2 = document.querySelector('.live-classes .classes-container .middle ')
    let sides3 = document.querySelector('.live-classes .classes-container .lower')

    counter++


    if (counter >= 0 && counter <= 2) {
        if (counter == 0) {
            sides2.style.display = "none"
            sides3.style.display = "none"
            sides1.style.display = "block"

        }
        if (counter == 1) {
            sides1.style.display = "none"
            sides3.style.display = "none"
            sides2.style.display = "block"

        }
        else {
            sides1.style.display = "none"
            sides2.style.display = "none"
            sides3.style.display = "block"

        }
    }
    else {
        counter = 0;
        sides2.style.display = "none"
        sides3.style.display = "none"
        sides1.style.display = "block"
    }




}


