import React, { useState } from "react";
import styles from "./monGardeManger.module.css";

const MonGardeManger = ({ onUpdateIngredients }) => {
  // State to store dropped ingredients
  const [droppedIngredients, setDroppedIngredients] = useState([]);

  // Function to handle drop event
  const handleDrop = (e) => {
    e.preventDefault();
    const ingredient = JSON.parse(e.dataTransfer.getData("ingredient"));
    if (!droppedIngredients.some((ing) => ing.id === ingredient.id)) {
      setDroppedIngredients([...droppedIngredients, ingredient]);
    }
  };

  // Function to handle drag over event
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Function to handle ingredient deletion
  const handleDelete = (ingredientId) => {
    setDroppedIngredients(
      droppedIngredients.filter((ing) => ing.id !== ingredientId)
    );
  };

  // Function to get the French name of ingredient group based on group_id
  const getGroupFrenchName = (groupId) => {
    switch (groupId) {
      case 1:
        return "Pains";
      case 2:
        return "Riz";
      case 3:
        return "Pâtes";
      case 4:
        return "Fruits";
      case 5:
        return "Légumes";
      case 6:
        return "Légumineuses";
      case 7:
        return "Noix et graines";
      case 8:
        return "Produits laitiers";
      case 9:
        return "Sauces et condiments";
      case 10:
        return "Soupes";
      case 11:
        return "Huiles, vinaigres et sirops";
      case 12:
        return "Desserts";
      case 13:
        return "Garnitures";
      case 14:
        return "Herbes et épices";
      default:
        return "";
    }
  };

  // Function to group ingredients by group_id and return as an object
  const groupIngredients = (ingredients) => {
    const groupedIngredients = {};
    ingredients.forEach((ingredient) => {
      if (!groupedIngredients[ingredient.group_id]) {
        groupedIngredients[ingredient.group_id] = [];
      }
      groupedIngredients[ingredient.group_id].push(ingredient);
    });
    return groupedIngredients;
  };

  // Function to handle sending ingredients back to page.jsx
  const handleSendIngredients = () => {
    onUpdateIngredients(droppedIngredients);
  };

  // Group dropped ingredients by group_id
  const groupedIngredients = groupIngredients(droppedIngredients);

  return (
    <div
      className={styles.container}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {/* New button to send ingredients back */}
      <button onClick={handleSendIngredients} className={styles.buttonCook}>
        Cuisinons!
      </button>

      <h2 className={styles.title}>Mon Garde-Manger</h2>
      {droppedIngredients.length === 0 && (
        <div className={styles.message}>
          Votre garde-manger est vide! Faites glisser et déposez des ingrédients
          dans l'espace ci-dessous pour les ajouter à votre garde-manger.
        </div>
      )}
      <div className={styles.ingredientsContainer}>
        {Object.entries(groupedIngredients).map(([groupId, ingredients]) => (
          <div key={groupId} className={styles.groupContainer}>
            <h3 className={styles.groupTitle}>
              {getGroupFrenchName(Number(groupId))}
            </h3>
            <div className={styles.groupIngredients}>
              {ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className={styles.ingredient}
                  style={{
                    backgroundColor: getIngredientBackgroundColor(
                      ingredient.group_id
                    ),
                  }}
                >
                  <div>{ingredient.nom}</div>
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(ingredient.id)}
                  >
                    Supprimer
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to get the background color based on group_id
const getIngredientBackgroundColor = (groupId) => {
  switch (groupId) {
    case 1:
      return "#ced2ba"; // Reddish color for "Pains"
    case 2:
      return "#f9ddcf"; // Orange color for "Riz"
    case 3:
      return "#ffe4b5"; // Yellowish color for "Pâtes"
    case 4:
      return "#eabcac"; // Light yellow for "Fruits"
    case 5:
      return "#98FB98"; // Light green for "Légumes"
    case 6:
      return "#dcb6af"; // Lavender color for "Légumineuses"
    case 7:
      return "#f5f5dc"; // Beige color for "Noix et graines"
    case 8:
      return "#e0ffff"; // Light blue for "Produits laitiers"
    case 9:
      return "peachpuff"; // Light gray for "Sauces et condiments"
    case 10:
      return "lavenderblush"; // Azure color for "Soupes"
    case 11:
      return "rosybrown"; // White smoke color for "Huiles, vinaigres et sirops"
    case 12:
      return "oldlace"; // Ghost white color for "Desserts"
    case 13:
      return "#d0ba98"; // Alice blue color for "Garnitures"
    case 14:
      return "#fff5e6"; // Vanilla color for "Herbes et épices"
    default:
      return "#bdffca"; // Default color
  }
};

export default MonGardeManger;
