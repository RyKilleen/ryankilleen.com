import { css, styled } from "../../theme/stitches.config";

export const defaultStyles = css({
    marginTop: 0,
    marginBottom: 0
})

export const headings = css(defaultStyles, {
    color: '$foreground',
    fontFamily: '$heading',
    variants: {
        size: {
            large: {
                fontSize: "3.5rem",
                fontWeight: 250
            },
            medium: {
                fontSize: "2.2rem",
                fontWeight: "700",
            },
            small: {
                fontSize: "1.2rem",
                fontWeight: "700",
            },
        },
    },
});

export const content = css({
    color: "$foreground",
    variants: {
        size: {
            small: {
                fontSize: '1.5rem'
            },
            large: {
                fontSize: '1.5rem'
            }
        }
    }
})


export const H1 = styled('h1', headings, {
    defaultVariants: {
        size: "large"
    }
})
export const H2 = styled('h2', headings, {
    defaultVariants: {
        size: "medium"
    }
})
export const H3 = styled('h3', headings, {
    defaultVariants: {
        size: "small"
    }
})
export const H4 = styled('h4', headings, {
    defaultVariants: {
        size: "small"
    }
})
export const H5 = styled('h5', headings, {
    defaultVariants: {
        size: "small"
    }
})
export const H6 = styled('h6', headings, {
    defaultVariants: {
        size: "small"
    }
})