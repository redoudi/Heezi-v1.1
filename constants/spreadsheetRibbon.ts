const darkBgStyle = { backgroundColor: "#989898" };
export const RIBBON_TABS_MOBILE = [
  { label: "Accueil" },
  { label: "Insertion" },
];
export const RIBBON_TABS_DESKTOP = [
  ...RIBBON_TABS_MOBILE,
  { label: "Dessin", style: darkBgStyle },
  { label: "Conception", style: darkBgStyle },
  { label: "Mise en page" },
  { label: "Références" },
  { label: "Publipostage", style: darkBgStyle },
  { label: "Révision" },
  { label: "Affichage", style: darkBgStyle },
];
