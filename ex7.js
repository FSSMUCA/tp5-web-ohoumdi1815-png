function verifierMotDePasse(mdp) {
    if (mdp.length >= 8 && mdp.includes("@")) {
        return true;
    } else {
        return false;
    }
}

let mot = prompt("Entrez votre mot de passe : ");

if (verifierMotDePasse(mot)) {
    console.log("Mot de passe valide");
} else {
    console.log("Mot de passe non valide");
}
