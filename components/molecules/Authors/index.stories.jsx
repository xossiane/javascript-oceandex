import AuthorsMolecule from ".";

export default {
  title: "Molecules/Authors",
  component: AuthorsMolecule,
  args: {},
};

export const Elaine = () => (
  <AuthorsMolecule
    Elaine
    picture="https://media.licdn.com/dms/image/C4D03AQFlehRIQxbKxQ/profile-displayphoto-shrink_200_200/0/1565819647932?e=1676505600&v=beta&t=Jo11ZQ6x9n4Frln-1VZN2-MeA_JuTGt9g2FBFf3C0w4"
    name="Elaine Mattje"
  />
);

export const Gabriela = () => (
  <AuthorsMolecule
    Gabriela
    picture="https://media.licdn.com/dms/image/C4D03AQHVUegrD9MY5g/profile-displayphoto-shrink_200_200/0/1663885453127?e=1676505600&v=beta&t=ZEm8XYv6I_cpzDaitvgGOr6xH4YVNneiL8LYX3xe5T4"
    job="Front End Developer"
  />
);

export const Josiane = () => (
  <AuthorsMolecule
    Josiane
    picture=""
    name="Josiane Lima"
    job="Front End Developer"
  />
);
