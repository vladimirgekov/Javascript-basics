function seaTrip(input) {
  let putDoMoreto = 420;
  let dni = 3;
  let cenaBenzin = 1.85;

  let pariZaXranaZa1den = Number(input.shift());
  let pariZaSuveniriZa1den = Number(input.shift());
  let pariZaHotelZa1den = Number(input.shift());

  let neobxodimiLitriBenzin = (putDoMoreto / 100) * 7;
  let parizaBenzin = neobxodimiLitriBenzin * cenaBenzin;

  let pariZaPrestoi = dni * pariZaXranaZa1den + dni * pariZaSuveniriZa1den;

  let pariZaPyrviDen = 0.9 * pariZaHotelZa1den;
  let pariZaVtoriDen = 0.85 * pariZaHotelZa1den;
  let pariZaTretiDen = 0.8 * pariZaHotelZa1den;

  let obshtaSuma =
    parizaBenzin +
    pariZaPrestoi +
    pariZaPyrviDen +
    pariZaVtoriDen +
    pariZaTretiDen;

  console.log(`Money needed: ${obshtaSuma.toFixed(2)}`);
}
seaTrip([100, 50, 500]);
