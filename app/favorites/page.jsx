"use client";
import React, { useEffect, useState } from "react";
import RecetteCard from "@/components/recetteCard/RecetteCard";
import Link from "next/link";
import recipes from "../../model/recipe-data.json";
import styles from "./favorites.module.css";

function Favorites() {
  const [favoritedRecipes, setFavoritedRecipes] = useState([]);

  useEffect(() => {
    // Check if localStorage is available (client-side)
    if (typeof window !== "undefined") {
      // Retrieve favorited recipe IDs from local storage
      const favoritedRecipeIds =
        JSON.parse(localStorage.getItem("favoriteData")) || [];

      // Filter recipes based on favoritedRecipeIds
      const filteredRecipes = recipes.filter((recipe) =>
        favoritedRecipeIds.includes(recipe.id)
      );

      setFavoritedRecipes(filteredRecipes);
    }
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Mes recettes préférés</h1>
      </div>
      {favoritedRecipes.length > 0 ? (
        <div>
          <div className={styles.recipeContainer}>
            {favoritedRecipes.map((recipe) => (
              <Link
                className={styles.link}
                key={recipe.id}
                href={`/recettes/${recipe.id}`}
              >
                <RecetteCard
                  id={recipe.id}
                  image={recipe.image}
                  nom={recipe.nom}
                  description={recipe.description}
                  difficulte={recipe.difficulte}
                  type={recipe.type}
                  temps={recipe.temps}
                  cuisine={recipe.cuisine}
                />
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.aucun}>
          <p>Vous n'avez encore ajouté aucune recette à vos favoris.</p>
          <div className={styles.buttonContainer}>
            <Link href={"../recettes"}>
              <button className={styles.button}>Rechercher des recettes</button>
            </Link>
            <Link href={"../garde-manger"}>
              <button className={styles.button}>
                Remplir votre garde-manger virtuel
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Favorites;
