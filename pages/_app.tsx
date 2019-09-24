import React from 'react';
import App from 'next/app';

/**
 * サービスの全体のページレイアウトなどを変更したい場合は、このAppクラスを修正する
 */
class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />;
    }
}

export default MyApp;
