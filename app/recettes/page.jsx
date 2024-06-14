"use client";
import React, { useState, useEffect } from "react";
import styles from "./recettes.module.css";
import FilterBar from "@/components/filterBar/FilterBar";
import RecetteCard from "@/components/recetteCard/RecetteCard";
import recipes from "../../model/recipe-data.json";
import Link from "next/link";

export default function Recettes() {
  const [isSticky, setIsSticky] = useState(false);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes); // Initially, display all recipes

  useEffect(() => {
    const handleScroll = () => {
      const recipeCardsHeight = 240;
      const scrollPosition = window.scrollY;

      if (scrollPosition > recipeCardsHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to filter recipes based on selected category, difficulty, and time
  const filterRecipes = (category, difficulty, time) => {
    let filtered = recipes;

    if (category) {
      filtered = filtered.filter((recipe) => recipe.type === category);
    }
    if (difficulty) {
      filtered = filtered.filter((recipe) => recipe.difficulte === difficulty);
    }
    if (time) {
      filtered = filtered.filter((recipe) => recipe.temps === time);
    }

    setFilteredRecipes(filtered);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Laissez-nous vous fournir de l'inspiration culinaire. Vous pouvez
        parcourir notre catalogue complet de recettes ci-dessous ou utiliser les
        options dans la barre de filtre pour obtenir des résultats
        personnalisés.
      </p>
      <div className={styles.pageContainer}>
        <FilterBar
          className={styles.filterBar}
          isSticky={isSticky}
          filterRecipes={filterRecipes} // Pass filter function to FilterBar
        />
        <div className={styles.recipeList}>
          {filteredRecipes.map((recipe) => (
            <Link key={recipe.id} href={`/recettes/${recipe.id}`}>
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
    </div>
  );
}
