// RecettesFiltrees.jsx

import React from "react";

const RecettesFiltrees = ({ recipes }) => {
  return (
    <div>
      <h2>Recettes Filtrées</h2>
      {recipes.length === 0 ? (
        <p>Aucune recette trouvée avec ces ingrédients.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.nom}</h3>
            <p>{recipe.description}</p>
            {/* Add other details if needed */}
          </div>
        ))
      )}
    </div>
  );
};

export default RecettesFiltrees;
