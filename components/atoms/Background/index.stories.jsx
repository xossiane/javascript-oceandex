import Background from ".";
import backgroundMobile from "../../../public/assets/images/extras/background.png";
import backgroundDesktop from "../../../public/assets/images/extras/backgroundLarge2.png";

export default {
  title: "Atoms/Background",
  component: Background,
  args: {},
};

export const Mobile = () => <img src={backgroundMobile} alt="" />;

export const Desktop = () => (
  <img src={backgroundDesktop} alt="" style={{ opacity: 0.2 }} />
);
