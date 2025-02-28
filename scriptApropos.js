import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights();

document.addEventListener("DOMContentLoaded", () => {
    // Sélectionne la deuxième question et réponse
    const secondQuestion = document.querySelectorAll('.faqQuestion')[1]; // [1] = deuxième élément
    const secondAnswer = document.querySelectorAll('.faqAnwser')[1]; // [1] = deuxième élément

    if (secondQuestion && secondAnswer) {
        secondAnswer.classList.add('active');
        secondAnswer.style.maxHeight = secondAnswer.scrollHeight + "px"; // Déploie la réponse
        secondQuestion.textContent = secondQuestion.textContent.replace("++", "--"); // Change "++" en "--"
    }
});

document.querySelectorAll('.faqQuestion').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;

        if (answer.classList.contains('active')) {
            answer.classList.remove('active');
            answer.style.maxHeight = null; // Réinitialise la hauteur
            question.textContent = question.textContent.replace("--", "++"); // Remet "++"
        } else {
            // Ferme toutes les autres réponses avant d'afficher la nouvelle
            document.querySelectorAll('.faqAnwser').forEach(ans => {
                ans.classList.remove('active');
                ans.style.maxHeight = null;
            });
            document.querySelectorAll('.faqQuestion').forEach(q => {
                q.textContent = q.textContent.replace("--", "++"); // Remet "++" pour toutes les autres questions
            });

            answer.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + "px"; // Ajuste la hauteur
            question.textContent = question.textContent.replace("++", "--"); // Change "++" en "--"
        }
    });
});

const menuBTN = document.querySelector(".navbarAccueilPhone")
const menuMobile = document.querySelector(".slideNavBar")
const navbarLeftPhone = document.querySelector(".navbarLeftPhone")
const navbarAccueilPhone = document.querySelector(".navbarAccueilPhone")
const navbarRightPhone = document.querySelector(".navbarRightPhone")
const navbarSombrePhone = document.querySelector(".navbarSombrePhone")

menuBTN.addEventListener('click', function() {
    menuMobile.classList.toggle("active"),
    navbarLeftPhone.classList.toggle("active"),
    navbarAccueilPhone.classList.toggle("active"),
    navbarRightPhone.classList.toggle("active"),
    navbarSombrePhone.classList.toggle("active")
})