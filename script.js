document.addEventListener("DOMContentLoaded", () => {
    // Sélectionne la deuxième question et réponse
    const secondQuestion = document.querySelectorAll('.faqQuestion')[1]; // [1] = deuxième élément
    const secondAnswer = document.querySelectorAll('.faqAnwser')[1]; // [1] = deuxième élément

    if (secondQuestion && secondAnswer) {
        secondAnswer.classList.add('active');
        secondAnswer.style.maxHeight = secondAnswer.scrollHeight + "px"; // Déploie la réponse
        secondQuestion.textContent = secondQuestion.textContent.replace(" ++", " --"); // Change "++" en "--"
    }
});

// Fonction pour gérer l'ouverture et la fermeture des réponses
function toggleAnswer(event) {
    const question = event.currentTarget;
    const answer = question.nextElementSibling;

    if (answer.classList.contains('active')) {
        answer.classList.remove('active');
        answer.style.maxHeight = null; // Réinitialise la hauteur
        question.textContent = question.textContent.replace(" --", " ++"); // Remet "++"
    } else {
        // Ferme toutes les autres réponses avant d'afficher la nouvelle
        document.querySelectorAll('.faqAnwser').forEach(ans => {
            ans.classList.remove('active');
            ans.style.maxHeight = null;
        });
        document.querySelectorAll('.faqQuestion').forEach(q => {
            q.textContent = q.textContent.replace(" --", " ++"); // Remet "++" pour toutes les autres questions
        });

        answer.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + "px"; // Ajuste la hauteur
        question.textContent = question.textContent.replace(" ++", " --"); // Change "++" en "--"
    }
}

// Ajout des événements pour le toggle au clic et au touchend
document.querySelectorAll('.faqQuestion').forEach(question => {
    question.addEventListener('click', toggleAnswer);
    question.addEventListener('touchend', toggleAnswer);
});



// document.addEventListener("DOMContentLoaded", () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const slideIndex = urlParams.get("slide");

//     // Vérifie si l'URL contient "?slide=X" avant de scroller
//     if (slideIndex !== null) {
//         const section = document.getElementById("MesProjets");
//         if (section) {
//             section.scrollIntoView({ behavior: "smooth" });
//         }

//         // Attends un peu que la section s'affiche avant d'aller à la bonne slide
//         setTimeout(() => {
//             if (typeof swiper !== "undefined") {
//                 swiper.slideTo(parseInt(slideIndex, 10));
//             }
//         }, 500);
//     }
// });





new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1.25
        },
        768: {
            slidesPerView: 2.25
        },
        1024: {
            slidesPerView: 3.25
        },  
    },
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
    },

});

