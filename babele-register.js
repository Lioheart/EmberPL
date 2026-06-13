Hooks.once("babele.init", (babele) => {
  if (!game.modules.get("babele")?.active) return;

  babele.register({
    module: "lang-pl-ember",
    lang: "pl",
    dir: "lang/pl/compendium"
  });
});