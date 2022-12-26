import styles from "./styles.module.scss";

export default function InspiredBy({ picture, text, name }) {
  return (
    <article className={styles.inspiredBy}>
      <img src={picture} alt="Saepul Nahwan" className={styles.inspiredBy__picture} />
      <p className={styles.inspiredBy__text}> {text} </p>
      <a href="https://www.uplabs.com/posts/pokedex-app" className={styles.inspiredBy__link}>
        <p className={styles.inspiredBy__name}>{name} </p>
      </a>
    </article>
  );
}
