import styles from "./styles.module.scss";
import AuthorsMolecule from "@molecules/Authors";
import InspiredBy from "@atoms/InspiredBy";
import Heading from "@atoms/Heading";

export default function AuthorsPage() {
  return (
    
    <div className={styles.container}>
      <Heading level="1" size="H1" color="black" style="italic">
        {" "}
        Authors{" "}
      </Heading>
      <section className={styles.authorsPage}>
        <AuthorsMolecule
          picture="https://media.licdn.com/dms/image/C4D03AQFlehRIQxbKxQ/profile-displayphoto-shrink_200_200/0/1565819647932?e=1676505600&v=beta&t=Jo11ZQ6x9n4Frln-1VZN2-MeA_JuTGt9g2FBFf3C0w4"
          name="Elaine Mattje"
          job="Front End Developer"
          linkedinLink="https://www.linkedin.com/in/elaine-mattje-0a3385184/"
          githubLink="https://github.com/elainemattjevt"
        />

        <AuthorsMolecule
          picture="https://media.licdn.com/dms/image/C4D03AQHVUegrD9MY5g/profile-displayphoto-shrink_200_200/0/1663885453127?e=1676505600&v=beta&t=ZEm8XYv6I_cpzDaitvgGOr6xH4YVNneiL8LYX3xe5T4"
          name="Gabriela Bianchini "
          job="Front End Developer"
          linkedinLink="https://www.linkedin.com/in/gabriela-bianchini-044450187/"
          githubLink="https://github.com/Gabianchini"
        />

        <AuthorsMolecule
          picture="https://media.licdn.com/dms/image/C4D03AQEm7tnGCChoKw/profile-displayphoto-shrink_200_200/0/1653232460478?e=1676505600&v=beta&t=0gBKYIUcIaiA4I9YLYKPpZX4T_rTFJKWTe0Z12l4FmA"
          name="Josiane Lima"
          job="Front End Developer"
          linkedinLink="https://www.linkedin.com/in/josiane-lima-a38a61193/"
          githubLink="https://github.com/xossiane"
        />

        <AuthorsMolecule
          picture="https://media.licdn.com/dms/image/C4D03AQEFV4gxd0BOiw/profile-displayphoto-shrink_200_200/0/1660264344360?e=1676505600&v=beta&t=ovn_-ntBD8ymga7AZmmKQTNzImJDhbfuVMsPV_z9taY"
          name="Karoline Carvalho"
          job="Front End Developer"
          linkedinLink="https://www.linkedin.com/in/carvalhokaroline/"
          githubLink="https://github.com/KarolineCarvalho"
        />

        <AuthorsMolecule
          picture="https://media.licdn.com/dms/image/C4E03AQE-45my5f_pIQ/profile-displayphoto-shrink_800_800/0/1655749239204?e=1676505600&v=beta&t=ZxG6GlLGxBfkJZMDc6JzuOwhi4OcwplrIgEviY-xdro"
          name="Kelly Cesário"
          job="Front End Developer"
          linkedinLink="https://www.linkedin.com/in/kellycesario/"
          githubLink="https://github.com/kellycesario"
        />

        <AuthorsMolecule
          picture="https://media.licdn.com/dms/image/C4D03AQFq06nPpiPUSA/profile-displayphoto-shrink_200_200/0/1644786834902?e=1676505600&v=beta&t=75ucDhuXYKq8BNqC-Iy9XbzZRQbDI2cicV67W2ReHqQ"
          name="Matthew Nascimento"
          job="Front End Developer"
          linkedinLink="https://www.linkedin.com/in/matthew-nascimento-5753246a/"
          githubLink="https://github.com/xMattRx"
        />

        <AuthorsMolecule
          picture="https://media.licdn.com/dms/image/C4D03AQG5MjZZL60nJw/profile-displayphoto-shrink_200_200/0/1647013023939?e=1676505600&v=beta&t=ivxfSGn2st40E0JdRRW63ZObGjKYJ2tc8ICnJPgZFxA"
          name="Natanael Silva"
          job="Front End Developer"
          linkedinLink="https://www.linkedin.com/in/natanael-silvas/"
          githubLink="https://github.com/natanael-silv"
        />
      </section>
      <section>
        <InspiredBy
          Credits
          picture="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
          text="Design inspired by:"
          name="Saepul Nahwan"
        />
      </section>
    </div>
  );
}
