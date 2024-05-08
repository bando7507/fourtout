const puppeteer = require("puppeteer");
// import puppeteer from "puppeteer";

function genererCodeAleatoire() {
  const caracteresPermis = "abcdefghijklmnopqrstuvwxyz0123456789";
  const longueurMin = 6;
  const longueurMax = 7;

  const longueur =
    Math.floor(Math.random() * (longueurMax - longueurMin + 1)) + longueurMin;
  let code = "";

  for (let i = 0; i < longueur; i++) {
    const randomIndex = Math.floor(Math.random() * caracteresPermis.length);
    code += caracteresPermis.charAt(randomIndex);
  }

  return code;
}

// Exemple d'utilisation :
// const codeAleatoire = genererCodeAleatoire();
// console.log(codeAleatoire);

(async () => {
  const puppeteer = require("puppeteer");

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://192.168.50.1:8002/index.php?zone=revorenai_wifi");

  let codeTrouve = false;
  let code;

  while (!codeTrouve) {
    // Génération du code aléatoire
    code = genererCodeAleatoire();

    // Simulation de saisie dans le champ de code
    await page.type(".inp-voucher", code);

    // Clique sur le bouton de soumission
    await page.click(".btn-voucher");

    // Attendez quelques secondes pour que la page se charge complètement (ajustez selon vos besoins)
    // await page.waitForTimeout(5000);

    // Vérifie si le message d'erreur est affiché
    const errorMessage = await page.evaluate(() => {
      return document.querySelector(".error-voucher span").textContent;
    });

    if (errorMessage === "Code expiré" || errorMessage === "Code expiré") {
      console.log("Le code est expiré. Essayer un autre code.");
    } else {
      console.log("Le code a été accepté :", code);
      codeTrouve = true;
      // Mettez ici votre code pour traiter le code en cas de succès
      // Par exemple, vous pouvez stocker le code dans une variable ou le traiter de toute autre manière nécessaire.
    }
  }

  await browser.close();
})();
