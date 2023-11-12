import "https://codepen.io/smlsvnssn/pen/BrQjRm.js";
import clrsets from "https://codepen.io/smlsvnssn/pen/Vwzdxma.js";

const hsla = (c) => `hsla(${c.h % 360}, ${c.s}%, ${c.l}%, ${c.a})`

const colourise = () => {
  let clrset = ö.sample(clrsets);

  ö("radialGradient").each((i) => { 
    let clr;
    i.find("stop").attr("stop-color", (i) => {
      clr = i % 2 ? {...clr, a:0 } : ö.toHsla(ö.sample(clrset.colourset));
      return hsla(clr);
    });
  });
};

ö(window).on("click", colourise);

colourise();
