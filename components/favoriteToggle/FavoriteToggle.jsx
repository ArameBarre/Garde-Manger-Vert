"use client";
import React, { useState, useEffect } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import styles from "./favoriteToggle.module.css";
import recipes from "../../model/recipe-data.json";

const FavoriteToggle = ({ recipeId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if the recipe is favorited based on its favorited property
    const storedRecipe = recipes.find((recipe) => recipe.id === recipeId);
    setIsFavorite(storedRecipe?.favorited || false);
  }, [recipeId]);

  const toggleFavorite = () => {
    // Find the index of the recipe in the recipes array
    const recipeIndex = recipes.findIndex((recipe) => recipe.id === recipeId);

    // Log the current value of the favorited property
    console.log(
      `Recipe ${recipeId} favorited status before toggling: ${recipes[recipeIndex].favorited}`
    );

    // Update the favorited property of the corresponding recipe
    recipes[recipeIndex].favorited = !recipes[recipeIndex].favorited;

    // Log the updated value of the favorited property
    console.log(
      `Recipe ${recipeId} favorited status after toggling: ${recipes[recipeIndex].favorited}`
    );

    // Update the favorite data in local storage
    const updatedFavorites = recipes
      .filter((recipe) => recipe.favorited)
      .map((recipe) => recipe.id);
    localStorage.setItem("favoriteData", JSON.stringify(updatedFavorites));

    // Update the recipe data in local storage
    localStorage.setItem("recipes", JSON.stringify(recipes));

    setIsFavorite(!isFavorite);
  };

  return (
    <div onClick={toggleFavorite}>
      {isFavorite ? (
        <FavoriteOutlinedIcon
          style={{ color: "red" }}
          className={styles.heart}
        />
      ) : (
        <FavoriteBorderOutlinedIcon className={styles.heart} />
      )}
    </div>
  );
};

export default FavoriteToggle;
