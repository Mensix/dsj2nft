import { Canvg } from 'canvg'
import { useState } from "react"
import styled from "styled-components"
import { Item } from "../Item"
import { Jumper, JumperProps } from "../Jumper"
import { Text } from "../Text"
import { Flex } from "./Flex"

const ContentContainer = styled.main`
    padding: 0 6rem;
`;

interface Outfit {
    background: OutfitData;
    helmet:     OutfitData;
    suit:       OutfitData;
    sleeves:    OutfitData;
    gloves:     OutfitData;
    trousers:   OutfitData;
    skis:       OutfitData;
}

export interface OutfitData {
    value: string;
    label: string;
}


export const Content = () => {
    const [outfit, setOutfit] = useState<Outfit>({
        background: { value: "#e0f2fe", label: 'Tlo' },
        helmet: { value: "#111827", label: 'Kask' },
        suit: { value: "#FAFAFA", label: 'Kombinezon' },
        sleeves: { value: "#1E40AF", label: 'Rekawy' },
        gloves: { value: "#111827", label: 'Rekawice' },
        trousers: { value: "#1E3A8A", label: 'Spodnie' },
        skis: { value: "#BEF264", label: 'Narty' }
    })

    const getOutfitProps = () => {
        const keys = Object.keys(outfit)
        const values = Object.values(outfit).map(x => x.value)
        const zipped = keys.map((key, index) => ({ key, value: values[index] }))
        return zipped.reduce((acc, curr) => ({ ...acc, [curr.key]: curr.value }), {}) as JumperProps;
    }

    const handleChange = (key: string, value: string) => {
        setOutfit({ ...outfit, [key]: { value, label: key } })
    }

    const [img, setImg] = useState("");
    const generatePng = () => {
        let v = null;
        let canvas = document.querySelector("#canvas") as HTMLCanvasElement;
        let ctx = canvas.getContext("2d")!;

        v = Canvg.fromString(ctx, (document.querySelector("#jumper")!.outerHTML));
        v.start()
        setImg(canvas.toDataURL("img/png", 1.0));
    }

    return (
        <ContentContainer>
            <Text fixedMargin>Edycja skoczka</Text>
            <Flex>
                <ul>
                    {Object.entries(outfit).map(([key, value]) => (
                        <Item key={key} label={value.label} value={value.value} onChange={(e) => handleChange(key, e.target.value)} onBlur={() => generatePng} />
                    ))}
                    <div style={{ height: '23px' }} />
                    <Text clickable onClick={() => generatePng()} as="a" download href={img!}>Pobierz</Text>
                </ul>
                <Jumper {...getOutfitProps()} />
            </Flex>
        </ContentContainer>
    )
}