import Background from '.'

export default {
    title: "Atoms/Background",
    component: Background,
    args: {}
}

export const Mobile = () => <Background mobile />;

export const Desktop = () => <Background desktop />;
