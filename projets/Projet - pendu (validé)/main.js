document.addEventListener("DOMContentLoaded", function () {
  const words = {
    webdev: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACT",
      "ANGULAR",
      "VUE",
      "NODEJS",
      "EXPRESS",
      "MONGODB",
      "SQL",
      "BOOTSTRAP",
      "RESPONSIVE",
      "API",
      "AJAX",
      "JSON",
      "FETCH",
      "REST",
      "GRAPHQL",
      "WEBPACK",
      "TYPESCRIPT",
      "REDUX",
      "NPM",
      "YARN",
      "GIT",
      "GITHUB",
      "HEROKU",
      "FIREBASE",
      "SASS",
      "LESS",
      "JQUERY",
    ],
    pays: [
      "FRANCE",
      "ESPAGNE",
      "ITALIE",
      "ALLEMAGNE",
      "PORTUGAL",
      "BELGIQUE",
      "ROYAUMEUNI",
      "PAYSBAS",
      "SUÈDE",
      "NORVÈGE",
      "DANEMARK",
      "FINLANDE",
      "SUISSE",
      "AUTRICHE",
      "GRÈCE",
      "TURQUIE",
      "RUSSIE",
      "ÉTATSUNIS",
      "CANADA",
      "MEXIQUE",
      "BRÉSIL",
      "ARGENTINE",
      "CHINE",
      "JAPON",
      "INDE",
      "AUSTRALIE",
      "NOUVELLEZÉLANDE",
      "AFRIQUEDUSUD",
      "ÉGYPTE",
      "MAROC",
    ],
    villes: [
      "PARIS",
      "LONDRES",
      "BERLIN",
      "MADRID",
      "ROME",
      "AMSTERDAM",
      "BRUXELLES",
      "LISBONNE",
      "GENÈVE",
      "OSLO",
      "STOCKHOLM",
      "COPENHAGUE",
      "HELSINKI",
      "VARSOVIE",
      "MOSCOU",
      "NEWYORK",
      "LOSANGELES",
      "TORONTO",
      "MEXICO",
      "RIODEJANEIRO",
      "BUENOSAIRES",
      "SYDNEY",
      "TOKYO",
      "PÉKIN",
      "SHANGHAI",
      "MUMBAI",
      "LECAIRE",
      "JOHANNESBURG",
      "DUBAI",
      "SINGAPOUR",
    ],
    fruits: [
      "BANANE",
      "POMME",
      "ORANGE",
      "FRAISE",
      "ANANAS",
      "CERISE",
      "RAISIN",
      "MELON",
      "PASTÈQUE",
      "PÊCHE",
      "ABRICOT",
      "POIRE",
      "KIWI",
      "MANGUE",
      "CITRON",
      "PRUNE",
      "FRAMBOISE",
      "MYRTILLE",
      "GRENADE",
      "NOIXDECOCO",
      "PAMPLEMOUSSE",
      "AVOCAT",
      "MÛRE",
      "NECTARINE",
      "LITCHI",
      "PAPAYE",
      "GOYAVE",
      "CASSIS",
      "KAKI",
      "FIGUE",
    ],
    legumes: [
      "CAROTTE",
      "POMMEDETERRE",
      "TOMATE",
      "COURGETTE",
      "POIVRON",
      "AUBERGINE",
      "CONCOMBRE",
      "RADIS",
      "OIGNON",
      "ÉCHALOTE",
      "POIREAU",
      "CÉLERI",
      "HARICOT",
      "CHOU",
      "BROCOLI",
      "ASPERGE",
      "ARTICHAUT",
      "POIS",
      "COURGE",
      "PANAIS",
      "NAVET",
      "BETTRAVE",
      "FENOUIL",
      "MÂCHE",
      "ENDIVE",
      "CHAMPIGNON",
      "CRESSON",
      "LENTILLE",
      "POISCHICHE",
      "BLETTE",
    ],
    animaux: [
      "CHIEN",
      "CHAT",
      "OISEAU",
      "ÉLÉPHANT",
      "LION",
      "TIGRE",
      "POULE",
      "SERPENT",
      "GIRAFE",
      "KANGOUROU",
      "RENARD",
      "PANDA",
      "GORILLE",
      "HIPPOPOTAME",
      "CROCODILE",
      "SINGE",
      "PERROQUET",
      "OURS",
      "ZÈBRE",
      "BALEINE",
      "DAUPHIN",
      "GRENOUILLE",
      "PAPILLON",
      "PHOQUE",
      "PANTHÈRE",
      "CHIMPANZÉ",
      "LÉOPARD",
      "AUTRUCHE",
      "POULET",
      "POISSON",
    ],
    sports: [
      "FOOTBALL",
      "BASKETBALL",
      "TENNIS",
      "NATATION",
      "ATHLÉTISME",
      "GYMNASTIQUE",
      "VOLLEYBALL",
      "RUGBY",
      "HOCKEYSURGLACE",
      "BASEBALL",
      "GOLF",
      "BOXE",
      "CYCLISME",
      "ESCALADE",
      "SKI",
      "SNOWBOARD",
      "BADMINTON",
      "PINGPONG",
      "KARATÉ",
      "JUDO",
      "ESCRIME",
      "HANDBALL",
      "WATERPOLO",
      "PÉTANQUE",
      "COURSEAUTOMOBILE",
      "SURF",
      "MOTOCROSS",
      "TAEKWONDO",
      "WINDSURF",
      "LUTTE",
    ],
    objets: [
      "TÉLÉPHONE",
      "ORDINATEURPORTABLE",
      "MONTRE",
      "LUNETTES",
      "CAMÉRA",
      "VOITURE",
      "AVION",
      "BICYCLETTE",
      "MICROONDES",
      "RÉFRIGÉRATEUR",
      "TÉLÉVISION",
      "CONSOLEDEJEUX",
      "ASPIRATEUR",
      "TABLETTE",
      "STYLO",
      "SACÀDOS",
      "CHAISE",
      "TABLE",
      "CANAPÉ",
      "LAMPE",
      "BOUSSOLE",
      "COUTEAU",
      "TASSE",
      "ASSIETTE",
      "MARTEAU",
      "CLÉ",
      "BROSSEÀDENTS",
      "APPAREILPHOTO",
      "GUITARE",
      "TÉLÉCOMMANDE",
    ],
    marques: [
      "APPLE",
      "SAMSUNG",
      "GOOGLE",
      "MICROSOFT",
      "AMAZON",
      "NIKE",
      "ADIDAS",
      "COCACOLA",
      "TOYOTA",
      "BMW",
      "MERCEDESBENZ",
      "SONY",
      "DISNEY",
      "LOUISVUITTON",
      "CHANEL",
      "GUCCI",
      "ROLEX",
      "PEPSI",
      "LORÉAL",
      "CANON",
      "INTEL",
      "DELL",
      "HP",
      "NESTLÉ",
      "MCDONALDS",
      "BURGERKING",
      "KFC",
      "PRADA",
      "LAMBORGHINI",
    ],
  };

  let currentWord = "";
  let hiddenWord = [];
  let tries = [];
  let maxTries = 9; // Nombre maximum d'essais autorisés
  let gameEnded = false; // Nouvelle variable pour suivre l'état du jeu

  const themeSelect = document.getElementById("themeSelect");
  const form = document.getElementById("form");
  const promptInput = document.getElementById("prompt");
  const sendButton = document.getElementById("send");
  const restartButton = document.getElementById("restart");
  const tryList = document.getElementById("try_list");
  const tryShow = document.getElementById("try_show");
  const alertBox = document.getElementById("alert");

  themeSelect.addEventListener("change", function () {
    const theme = themeSelect.value;
    currentWord = getRandomWord(theme);
    resetGame();
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const guess = promptInput.value.toUpperCase();
    if (gameEnded) {
      // Vérifier si le jeu est terminé
      showAlert("Le jeu est terminé. Veuillez recommencer.");
      return;
    }
    if (guess.length === 1) {
      if (tries.includes(guess)) {
        showAlert("Vous avez déjà essayé cette lettre.");
      } else {
        tries.push(guess);
        updateTriesDisplay();
        checkGuess(guess);
      }
    } else if (guess.length === currentWord.length) {
      if (guess === currentWord) {
        endGame(true);
      } else {
        showAlert("Ce n'est pas le bon mot.");
      }
    } else {
      showAlert("Veuillez entrer une seule lettre ou le mot complet.");
    }
    promptInput.value = "";
  });

  restartButton.addEventListener("click", function (e) {
    e.preventDefault();
    resetGame();
  });

  function getRandomWord(theme) {
    const wordsArray = words[theme];
    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    return wordsArray[randomIndex];
  }

  function resetGame() {
    hiddenWord = currentWord.split("").map(() => "_");
    tries = [];
    gameEnded = false; // Réinitialiser l'état du jeu
    updateWordDisplay();
    updateTriesDisplay();
    tryShow.classList.remove("hidden");
    alertBox.classList.add("hidden");
    sendButton.classList.remove("hidden");
    restartButton.classList.add("hidden");
  }

  function updateWordDisplay() {
    tryShow.textContent = hiddenWord.join(" ");
  }

  function updateTriesDisplay() {
    const remainingTries = maxTries - tries.length;
    tryList.innerHTML =
      `<li class="start">Vos essais (${remainingTries}/${maxTries}) &gt;</li>` +
      tries.map((letter) => `<li>${letter}</li>`).join("");
  }

  function checkGuess(guess) {
    // Vérifier si le jeu est déjà terminé
    if (gameEnded) {
      return; // Sortir de la fonction si le jeu est terminé
    }

    let correctGuess = false;
    for (let i = 0; i < currentWord.length; i++) {
      if (currentWord[i] === guess) {
        hiddenWord[i] = guess;
        correctGuess = true;
      }
    }
    updateWordDisplay();
    if (!hiddenWord.includes("_")) {
      endGame(true);
    } else if (!correctGuess) {
      if (tries.length >= maxTries) {
        endGame(false);
      } else {
        showAlert("La lettre n'est pas dans le mot.");
      }
    } else {
      // Effacer le message d'erreur si la lettre est correcte
      alertBox.classList.add("hidden");
    }
  }

  function endGame(win) {
    gameEnded = true; // Mettre fin au jeu
    if (win) {
      showAlert("Félicitations ! Vous avez deviné le mot.");
    } else {
      showAlert(`Désolé, vous avez perdu. Le mot était "${currentWord}".`);
    }
    sendButton.classList.add("hidden");
    restartButton.classList.remove("hidden");
  }

  function showAlert(message) {
    alertBox.textContent = message;
    alertBox.classList.remove("hidden");
  }
});
