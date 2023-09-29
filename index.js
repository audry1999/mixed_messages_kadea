// Générer un index aléatoire dans le tableau
const randomIndex = Math.floor(Math.random() * messages.length);
  
// Obtenez l'objet de message aléatoire
const randomMessage = messages[randomIndex];

// Sélectionnez au hasard un mot dans chaque liste dans l'objet du message
const randomSubject = randomMessage.subject;
const randomAdjective = randomMessage.adjectives[Math.floor(Math.random() * randomMessage.adjectives.length)];
const randomVerbIndex = Math.floor(Math.random() * randomMessage.verbs.length);
const randomVerb = randomMessage.verbs[randomVerbIndex];
const randomObject = randomMessage.objects[Math.floor(Math.random() * randomMessage.objects.length)];

let randomAdverbialPhrase;
if (Array.isArray(randomMessage.adverbialPhrases)) {
  const randomIndex = Math.floor(Math.random() * randomMessage.adverbialPhrases.length);
  randomAdverbialPhrase = randomMessage.adverbialPhrases[randomIndex];
} else {
  randomAdverbialPhrase = randomMessage.adverbialPhrases;
}

// Construire le message aléatoire
let message = randomSubject + " " + randomVerb + " " + randomAdjective + " and " + randomObject + " " + ".";

// Afficher le message aléatoire
console.log(message);

