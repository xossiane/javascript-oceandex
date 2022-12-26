import GlobalSvg from "@atoms/GlobalSvg";
import styles from "./styles.module.scss";

export default function InspiredBy({
  picture,
  text,
  name,
  linkedinLink,
  githubLink,
}) {
  return (
    <article className={styles.inspiredBy}>
      <img src={picture} alt={name} className={styles.inspiredBy__picture} />
      <p className={styles.inspiredBy__text}> {text} </p>
      <p className={styles.inspiredBy__name}>{name} </p>
      <a
        href="https://www.uplabs.com/posts/pokedex-app"
        className={styles.inspiredBy__link}
      ></a>
      <div className={styles.authors__socialMedia}>
        <GlobalSvg
          href={linkedinLink}
          external
          iconPath="/assets/images/svg/LinkedinLogo.svg"
        />
        <GlobalSvg
          href={githubLink}
          external
          iconPath="/assets/images/svg/GithubLogo.svg"
        />
      </div>
    </article>
  );
}
