import styles from "./styles.module.scss";
import AuthorsMolecule from "@molecules/Authors";
import InspiredBy from "@atoms/InspiredBy";
import Heading from "@atoms/Heading";
import useContentful from "../../hooks/useContentful";
import { useEffect, useState } from "react";

export default function AuthorsPage() {
  const { getAuthors } = useContentful();
  const [loading, setLoading] = useState();
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    async function fetchAuthors() {
      const response = await getAuthors();
      setAuthors(response);
    }
    fetchAuthors();
  }, []);

  return (
    <div className={styles.container}>
      <Heading level="1" size="H1" color="black" style="italic">
        Authors
      </Heading>

      <section className={styles.authorsPage}>
        {authors.map((author) => {
          if (author.job === "Front End Developer")
            return (
              <AuthorsMolecule
                key={author.id}
                picture={author.photo}
                name={author.name}
                job={author.job}
                linkedinLink={author.linkedIn}
                githubLink={author.gitHub}
              />
            );
        })}
      </section>

      <section>
        {authors.map((author) => {
          if (author.job !== "Front End Developer")
            return (
              <AuthorsMolecule
                key={author.id}
                picture={author.photo}
                name={author.name}
                job={author.job}
                linkedinLink={author.linkedIn}
                githubLink={author.gitHub}
              />
            );
        })}
      </section>
    </div>
  );
}
