
const Messages = [
  { 
    Nom: ["emmanuel", "audry", "bienv", "justin",], 
  },
  { 
    Verbe: ["est", "a", "pouvait etre", "peux",], 
  },
  { 
    Adjectif: ["gentil", "arogant", "malade", "malin",], 
  },

];
const randomIndex = Math.floor(Math.random() * Messages.length)
const randomMessage = Messages[randomIndex];
 const randomNoms =  randomMessage.Nom[Math.floor(Math.random() * randomMessage.Nom.length)];
const randomVerbes = randomMessage.Verbe[Math.floor(Math.random() * randomMessage.Verbe.length)];
const randomAdjectifs =  randomMessage.Adjectif[Math.floor(Math.random() * randomMessage.Adjectif.length)];
let message = randomNoms + " " + randomVerbes + " " + randomAdjectifs + ".";

console.log(message);
