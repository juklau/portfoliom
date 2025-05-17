


/* ======================================================================================== */
/*                                     Menu Hamburger*/
/* ======================================================================================== */

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

[openMenuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener("click", () => {
        //console.log("on a appuyé sur le bouton")
        menu.classList.toggle("open");
        menu.style.transition = "transform 0.5s ease";
    });
});

menu.addEventListener("transitionend", function() {
    this.removeAttribute("style"); // Supprime les styles après la transition
});

menu.querySelectorAll(".dropdown .icon-link > i").forEach((arrow) => {
    arrow.addEventListener("click", function(){
        this.closest(".dropdown").classList.toggle("active");
    });
});

// fermer le menu dropdown en cliquant ailleurs
document.addEventListener("click", function(event) {
    //Vérifier si le clic est à l'extérieur du menu et des boutons
    //(event.target) ==> pour obtenir l'élément exact qui a été cliqué
    if (!menu.contains(event.target) && !openMenuBtn.contains(event.target)) {
        menu.classList.remove("open");
    }
});


/* ======================================================================================== */
/*                                     Page compétences*/
/* ======================================================================================== */

let flipBoxes = document.querySelectorAll(".flip-box");

//mettre un événement "mouseover"=> hogy csak *1 forduljon meg
//az :hover-el *2 fordul
flipBoxes.forEach(flipBoxe => {
     flipBoxe.addEventListener("mouseover", function(){
        this.querySelector(".flip-box-inner").classList.add("rotate");
    });
});


/* ======================================================================================== */
/*                  Utilisation des boutons pour passer sur les autres sites */
/* ======================================================================================== */


/*=================== Utilisation des boutons de la page à propos de moi ====================*/


//if pour éviter que ça soit null ==> sans ça il ne fonctionne pas!!!
if ((document.getElementById("btn-vers-propos-moi")) !== null) {
    document.getElementById("btn-vers-propos-moi").onclick = function() {
            window.location.href = "a_propos_de_moi.html";
    }
};

//btn-stage1
if((document.getElementById("btn-stage1")) !== null) {
    document.getElementById("btn-stage1").onclick = function(){
            window.location.href = "presentation_stage_1.html";
    }
};

//btn-stage2
if((document.getElementById("btn-stage2")) !== null) {
    document.getElementById("btn-stage2").onclick = function(){
            window.location.href = "presentation_stage_2.html";
    }
};

//btn vers GitHub
//je n'ai pas encore un compte de GitHub
if((document.getElementById("github")) !== null) {
    document.getElementById("github").onclick = function(){
            window.location.href = "page_error_404.html";
    }
};

//btn vers LinkedIn dans une nouvelle fenêtre
if((document.getElementById("linkedin")) !== null) {
    document.getElementById("linkedin").onclick = function(){
            window.open("https://www.linkedin.com/in/klaudia-juhasz-a165002bb/", "_blank");
            // window.location.href = "https://www.linkedin.com/in/klaudia-juhasz-a165002bb/"; //il ouvre dans la même fenêtre
    }
};


/*=============== Utilisation des boutons de la page à propos de la formation ==================*/


//btn vers la documentation sur BTS SIO SLAM dans une nouvelle fenêtre
if((document.getElementById("btn-BTS-SIO-SLAM")) !== null) {
    document.getElementById("btn-BTS-SIO-SLAM").onclick = function(){
            window.open("https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers", "_blank");
    }
};

//btn vers l'école IRIS MediaSchool Nice dans une nouvelle fenêtre
if((document.getElementById("btn-IRIS")) !== null) {
    document.getElementById("btn-IRIS").onclick = function(){
            window.open("https://ecoleiris.fr/nice/ecole", "_blank");
    }
};


/*========================== Utilisation des boutons de la page ppe ==========================*/


// pour l'instant ils vont sur les pages d'erreur car je n'ai pas fait des projets professionnels
if((document.getElementById("btn-ppe1")) !== null) {
    document.getElementById("btn-ppe1").onclick = function(){
            window.location.href = "page_error_404.html";
    }
};

if((document.getElementById("btn-ppe2")) !== null) {
    document.getElementById("btn-ppe2").onclick = function(){
            window.location.href = "page_error_404.html";
    }
};

if((document.getElementById("btn-ppe3")) !== null) {
    document.getElementById("btn-ppe3").onclick = function(){
            window.location.href = "page_error_404.html";
    }
};

if((document.getElementById("btn-ppe4")) !== null) {
    document.getElementById("btn-ppe4").onclick = function(){
            window.location.href = "page_error_404.html";
    }
};


/*==================== Utilisation des boutons de la page veille technologique ================*/





/*=========== Utilisation des boutons de la page de gestion de patrimoine informatique ==========*/


//btn vers GLPI
if((document.getElementById("btn-GLPI")) !== null) {
    document.getElementById("btn-GLPI").onclick = function(){
            window.location.href = "#GLPI";
    }
};

//btn vers OCS Inventory
if((document.getElementById("btn-OCS")) !== null) {
    document.getElementById("btn-OCS").onclick = function(){
            window.location.href = "#OCS-Inventory";
    }
};



/* ============================== Utilisation des boutons de competence ==========================*/


//btn vers mon tableau de compétence que je n'ai pas encore
if((document.getElementById("btn-tableau-competences")) !== null) {
    document.getElementById("btn-tableau-competences").onclick = function(){
            window.location.href = "page_error_404.html";
    }
};


/*================================ Utilisation des boutons de la page erreur =====================*/


// btn vers la page d'accueil sur la page error
if((document.getElementById("btn-error")) !== null) {
    document.getElementById("btn-error").onclick = function(){
            window.location.href = "accueil.html";
    }
};








