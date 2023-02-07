import { styled } from "~/theme/stitches.config";
import { content } from "./typography";


export const Pill = styled('span', content, {

    textDecoration: 'none',
    display: "inline-block",
    border: "1px solid",
    borderRadius: "8px",
    padding: "0.5rem 1rem",
    ':hover': {
    }
})

