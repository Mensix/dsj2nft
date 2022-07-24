import styled from "styled-components";

export const ColorPicker = styled.input.attrs({ type: "color" })`
    -webkit-appearance: none;
    border: none;
    padding: 0;
    width: 1rem;
    height: 1rem;
    &::-webkit-color-swatch {
        border: none;
    }
    &::-webkit-color-swatch-wrapper {
        padding: 0;
    }
`;