"use client";
import React, { useState } from "react";
import styles from "./comment.module.css";

const Comment = ({ onCommentSubmit }) => {
  const [username, setUsername] = useState("");
  const [text, setComment] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the callback function with the comment data
    onCommentSubmit({ username, text, rating });
    // Reset the input fields after submission
    setUsername("");
    setComment("");
    setRating(1);
  };

  return (
    <div>
      <h2 className={styles.title}>Ajouter un commentaire!</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label className={styles.label} htmlFor="username">
            Nom:
          </label>
          <input
            type="text"
            id="username"
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="text">
            Commentaire:
          </label>
          <textarea
            id="text"
            className={styles.input}
            value={text}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>
        <div className={styles.selectContainer}>
          <label className={styles.label} htmlFor="rating">
            Note:
          </label>
          <select
            className={styles.select}
            id="rating"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Comment;
