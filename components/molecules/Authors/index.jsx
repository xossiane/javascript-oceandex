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
      {job === "Designer" ? (
        <article className={styles[`inspiredBy`]}>
          <p className={styles[`inspiredBy__text`]}>Design Inspired By:</p>
          <img
            src={picture}
            alt={name}
            className={styles[`authors__picture`]}
            loading="lazy"
          />
          <p className={styles[`inspiredBy__name`]}> {name} </p>
          <p className={styles[`inspiredBy__text`]}>{job} </p>
          <div className={styles[`authors__socialMedia`]}>
            <GlobalSvg
              href={githubLink}
              tabIndex={"0"}
              alt={"Redirect to author's Figma"}
              external
              iconPath="/assets/images/svg/FigmaLogo.svg"
            />
            <GlobalSvg
              href={linkedinLink}
              tabIndex={"0"}
              alt={"Redirect to author's website"}
              external
              iconPath="/assets/images/svg/Briefcase.svg"
            />
          </div>
        </article>
      ) : (
        <article className={styles[`authors`]}>
          <img
            src={picture}
            alt={name}
            className={styles[`authors__picture`]}
            loading="lazy"
          />
          <p className={styles[`authors__name`]}> {name} </p>
          <p className={styles[`authors__job`]}>{job} </p>
          <div className={styles[`authors__socialMedia`]}>
            <GlobalSvg
              href={linkedinLink}
              tabIndex={"0"}
              alt={"Redirect to author's Linkedin"}
              external
              iconPath="/assets/images/svg/LinkedinLogo.svg"
            />
            <GlobalSvg
              href={githubLink}
              tabIndex={"0"}
              alt={"Redirect to author's Github"}
              external
              iconPath="/assets/images/svg/GithubLogo.svg"
            />
          </div>
        </article>
      )}
    </>
  );
}
