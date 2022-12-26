import GlobalSvg from "@atoms/GlobalSvg";
import styles from "./styles.module.scss";

export default function AuthorsMolecule({
  picture,
  name,
  job,
  linkedinLink,
  githubLink,
}) {
  return (
    <>
      {job === "Front End Developer" ? (
        <div className={styles.authors}>
          <img src={picture} alt={name} className={styles.authors__picture} />

          <p className={styles.authors__name}> {name} </p>
          <p className={styles.authors__job}>{job} </p>

          <div className={styles.authors__socialMedia}>
            <GlobalSvg
              href={linkedinLink}
              external
              alt="LinkedIn Logo"
              iconPath="/assets/images/svg/LinkedinLogo.svg"
            />
            <GlobalSvg
              href={githubLink}
              external
              alt="GitHub Logo"
              iconPath="/assets/images/svg/GithubLogo.svg"
            />
          </div>
        </div>
      ) : (
        <div className={styles.inspiredBy}>
          <p className={styles.inspiredBy__text}> Design inspired by: </p>
          <img src={picture} alt={name} className={styles.authors__picture} />

          <p className={styles.inspiredBy__name}>{name} </p>
          <a
            href="https://www.uplabs.com/posts/pokedex-app"
            className={styles.inspiredBy__link}
          ></a>
          <div className={styles.authors__socialMedia}>
            <GlobalSvg
              href={githubLink}
              external
              alt="Figma Logo"
              iconPath="/assets/images/svg/FigmaLogo.svg"
            />
            <GlobalSvg
              href={linkedinLink}
              external
              alt="Designer's website"
              iconPath="/assets/images/svg/Briefcase.svg"
            />
          </div>
        </div>
      )}
    </>
  );
}
