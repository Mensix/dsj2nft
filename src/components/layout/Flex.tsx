import styled, { css } from "styled-components";

type FlexProps = { 
    direction?: 'column' | 'row'
    responsive?: boolean
}
export const Flex = styled.div<FlexProps>`
    display: flex;
    width: 100%;
    height: auto;
    align-items: center;
    ${props => props.responsive && css`
        flex-direction: column-reverse;
        justify-content: center;
        @media (min-width: 1024px) {
            flex-direction: ${props.direction || 'row'};
            justify-content: space-between;
        }
    `}
`;