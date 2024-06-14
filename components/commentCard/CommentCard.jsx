import React from "react";
import styles from "./commentCard.module.css";

const CommentCard = ({ comment }) => {
  const { username, rating, text } = comment;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.username}>{username}</div>
        <div className={styles.rating}>Note: {rating}</div>
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default CommentCard;
