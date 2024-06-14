import React from "react";
import recipes from "../../model/recipe-data.json";
import styles from "./recetteDetails.module.css";
import FavoriteToggle from "../favoriteToggle/FavoriteToggle"; // Import the FavoriteToggle component

const RecetteDetails = ({ recipe }) => {
  // Check if recipe is not found
  if (!recipe) {
    return <div>Recipe not found</div>;
  }
  const urlImg = `/${recipe.image}`;

  // Render the recipe details
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{recipe.nom} </h1>
        <div className={styles.favoriteToggle}>
          <FavoriteToggle recipeId={recipe.id} className={styles.heart} />{" "}
        </div>
      </div>
      <div className={styles.recipeDetails}>
        <div>
          <img className={styles.image} src={urlImg} alt={recipe.nom} />
        </div>
        <div className={styles.info}>
          <div className={styles.tags}>
            <div className={styles.type}>
              <p className={styles.tagTitle}>Type de plat</p>
              <p className={styles.tag}>{recipe.type}</p>
            </div>
            <div className={styles.temps}>
              <p className={styles.tagTitle}>Temps de préparation</p>
              <p className={styles.tag}>{recipe.temps}</p>
            </div>
            <div className={styles.difficulte}>
              <p className={styles.tagTitle}>Difficulté</p>
              <p className={styles.tag}>{recipe.difficulte}</p>
            </div>
            <div className={styles.cuisine}>
              <p className={styles.tagTitle}>Type de cuisine</p>
              <p className={styles.tag}>{recipe.cuisine}</p>
            </div>
          </div>
          <p className={styles.description}>{recipe.description}</p>
          <div className={styles.ingredients}>
            <h2 className={styles.ingredientsTitle}>Ingrédients</h2>
            <ul className={styles.ingredientsList}>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={styles.instructionsTitle}>Instructions</h2>
            <ol className={styles.instructionsList}>
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecetteDetails;
