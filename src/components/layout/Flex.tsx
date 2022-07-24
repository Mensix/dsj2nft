import styled from "styled-components";

type FlexProps = { 
    direction?: 'column' | 'row'
}
export const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: space-between;
    width: 100%;
    height: auto;
    align-items: center;
`;