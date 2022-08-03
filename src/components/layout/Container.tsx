import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    height: 100%;
    @media (min-width: 1024px) {
        width: ${(8 / 12) * 100}%;
        height: 32rem;
        justify-content: space-evenly;
    }
    border: 0.5rem solid #fcd34d;
    
    /* background effect trick */
    &:after {
        position: absolute;
        left: 0;
        top: 0;
        background-image: url('/28.jpg');
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        filter: sepia(100%) brightness(25%);
        content: "";
        z-index: 0;
    }
    > * {
        z-index: 1;
    }
`;
