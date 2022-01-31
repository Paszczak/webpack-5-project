import { useState } from 'react';

import me from '../images/IMG_3998.png';

const pastaRecipe = {
  eggs: 4,
  flour: 400,
};

const deliciousPastaRecipe = {
  ...pastaRecipe,
  eggs: 5,
};

console.log('[WEBPACK]', pastaRecipe);
console.log('[WEBPACK]', deliciousPastaRecipe);

export default function Recipes() {
  const [state, setState] = useState();

  return (
    <>
      <h3>Current Recipe</h3>
      <img src={me} alt='me' width='250' />
    </>
  );
}
