function spaceship(input) {
  let shirochina = Number(input.shift());
  let duljina = Number(input.shift());
  let visochina = Number(input.shift());
  let srednaVisochinaNaAstronavtite = Number(input.shift());

  let duljinaNaStaq = 2;
  let shirinaNaStaq = 2;
  let visochinaNaStaq = 0.4 + srednaVisochinaNaAstronavtite;

  let obemNaRaketata = shirochina * duljina * visochina;
  let obemNaStaq = visochinaNaStaq * duljinaNaStaq * shirinaNaStaq;

  let xora = parseInt(obemNaRaketata / obemNaStaq);

  if (xora < 3) {
    console.log(`The spacecraft is too small.`);
  } else if (xora >= 3 && xora <= 10) {
    console.log(`The spacecraft holds ${xora} astronauts.`);
  } else if (xora > 10) {
    console.log(`The spacecraft is too big.`);
  }
}
