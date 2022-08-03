
export interface JumperProps {
    background: string,
    helmet: string,
    suit: string
    sleeves: string
    gloves: string
    trousers: string
    skis: string
}

export const Jumper = ({ background, helmet, suit, sleeves, gloves, trousers, skis }: JumperProps) => {
    return (
        <svg width="272" height="272" viewBox="0 0 272 272" fill="none" xmlns="http://www.w3.org/2000/svg" id="jumper">
            <rect x="8" y="8" width="256" height="256" rx="128" fill={background} />
            <circle cx="136" cy="136" r="132" stroke="#FBBF24" stroke-width="8" />
            <path d="M162.711 95H202.316V100.51H185.737V105.102H162.711V95Z" fill="black" />
            <path d="M213.368 110.612V120.714H203.237V125.306H175.605V129.898H158.105V119.796H163.632V115.204H191.263V110.612H213.368Z" fill="black" />
            <path d="M235.474 95H224.421V100.51H213.368V105.102H218.895V110.612H224.421V115.204H234.553V110.612H241V100.51H235.474V95Z" fill="black" />
            <path d="M185.737 135.408H168.237V129.898H175.605V125.306H203.237V120.714H213.368L213.368 115.204H234.553V110.612H241V125.306H213.368V129.898H185.737V135.408Z" fill="black" />
            <path d="M53.1053 154.694H31V144.592H64.1579V140H91.7895V135.408H107.447V144.592H102.842V150.102H91.7895V154.694H124.947V160.204H141.526V164.796H163.632V169.388H191.263V174.898H207.842V169.388H218.895V179.49H213.368V185H180.211V179.49H152.579V174.898H130.474V169.388H101.921V164.796H80.7368V160.204H53.1053V154.694Z" fill="black" />
            <path d="M119.421 135.408H107.447V144.592L112.974 144.592V149.184H107.447V154.694H136V150.102H153.5V144.592H159.026V140H163.632V135.408H168.237V129.898L147.053 129.898V119.796H141.526V125.306H130.474V129.898H119.421V135.408Z" fill="black" />
            <path d="M151.658 119.796V114.286H157.184V109.694H162.711L162.711 105.102L169.158 105.102V110.612H163.632L163.632 119.796H158.105L151.658 119.796Z" fill="black" />
            <path d="M163.632 110.612L163.632 115.204H191.263V110.612H213.368L213.368 115.204H224.421V110.612H218.895V105.102H213.368V100.51L185.737 100.51V105.102L169.158 105.102V110.612H163.632Z" fill="black" />
            <path d="M147.053 119.796L158.105 119.796V129.898L147.053 129.898V119.796Z" fill="black" />
            <path d="M152.579 95H162.711V105.102H152.579V95Z" fill="black" />
            <path d="M162.711 91H202.316V96.5102H185.737V101.102H162.711V91Z" fill={sleeves} />
            <path d="M213.368 106.612V116.714H203.237V121.306H175.605V125.898H158.105V115.796H163.632V111.204H191.263V106.612H213.368Z" fill={sleeves} />
            <path d="M235.474 91H224.421V96.5102H213.368V101.102H218.895V106.612H224.421V111.204H234.553V106.612H241V96.5102H235.474V91Z" fill={helmet} />
            <path d="M185.737 131.408H168.237V125.898H175.605V121.306H203.237V116.714H213.368V111.204H234.553V106.612H241V121.306H213.368V125.898H185.737V131.408Z" fill={skis} />
            <path d="M53.1053 150.694H31V140.592H64.1579V136H91.7895V131.408H107.447V140.592H102.842V146.102H91.7895V150.694H124.947V156.204H141.526V160.796H163.632V165.388H191.263V170.898H207.842V165.388H218.895V175.49H213.368V181H180.211V175.49H152.579V170.898H130.474V165.388H101.921V160.796H80.7368V156.204H53.1053V150.694Z" fill="#BEF264" />
            <path d="M119.421 131.408H107.447V140.592H112.974V145.184H107.447V150.694H136V146.102H153.5V140.592H159.026V136H163.632V131.408H168.237V125.898H147.053V115.796H141.526V121.306H130.474V125.898H119.421V131.408Z" fill={trousers} />
            <path d="M151.658 115.796V110.286H157.184V105.694H162.711V101.102H169.158V106.612H163.632V115.796H158.105H151.658Z" fill={trousers} />
            <path d="M163.632 106.612V111.204H191.263V106.612H213.368V111.204H224.421V106.612H218.895V101.102H213.368V96.5102H185.737V101.102H169.158V106.612H163.632Z" fill="#FAFAFA" />
            <path d="M147.053 115.796H158.105V125.898H147.053V115.796Z" fill={gloves} />
            <path d="M152.579 91H162.711V101.102H152.579V91Z" fill={gloves} />
        </svg>
    )
}