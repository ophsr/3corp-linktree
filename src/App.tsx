import React from 'react';
import './core/assets/styles/styles.scss';
import Routes from './Routes';
import { Helmet } from "react-helmet";


const App = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="linktree operation 3corp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="linktree, 3corp" />
        <meta name="author" content="Pedro Rodrigues" />
        <title>Linktree 3corp</title>
      </Helmet>
      <Routes />
    </>
  )
}

export default App;