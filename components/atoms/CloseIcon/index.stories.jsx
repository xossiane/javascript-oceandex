import CloseIcon from ".";

export default {
  title: "Atoms/Close",
  component: CloseIcon,
  args: {},
};

export const BlackClose = () => <CloseIcon />;
export const WhiteClose = () => <CloseIcon WhiteClose white="true" />;

