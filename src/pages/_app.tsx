import React from 'react'
import { AppProps } from 'next/app'
import '../styles/global.css'

interface CustomAppProps extends AppProps { }


const CustomApp: React.FC<CustomAppProps> = ({
    Component,
    pageProps
}) => {
    return (
        <Component {...pageProps} />
    )
}

export default CustomApp
