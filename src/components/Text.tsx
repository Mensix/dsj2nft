import { MouseEventHandler } from "react";
import styled, { css } from "styled-components";

type TextProps = {
    fixed?: boolean;
    secondary?: boolean;
    fixedMargin?: boolean;
    clickable?: boolean;
    download?: boolean;
    href?: string;
    onClick?: MouseEventHandler<HTMLSpanElement>
}
export const Text = styled.span<TextProps>`
    color: ${props => props.secondary ? "#22d3ee" : "#fcd34d"};
    font-family: 'LevelUp ☞';
    text-transform: uppercase;
    font-size: 1.25rem;
    ${props => props.fixedMargin && css`margin-left: -4rem;`}
    ${props => props.fixed && css`width: 12rem;`}
    ${props => props.clickable && css`cursor: pointer;`}
`;