const bot = {
    nom: "Allal",
    statut: "Online",
    saluer() {
        return `Bonjour, je suis ${this.nom}`;
}
}



const responses = [
    { motcle: "horraire", text: "From 9AM to 6PM" },
    { motcle: "information", text: "Find more information on this website :" },
    { motcle: "inscription", text: "Head to the receptionist" },
    { motcle: "livre", text: "Find a woman wandering around wearing a library badge and ask her" },
    { motcle: "adress", text: "Hay al fath, GH407" },
    { motcle: "jours", text: "Monday to thursday" },
];

function repondre(message) {
    message = message.toLowerCase();

    const reponse = responses.find(r => message.includes(r.motcle));

    console.log(reponse ? reponse.text : "I didn't understand.");
}

repondre("What are the Horraire?");
