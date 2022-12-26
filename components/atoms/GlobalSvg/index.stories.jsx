import GlobalSvg from ".";

export default {
  title: "Atoms/GlobalSvg",
  component: GlobalSvg,
  args: {},
};

export const Github = () => {
  <GlobalSvg
    Github
    href="https://github.com/"
    external
    color="black"
    iconPath="/assets/images/svg/GithubLogo.svg"
  />;
};

export const Linkedin = () => {
  <GlobalSvg
    Linkedin
    href="https://www.linkedin.com/"
    external
    iconPath="public/assets/images/svg/LinkedinLogo.svg"
  />;
};

export const Instagram = () => {
  <GlobalSvg
    Instagram
    href="https://www.instagram.com/"
    external
    iconPath="public/assets/images/svg/InstagramLogo.svg"
  />;
};

export const Menu = () => {
  <GlobalSvg
    Menu
    iconPath="public/assets/images/svg/Hamburger.svg"
  />;
};

export const Close = () => {
  <GlobalSvg
    Close
    iconPath="public/assets/images/svg/Close.svg"
  />;
};

export const Search = () => {
  <GlobalSvg
    Search
    iconPath="public/assets/images/svg/SearchIcon.svg"
  />;
};
