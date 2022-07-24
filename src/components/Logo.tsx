import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-self: flex-start;
    flex-direction: column;
    align-items: center;
    color: #fcd34d;
    font-family: 'Serpentine';
    font-weight: 700;
    white-space: nowrap;
`

const SubContainer = styled.div`
    display: flex;
    align-items: baseline;
    line-height: 1.25rem;
`;

const Label = styled.span`
    font-size: 1.5rem;
    letter-spacing: 0.75em;
    margin-right: -1.5rem;
`;

const RegularLetter = styled.span`
    position: relative;
    font-size: 3rem;
    &:before {
        content: "";
        position: absolute;
        width: 100%;
        bottom: 2rem;
        left: 0;
        height: 0.25rem;
        background-color:#fcd34d;
    }
`;


const LargeLetter = styled.span`
    font-size: 6rem;
`;

const SmallLetter = styled.span`
    font-size: 1rem;
    margin-left: -1.5rem;
`;

export const Logo = () => {
    return (
        <Container>
            <Label>Deluxe</Label>
            <SubContainer>
                <LargeLetter>S</LargeLetter>
                <RegularLetter>KI JUM</RegularLetter>
                <LargeLetter>P</LargeLetter>
                <SmallLetter>2</SmallLetter>
            </SubContainer>
        </Container>
    )
}