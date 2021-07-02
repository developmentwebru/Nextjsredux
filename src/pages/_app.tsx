import React from 'react'
import { AppProps } from 'next/app'
import '../styles/global.css'
import { createWrapper, Context } from 'next-redux-wrapper'

import { store } from '../store'
import App from 'next/app'
import { Provider, useStore } from 'react-redux';


const CustomApp = ({
    Component,
    pageProps
}: AppProps) => {
    const store = useStore();
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}
CustomApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) });

const makestore = (context: Context) => store;
export const wrapper = createWrapper(makestore)

export default wrapper.withRedux(CustomApp)



