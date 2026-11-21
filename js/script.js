// Particles

particlesJS.load(
    'particles-js',
    'js/particles.json',
    function () {

        console.log("Particles başarıyla yüklendi");

    }
);


// Light / Dark Mode

const themeButton = document.getElementById("theme-toggle");


// Sayfa açılırken kayıtlı temayı kontrol et

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light");

}


// Buton ikonunu güncelle

if (document.body.classList.contains("light")) {

    themeButton.textContent = "☀️";

} else {

    themeButton.textContent = "🌙";

}



// Tema değiştirme

if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("light");


        if (document.body.classList.contains("light")) {

            themeButton.textContent = "☀️";

            localStorage.setItem("theme", "light");


        } else {

            themeButton.textContent = "🌙";

            localStorage.setItem("theme", "dark");

        }


    });

}
// =========================
// CONTACT FORM VALIDATION
// =========================


const contactForm = document.getElementById("contact-form");


if(contactForm){


    contactForm.addEventListener("submit", function(e){


        e.preventDefault();


        alert("Your message has been sent successfully!");


        contactForm.reset();


    });


}
// =========================
// PROJECT SEARCH
// =========================


const searchInput = document.getElementById("project-search");


if(searchInput){


    searchInput.addEventListener("input", function(){


        const searchValue = searchInput.value.toLowerCase();


        const cards = document.querySelectorAll(".project-card");


        cards.forEach(card => {


            const text = card.innerText.toLowerCase();


            if(text.includes(searchValue)){


                card.style.display = "block";


            }

            else{


                card.style.display = "none";


            }


        });


    });


}
// =========================
// PROJECT FILTER
// =========================


const filterButtons = document.querySelectorAll(".filter-buttons button");


const projects = document.querySelectorAll(".project-card");


filterButtons.forEach(button => {


    button.addEventListener("click", function(){


        const filter = this.dataset.filter;


        projects.forEach(project => {


            const category = project.dataset.category;


            if(filter === "all" || category === filter){


                project.style.display="block";


            }

            else{


                project.style.display="none";


            }


        });


    });


});
// =========================
// TYPING EFFECT
// =========================


const typingElement = document.getElementById("typing");


if(typingElement){


const texts = [

"Business Student",

"AI Enthusiast",

"Web Developer",

"Finance Explorer"

];


let textIndex = 0;

let charIndex = 0;


function type(){


if(charIndex < texts[textIndex].length){


typingElement.textContent += texts[textIndex].charAt(charIndex);

charIndex++;

setTimeout(type,100);


}

else{


setTimeout(erase,1500);


}


}


function erase(){


if(charIndex > 0){


typingElement.textContent =
texts[textIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(erase,50);


}

else{


textIndex++;

if(textIndex >= texts.length){

textIndex=0;

}


setTimeout(type,500);


}


}


type();


}
// =========================
// MOBILE NAV MENU
// =========================


const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");


if(hamburger){


    hamburger.addEventListener("click",()=>{


        navLinks.classList.toggle("active");


    });


}
