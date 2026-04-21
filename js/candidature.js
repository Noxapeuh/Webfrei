document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formCandidature");
    const messageDiv = document.getElementById("form-message");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            console.log("Nouvelle candidature envoyée :", data);
            
            // Simulation de l'envoi de données
            form.style.display = "none";
            messageDiv.textContent = "Merci pour votre candidature. Nous avons bien reçu vos informations et analyserons votre profil très prochainement.";
            messageDiv.style.display = "block";
            messageDiv.style.fontSize = "1.2vw";
            messageDiv.style.color = "#000";
            messageDiv.style.padding = "2vh 0";
            messageDiv.style.borderTop = "1px solid #000";
            messageDiv.style.borderBottom = "1px solid #000";
        });
    }
});
