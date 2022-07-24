import { FocusEventHandler, ChangeEventHandler } from "react";
import styled from "styled-components";
import { ColorPicker } from "./ColorPicker";
import { Text } from "./Text";

export const ItemContainer = styled.li`
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    margin-bottom: 0.25rem;
`;

interface ItemProps {
    label: string;
    onChange: ChangeEventHandler<HTMLInputElement>
    onBlur: FocusEventHandler<HTMLInputElement>
    value: string;
}
export const Item = ({ label, onBlur, onChange, value }: ItemProps) => {
    return (
        <ItemContainer>
            <Text fixed secondary>{label}</Text>
            <ColorPicker onChange={(e) => onChange(e)} onBlur={() => onBlur} value={value} />
        </ItemContainer>
    )
}
