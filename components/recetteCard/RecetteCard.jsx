// RecipeCard.js

import React from "react";
import styles from "./recetteCard.module.css";

const RecetteCard = ({
  id,
  image,
  nom,
  description,
  type,
  temps,
  difficulte,
  cuisine,
}) => {
  return (
    <div className={styles.recipeCard}>
      <img src={image} alt={nom} className={styles.image} />
      <div className={styles.details}>
        <h2 className={styles.nom}>{nom}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          <div className={styles.type}>
            <p className={styles.tagTitle}>Type de plat</p>
            <p className={styles.tag}>{type}</p>
          </div>
          <div className={styles.temps}>
            <p className={styles.tagTitle}>Temps de préparation</p>
            <p className={styles.tag}>{temps}</p>
          </div>
          <div className={styles.difficulte}>
            <p className={styles.tagTitle}>Difficulté</p>
            <p className={styles.tag}>{difficulte}</p>
          </div>
          <div className={styles.cuisine}>
            <p className={styles.tagTitle}>Type de cuisine</p>
            <p className={styles.tag}>{cuisine}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecetteCard;
