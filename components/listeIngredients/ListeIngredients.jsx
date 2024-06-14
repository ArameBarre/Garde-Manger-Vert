import React, { useState } from "react";
import ingredientsData from "../../model/ingredient-data.json";
import styles from "./listeIngredients.module.css";

// Define category translations
const categoryTranslations = {
  1: { name: "Pains", color: "#ff9f43" },
  2: { name: "Riz", color: "#feca57" },
  3: { name: "Pâtes", color: "#ff6b6b" },
  4: { name: "Fruits", color: "#48dbfb" },
  5: { name: "Légumes", color: "#1dd1a1" },
  6: { name: "Légumineuses", color: "#ff9ff3" },
  7: { name: "Noix et graines", color: "#f368e0" },
  8: { name: "Produits laitiers", color: "#54a0ff" },
  9: { name: "Sauces et condiments", color: "#2e86de" },
  10: { name: "Soupes", color: "#5f27cd" },
  11: { name: "Huiles vinaigres et sirops", color: "#ff9f43" },
  12: { name: "Desserts", color: "#ff793f" },
  13: { name: "Garnitures", color: "#48dbfb" },
  14: { name: "Herbes et épices", color: "#1dd1a1" },
};

const ListeIngredients = () => {
  // State to store selected category
  const [selectedCategory, setSelectedCategory] = useState("all");
  // State to store search term
  const [searchTerm, setSearchTerm] = useState("");

  // Filter ingredients based on selected category and search term
  const filteredIngredients = ingredientsData
    .filter((ingredient) =>
      ingredient.nom.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (ingredient) =>
        selectedCategory === "all" ||
        ingredient.group_id.toString() === selectedCategory
    );

  // Function to handle drag start event
  const handleDragStart = (e, ingredient) => {
    e.dataTransfer.setData("ingredient", JSON.stringify(ingredient));
  };

  // Function to handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle search button click
  const handleSearchClick = () => {
    // Perform search here if needed
  };

  return (
    <div className={styles.container}>
      {/* Search bar */}
      <div className={styles.searchContainer}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Rechercher un ingrédient"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Category select menu */}
      <div className={styles.selectBar}>
        <p style={{ margin: "8px" }}>Sélection de catégorie: </p>
        <select
          className={styles.select}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">Tous</option>
          {Object.entries(categoryTranslations).map(
            ([categoryId, { name }]) => (
              <option key={categoryId} value={categoryId}>
                {name}
              </option>
            )
          )}
        </select>
      </div>

      {/* Display filtered ingredients */}
      <div className={styles.ingredientsContainer}>
        {filteredIngredients.map((ingredient) => (
          <div
            key={ingredient.id}
            className={`${styles.ingredient} ${
              styles[
                categoryTranslations[ingredient.group_id]?.name.replace(
                  / /g,
                  "-"
                )
              ]
            }`}
            draggable
            onDragStart={(e) => handleDragStart(e, ingredient)}
          >
            {ingredient.nom}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListeIngredients;
