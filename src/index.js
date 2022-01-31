import "./styles/style.scss";

const pastaRecipe = {
  eggs: 4,
  flour: 400,
}

const deliciousPastaRecipe = {
  ...pastaRecipe,
  eggs: 5,
}

console.log('[WEBPACK]', pastaRecipe)
console.log('[WEBPACK]', deliciousPastaRecipe)