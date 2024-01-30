import React from 'react';
import { SocketContext, socket } from 'echess/components';
import { AppContext, AppHead, Toaster } from 'echess/components';
import * as context from '../site.config';
import '../css/index.css';

const Root = (props) => {
  const { Component, pageProps } = props;

  return (
    <AppContext.Provider value={context}>
      <SocketContext.Provider value={socket}>
        <AppHead />
        <Component {...pageProps} />
        <Toaster />
      </SocketContext.Provider>
    </AppContext.Provider>
  );
};

export default Root;
