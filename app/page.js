import Image from "next/image";
import styles from "./home.module.css";
import Circle from "@/components/circle/Circle";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.title}>
        Vous n'avez pas envie d'aller au magasin ce soir ? Nous avons ce qu'il
        vous faut!{" "}
      </div>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          Mon Garde-Manger Vert est un site web conçu pour vous aider à créer
          des repas délicieux avec les ingrédients que vous avez déjà à la
          maison, vous faisant ainsi gagner du temps et de l'argent.
        </p>
        <div className={styles.circleContainer}>
          <Circle
            img="./parsley.png"
            text="Créez des recettes en utilisant les ingrédients que vous avez sous la main."
          />
          <Circle
            img="./questionmark.png"
            text="Nous pouvons vous aider à répondre à la question : 'Que puis-je faire avec...?'"
          />
          <Circle
            img="./dollar.png"
            text="Sauvez du temps et profitez des produits de saison et des articles en promotion."
          />
          <Circle
            img="./recipe.png"
            text="Recherchez des recettes adaptées à votre profil alimentaire."
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Link href={"/recettes"}>
          <button className={styles.button}>Rechercher des recettes</button>
        </Link>
        <Link href={"/garde-manger"}>
          <button className={styles.button}>
            Remplir votre garde-manger virtuel
          </button>
        </Link>
      </div>
    </div>
  );
}
