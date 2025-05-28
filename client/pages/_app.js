import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { ThemeProvider } from 'src/theme/theme-provider'; // Material Kit custom provider

export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Your App Title</title>
      </Head>

      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
