document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
        alert(`Merci pour votre message, ${name}!`);
        // Ici, vous pourriez ajouter une fonctionnalité pour envoyer les données à un serveur.
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});
