"use client";
import React, { useState } from "react";
import RecetteDetails from "../../../components/recetteDetails/RecetteDetails";
import recipes from "../../../model/recipe-data.json";
import Comment from "../../../components/comment/Comment";
import CommentCard from "../../../components/commentCard/CommentCard"; // Import the CommentCard component
import styles from "./recettePage.module.css";

const RecettePage = ({ params }) => {
  const id = params.id;

  // Find the recipe based on the id from the URL
  const [recipe, setRecipe] = useState(
    recipes.find((recipe) => recipe.id === parseInt(id))
  );

  // Function to handle submission of comment
  const handleCommentSubmit = (commentData) => {
    // Update the recipe object with the new comment
    const updatedRecipe = { ...recipe };
    updatedRecipe.comments.push(commentData); // Assuming 'comments' is an array property in the recipe object
    setRecipe(updatedRecipe);
  };

  return (
    <div className="container">
      {recipe ? (
        <>
          <RecetteDetails recipe={recipe} />
          <Comment onCommentSubmit={handleCommentSubmit} />
          {/* Display comments */}
          {recipe.comments && recipe.comments.length > 0 ? (
            <div className={styles.commentContainer}>
              <h2 className={styles.title}>Commentaires:</h2>
              {recipe.comments.map((comment, index) => (
                <CommentCard
                  key={index}
                  comment={comment}
                  className={styles.card}
                />
              ))}
            </div>
          ) : (
            <div className={styles.aucun}>
              Soyez le premier à laisser un commentaire.
            </div>
          )}
        </>
      ) : (
        <div>Recipe not found</div>
      )}
    </div>
  );
};

export default RecettePage;
