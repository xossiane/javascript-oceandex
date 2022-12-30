import AuthorsMolecule from ".";

export default {
  title: "Molecules/Authors",
  component: AuthorsMolecule,
  args: {},
};

export const Default = () => (
  <AuthorsMolecule
    name="Josiane Lima"
    picture="https://media.licdn.com/dms/image/C4D03AQEm7tnGCChoKw/profile-displayphoto-shrink_200_200/0/1653232460478?e=1677715200&v=beta&t=Ya2mOv8tmLV3B8eemqVoAUzORe4e9oJkhKHbWhW8d_E"
    job="Front End Developer"
  />
);

export const NoName = () => (
  <AuthorsMolecule
    picture="https://media.licdn.com/dms/image/C4D03AQEFV4gxd0BOiw/profile-displayphoto-shrink_200_200/0/1660264344360?e=1677715200&v=beta&t=mW_jHEWE0Y0m2S0xcz4mI4nAcJcF4jG3aV9QqEWNzqU"
    job="Front End Developer"
  />
);

export const NoPicture = () => (
  <AuthorsMolecule picture="" name="Kelly Cesário" job="Front End Developer" />
);
