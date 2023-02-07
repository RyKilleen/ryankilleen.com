import { createStitches, } from '@stitches/react';
import type { ConfigType } from '@stitches/react/types/config';

const sharedTheme: ConfigType.Theme = {
    fonts: {
        heading: "Inter, sans-serif",
        body: "Inter, sans-serif"
    },
    space: {

    },
    zIndices: {
        nav: 1
    }

}

const darkTheme = {
    ...sharedTheme,
    colors: {
        foreground: '#ffffff',
        background: '#07191d',
        active: "orange"
    },
}


export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: darkTheme
});

export const globalStyles = globalCss({
    '*': {
        boxSizing: 'inherit'
    },
    'html, body': {
        color: '$foreground',
        boxSizing: 'border-box',
        fontSize: '18px',
        fontFamily: '$body',
        backgroundColor: '$background',
    },
    'a': {
        color: '$foreground',
        ':visited': {
            color: '$foreground',
        }
    }
})
