import GlobalSvg from ".";
import menuIcon from '../../../public/assets/images/svg/Hamburger.svg';
import closeIcon from '../../../public/assets/images/svg/Close.svg';
import searchIcon from '../../../public/assets/images/svg/SearchIcon.svg';
import instagramLogo from '../../../public/assets/images/svg/InstagramLogo.svg';
import linkedinLogo from '../../../public/assets/images/svg/LinkedinLogo.svg';
import githubLogo from '../../../public/assets/images/svg/GithubLogo.svg';
import figmaLogo from '../../../public/assets/images/svg/FigmaLogo.svg';

export default {
  title: "Atoms/GlobalSvg",
  component: GlobalSvg,
  args: {},
};

export const MenuIcon = () => (
  <GlobalSvg
    iconPath={menuIcon}
  />
);

export const CloseIcon = () => (
  <GlobalSvg
    iconPath={closeIcon}
  />
);

export const SearchIcon = () => (
  <GlobalSvg
    iconPath={searchIcon}
  />
);

export const InstagramLogo = () => (
  <GlobalSvg
    iconPath={instagramLogo}
    external
    href="https://instagram.com/"
  />
);

export const LinkedinLogo = () => (
  <GlobalSvg
    iconPath={linkedinLogo}
    external
    href="https://linkedin.com/"
  />
);

export const GithubLogo = () => (
  <GlobalSvg
    iconPath={githubLogo}
    external
    href="https://github.com/"
  />
);

export const FigmaLogo = () => (
  <GlobalSvg
    iconPath={figmaLogo}
    external
    href="https://www.figma.com/"
  />
);