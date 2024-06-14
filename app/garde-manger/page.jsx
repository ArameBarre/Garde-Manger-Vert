// GardeManger.jsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import ListeIngredients from "@/components/listeIngredients/ListeIngredients";
import styles from "./garde-manger.module.css";
import MonGardeManger from "@/components/gardeManger/MonGardeManger";
import recipes from "../../model/recipe-data.json";
import RecetteCard from "@/components/recetteCard/RecetteCard";
import Link from "next/link";

const GardeManger = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const recipesContainerRef = useRef(null);

  // Function to update selected ingredients
  const handleUpdateIngredients = (ingredients) => {
    setSelectedIngredients(ingredients);
    if (recipesContainerRef.current) {
      recipesContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
    console.log("Selected Ingredients:", ingredients); // Print selected ingredients to console
  };

  useEffect(() => {
    // Filter recipes based on selected ingredients
    const filtered = recipes.filter((recipe) => {
      // Check if any selected ingredient name matches any recipe ingredient name (case-insensitive comparison)
      return selectedIngredients.some((selectedIngredient) =>
        recipe.ingredient_names.some(
          (ingredient) =>
            ingredient.toLowerCase() === selectedIngredient.nom.toLowerCase()
        )
      );
    });

    setFilteredRecipes(filtered);
  }, [selectedIngredients]);

  return (
    <div>
      <div className={styles.titleContainer}>
        <p>
          Recherchez des ingrédients par nom ou par catégorie et ajoutez-les à
          votre garde-manger sur la droite. Lorsque vous êtes prêt, cliquez sur
          le bouton "Cuisinons!"
        </p>
      </div>
      <div className={styles.container}>
        <ListeIngredients />
        <MonGardeManger onUpdateIngredients={handleUpdateIngredients} />
      </div>
      <div ref={recipesContainerRef} className={styles.recipesContainer}>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <Link key={index} href={`/recettes/${recipe.id}`}>
              <RecetteCard
                id={recipe.id}
                image={recipe.image}
                nom={recipe.nom}
                description={recipe.description}
                type={recipe.type}
                temps={recipe.temps}
                difficulte={recipe.difficulte}
                cuisine={recipe.cuisine}
              />
            </Link>
          ))
        ) : (
          <p className={styles.aucun}>
            Aucune recette disponible avec les ingrédients sélectionnés.
            Veuillez ajouter plus d'ingrédients à votre garde-manger ou
            consulter la page Recettes pour avoir plus d'idées !
          </p>
        )}
      </div>
    </div>
  );
};

export default GardeManger;
