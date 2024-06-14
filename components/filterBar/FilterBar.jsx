import React, { useState } from "react";
import styles from "./filterBar.module.css";

const FilterBar = ({ isSticky, filterRecipes }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const categories = ["Entrée", "Salade", "Plat principal", "Dessert"];
  const difficulties = ["Facile", "Moyen", "Difficile"];
  const times = ["Moins de 30 min", "30 à 60 min", "Plus de 60 min"];

  const handleCategoryChange = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    filterRecipes(
      selectedCategory === category ? null : category,
      selectedDifficulty,
      selectedTime
    );
  };

  const handleDifficultyChange = (difficulty) => {
    setSelectedDifficulty(
      selectedDifficulty === difficulty ? null : difficulty
    );
    filterRecipes(
      selectedCategory,
      selectedDifficulty === difficulty ? null : difficulty,
      selectedTime
    );
  };

  const handleTimeChange = (time) => {
    setSelectedTime(selectedTime === time ? null : time);
    filterRecipes(
      selectedCategory,
      selectedDifficulty,
      selectedTime === time ? null : time
    );
  };

  return (
    <div
      id="filterBar"
      className={`${styles.filterBar} ${isSticky && styles.sticky}`}
    >
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          <p>Catégorie</p>
        </div>
        <div className={styles.options}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterBtn} ${
                selectedCategory === category && styles.selected
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Difficulté</div>
        <div className={styles.options}>
          {difficulties.map((difficulty) => (
            <button
              key={difficulty}
              className={`${styles.filterBtn} ${
                selectedDifficulty === difficulty && styles.selected
              }`}
              onClick={() => handleDifficultyChange(difficulty)}
            >
              {difficulty}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Temps de préparation</div>
        <div className={styles.options}>
          {times.map((time) => (
            <button
              key={time}
              className={`${styles.filterBtn} ${
                selectedTime === time && styles.selected
              }`}
              onClick={() => handleTimeChange(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
