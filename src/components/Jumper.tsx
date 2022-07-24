
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