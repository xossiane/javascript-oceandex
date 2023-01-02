import GlobalSvg from ".";
import menuIcon from '../../../public/assets/svg/icons/Menu.svg';
import closeIcon from '../../../public/assets/svg/icons/Close.svg';
import searchIcon from '../../../public/assets/svg/icons/SearchIcon.svg';
import instagramLogo from '../../../public/assets/svg/icons/InstagramLogo.svg';
import linkedinLogo from '../../../public/assets/svg/icons/LinkedinLogo.svg';
import githubLogo from '../../../public/assets/svg/icons/GithubLogo.svg';
import figmaLogo from '../../../public/assets/svg/icons/FigmaLogo.svg';

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