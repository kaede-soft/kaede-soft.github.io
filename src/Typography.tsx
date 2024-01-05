import * as React from "react";
import "./fonts/expletus/stylesheet.css"
import "./fonts/Jost/jost.css"
import styles from "./Typography.module.css";
import { nStyles } from "./styles";

export type FontColour = 'dark' | 'light' | 'highlighted'

export type FontSize = 'extra-small'
    | 'small'
    | 'medium'
    | 'large'
    | 'extra-large'

export type FontWeight = 'light' 
    | 'medium' 
    | 'med-bold' 
    | 'bold'

const getFontColour = (colour: FontColour) => {
    switch (colour) {
        case 'dark': return styles.col_dark
        case 'light': return styles.col_light
        case 'highlighted': return styles.col_highlighted
    }
}

const getFontSize = (size: FontSize) => {
    switch (size) {
        case 'extra-small': return '0.5rem'
        case 'small': return '0.7rem'
        case 'medium': return '1.2rem'
        case 'large': return '2.0rem'
        case 'extra-large': return '3.0rem'
    }
}

const getFontWeight = (weight: FontWeight) => {
    switch (weight) {
        case 'light': return '300'
        case 'medium': return '400'
        case 'med-bold': return '500'
        case 'bold': return '700'
    }
}

export const Expletus: React.FC<{
    text: string, 
    size?: FontSize, 
    colour?: FontColour,
    isLink?: boolean
}> = ({text, size='medium', colour='dark', isLink=false}) => 
    <span 
        className={getFontColour(colour)} 
        style={{
            fontFamily: `expletus_sansregular`,
            fontStyle: `normal`,
            fontWeight: `normal`,
            fontSize: `${getFontSize(size)}`,
            pointerEvents: `${isLink ? 'auto' : 'none'}`
        }}>{text}</span>

export const ExpletusHeading: React.FC<{
    text: string, 
    colour?: FontColour
    isLink?: boolean
}> = ({text, colour='dark', isLink=false}) => 
    <span 
        className={nStyles(getFontColour(colour), styles.heading)} 
        style={{
            fontFamily: `expletus_sansregular`,
            pointerEvents: `${isLink ? 'auto' : 'none'}`
        }}>{text}</span>

export const FutText: React.FC<{
    text: string, 
    size?: FontSize, 
    weight?: FontWeight,
    colour?: FontColour, 
    unimportant?: boolean,
    isLink?: boolean
}> = ({text, size='medium', colour='dark', weight='medium', isLink=false}) => 
    <span 
        className={getFontColour(colour)} 
        style={{
            fontFamily: `helvetica`,
            fontStyle: `sans-serif`,
            fontWeight: `${getFontWeight(weight)}`,
            fontSize: `${getFontSize(size)}`,
            lineHeight: `21px`,
            letterSpacing: `0.2rem`,
            textDecoration: 'none',
            pointerEvents: `${isLink ? 'auto' : 'none'}`
        }}>{text}</span>

// export const InterText: React.FC<{
//     text: string;
//     colour?: FontColour;
//     size?: FontSize,
//     weight?: FontWeight;
// }> = ({ text, colour='primary', size='medium', weight='medium'}) => (
//     <span
//         className={css`
//             font-family: 'Inter';
//             font-style: normal;
//             font-weight: ${getFontWeight(weight)};
//             font-size: ${getFontSize(size)};
//             line-height: 24px;
//             color: ${getFontColour(colour)};
//         `}
//     >
//         {text}
//     </span>
// );