
const shuttleGray = {
    lightest: '#CBCDD1',
    lighter: '#B1B4BA',
    light: '#989DA6',
    main: '#7E838F',
    dark: '#656A73',
    darker: '#4A4D54',
    darkest: '#313338',
    alt: '#E6E7E8',
};

const mystic = {
    lightest: '#F8FBFD',
    lighter: '#F3F6F8',
    light: '#EBF0F3',
    main: '#E1E9ED',
    dark: '#D1DDE3',
    darker: '#C1D1D9',
    darkest: '#B2C7D1',
    alt: shuttleGray.darker,
};

const ebonyClay = {
    lightest: '#7E838F',
    lighter: '#535B6B',
    light: '#3D4657',
    main: '#293245',
    dark: '#212938',
    darker: '#181E28',
    darkest: '#10141C',
    alt: white,
};

const persianGreen = {
    lightest: '#99E0D2',
    lighter: '#66D1BB',
    light: '#32C2A5',
    main: '#00B38F',
    dark: '#008F72',
    darker: '#006B55',
    darkest: '#004739',
    alt: white,
};

const royalPurple = {
    lightest: '#BCABEB',
    lighter: '#A088E3',
    light: '#8566D9',
    main: '#7856D7',
    dark: '#6044AB',
    darker: '#473380',
    darkest: '#2F2254',
    alt: white,
};

const yellow = {
    lightest: '#FFEAC1',
    lighter: '#FFE0A3',
    light: '#FFD684',
    main: '#FFCC66',
    dark: '#E5B75B',
    darker: '#B28E47',
    darkest: '#7F6532',
    alt: white,
};

const red = {
    lightest: '#E7A8B0',
    lighter: '#DB7D88',
    light: '#CF5261',
    main: '#C4273A',
    dark: '#A62131',
    darker: '#881B28',
    darkest: '#61131C',
    alt: white,
};

export const palette = {
    background: white,
    primary: persianGreen,
    secondary: ebonyClay,
    accent: royalPurple,
    neutral: mystic,
    grey: shuttleGray,
    success: persianGreen,
    info: mystic,
    warning: yellow,
    danger: red,
};

export const typography = {
    fontSize: 14,
    fontFamily: '"Glober", sans-serif',
    fontWeight: 400,
    fontWeightBolder: 500,
};

export default {
    palette,
    typography,

    ignite: {
        fontWeightBoldest: 600,
        colorPoints: '#FFCC66',
    },
    label: {
        fontSize: '0.9em',
        color: shuttleGray.main
    },
    button: {
        paddingY: 8,
        paddingX: 12,
        // borderWidth: 2,
    },
    form: {
        padding: {
            horizontal: '1em',
            vertical: '0.6em'
        },
        borderWidth: 1
    },
    panel: {
        padding: 20
    },
    round: 3,
    mq: {
        sm: '@media screen and (min-width: 35.5em)',
        md: '@media screen and (min-width: 48em)',
        lg: '@media screen and (min-width: 64em)',
        xl: '@media screen and (min-width: 80em)',
    }
};
