// import { arbitrumGoerli } from 'wagmi/dist/chains';
import { arbitrumGoerli } from "wagmi/chains";
import { mantaTest,bnbTest } from "./chains";

export const config = {
  [arbitrumGoerli.id]: {
    SHUFFLE: "0xc7DBe0744c1ADB37Fd74904639AD9d20294f449a",
    HILO: "0xbF97898A0e5d41B7cd8DA85769997D76a31f6964",
    KS: "0x7A0959d2196258855e6AE4a7F8fCD432C474e270",
  },
  [mantaTest.id]: {
    SHUFFLE: "0x8F8a52Ee35A15F29c789b7a635aA78bC10628B87",
    HILO: "",
    KS: "0x308d4d5d797D5120A2a6B89899abDCe475A8c33D",
  },
  [bnbTest.id]: {
    SHUFFLE: "0x4fb570e05124609c20EF617870f752A88978C7dc",
    HILO: "0xD1276758Db1576F084D6c6Ffc328552b952FE951",
    KS: "0x308d4d5d797D5120A2a6B89899abDCe475A8c33D",
  },
};
