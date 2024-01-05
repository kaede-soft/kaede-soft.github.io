import React from 'react';
import "./fonts/expletus/stylesheet.css"

type logosize = 'mobile' | 'normal'

const getSize = (size: logosize) =>
{
    switch (size){
        case 'mobile': return { w: 300, h: 55}
        case 'normal': return { w: 605, h: 107}
    }
}

const LogoLight: React.FC<{}> = ({}) => {

  return <svg width="100%" version="1.1" viewBox="0 0 160 29" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
            <linearGradient id="linearGradient11" x1="17.975" x2="44.51" y1="128.74" y2="128.74" gradientTransform="translate(-17.975 -114.08)" gradientUnits="userSpaceOnUse">
                <stop stop-color="#d20000" offset="0"/>
                <stop stop-color="#ff8d2d" offset="1"/>
            </linearGradient>
        </defs>
        <text x="6.094377" y="22.662077" fill="#32323c" font-family="'expletus_sansregular'" font-size="22.578px" stroke-width=".26458" xmlSpace="preserve"><tspan x="6.094377" y="22.662077" fill="#32323c" stroke-width=".26458">K a e d e S o f t</tspan></text>
        <path d="m7.6183 0.52926c-0.36838 0.0111-0.66275 0.97142-1.5828 3.1807-0.21781 0.52298-2.1788-0.28036-2.4355-0.10852-0.92549 2.6434 1.5008 6.8241 2.5146 9.1131 3e-3 0.0428-2.6213-2.2434-4.6896-1.68-0.1285 0.54769 0.58937 1.4918 0.09922 2.0092-1.8133 0.99773-2.2115 0.41484-0.07596 2.5983 0.1489 0.82813-0.9303 1.256-0.77876 1.663 0.65906 0.76677 2.8094 0.60848 4.2385 0.67748 0.71151 0.0343 2.4311 0.20433 3.1962 0.85679v-12.589h2.1451v14.602c0.59267 0.6751 0.68205 2.4423 0.74621 3.6416 0.08871 1.6582 0.10208 3.8095 0.76119 4.1036 0.17691 0.079 1.1604-0.98197 1.649-0.6687 1.9855 1.273 0.96617 1.1455 2.5084-0.57722 0.48695-0.54391 1.3418-0.0436 1.4185-0.40049 0.26499-1.6469-1.5967-4.4768-1.5498-4.4788 0.05014-3e-3 5.6556 1.9811 8.0207 1.0733 0.33286-0.28714-0.72823-2.2006-0.02894-2.5621 3.649-1.8863 3.6657-1.4763 0.13178-3.3037-0.66708-0.70797 0.50761-1.8846 0.43667-2.4784-1.1104-0.78507-4.3808 0.87105-6.5381 0.0889 1.3511-2.5041 6.0274-4.7452 5.995-5.7459-0.0079-0.28854-1.5876-1.3239-1.4914-3.0887 0.26948-4.9424 2.4785-4.7434-2.9192-2.7533-2.6363 0.51039-2.9713-1.6103-3.2603-1.5813-1.3207 0.15102-2.1344 5.9572-4.1083 8.3142-0.38694-2.0971 1.1742-6.4809 0.4532-7.3587-0.11523-0.22823-2.0489 0.99149-2.8303-0.0305-1.2147-1.5886-1.6568-2.5272-2.0252-2.5161zm9.7653 5.7206h2.4381l-5.1025 6.6378 5.8477 9.7761h-2.5962l-4.3801-7.8347-0.15813-0.40618-0.20309 0.40618-1.7839 2.3482c-0.13547-0.30104-0.20309-0.66989-0.20309-1.1064 0-0.44403 0.07146-0.90305 0.21446-1.3772 0.14299-0.47413 0.36507-0.91829 0.66611-1.3322z" fill="url(#linearGradient11)" stroke-width=".66235"/>
    </svg>
}

export default LogoLight;