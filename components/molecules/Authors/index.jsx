import styles from "./styles.module.scss";
import LinkedinIcon from "@atoms/LinkedinIcon";
import GithubIcon from "@atoms/GithubIcon";

export default function AuthorsMolecule({ picture, name, job, linkedinLink, githubLink}) {
  return (
    <article className={styles.authors}>
      <img src={picture} alt="" className={styles.authors__picture}/>
      <p className={styles.authors__name}> {name} </p>
      <p className={styles.authors__job}>{job} </p>
      <div className={styles.authors__socialMedia}>
        <LinkedinIcon href={linkedinLink}/>
        <GithubIcon href={githubLink}/>
      </div>
    </article>
  );
}
