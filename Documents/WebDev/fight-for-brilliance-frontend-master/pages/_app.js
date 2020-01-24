import React from "react";
import App from "next/app";
import { createGlobalStyle } from "styled-components";
import { PageTransition } from "next-page-transitions";

import Player from "../components/player";
import PlayerContext from "../components/player/context";

const GlobalStyle = createGlobalStyle`
  @import url("//hello.myfonts.net/count/3a426e");
  @import url('https://fonts.googleapis.com/css?family=PT+Serif&display=swap');

 
  @font-face {
    font-family: 'Config-SemiBold'; 
    src: url('/static/fonts/3A426E_0_0.eot');
    src: url('/static/fonts/3A426E_0_0.eot?#iefix') format('embedded-opentype'), 
    url('/static/fonts/3A426E_0_0.woff2') format('woff2'), 
    url('/static/fonts/3A426E_0_0.woff') format('woff'), 
    url('/static/fonts/3A426E_0_0.ttf') format('truetype');
  }
 
  @font-face {
    font-family: 'Config-Medium';
    src: url('/static/fonts/3A426E_1_0.eot');
    src: url('/static/fonts/3A426E_1_0.eot?#iefix') format('embedded-opentype'), 
    url('/static/fonts/3A426E_1_0.woff2') format('woff2'), 
    url('/static/fonts/3A426E_1_0.woff') format('woff'), 
    url('/static/fonts/3A426E_1_0.ttf') format('truetype');
  }

  html, body, main {
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
  
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

class AppWrapper extends App {
  static async getInitialProps(appContext) {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps };
  }

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      url: null,
      isPlaying: false,
      playhead: 0,
      title: `Test Title`,
      date: `01.01.20`,
      image: ``
    };
  }

  _updateContext = state => {
    this.setState(state);
  };

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <GlobalStyle />
        <PlayerContext.Provider
          value={{ ...this.state, update: this._updateContext }}
        >
          <PageTransition timeout={500} classNames="page-transition">
            <Component {...pageProps} key={router.route} />
          </PageTransition>
          <style jsx global>{`
            @import url("/static/css/reset.css");
            @import url("/static/css/slider.css");
            @import url("/static/css/swiper.css");

            .page-transition-enter main {
              opacity: 0;
              min-height: 100vh;
            }
            .page-transition-enter body {
              background-color: #ff4f3d;
            }
            .page-transition-enter-active main {
              opacity: 1;
              min-height: 100vh;
              transition: all 500ms ease-in-out;
            }
            .page-transition-exit main {
              opacity: 1;
              min-height: 100vh;
            }
            .page-transition-exit main {
              background-color: #ff4f3d;
            }
            .page-transition-exit-active main {
              opacity: 0;
              min-height: 100vh;

              transition: all 500ms ease-in-out;
            }
          `}</style>
          <Player />
        </PlayerContext.Provider>
      </>
    );
  }
}

export default AppWrapper;
