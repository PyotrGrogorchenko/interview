import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { Router } from '@src/components/Router/Router';
import { ErrorBoundary } from '@src/components/ErrorBoundary';

import RootStore from './store';

const store = RootStore.create({});
export const StoreContext = createContext(store);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Global = createGlobalStyle`
body {
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  font-family: 'Roboto', sans-serif;
    
  font-size: 14px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;

  ::-webkit-scrollbar {
    height: 12px;
    width: 4px;
  }
  
  ::-webkit-scrollbar-track {
    background: #F8F9FA;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #5E6674;
    border-radius: 4px;
  }

}`;

const theme = {
  colors: {
    bg: {
      primary: '#FFFFFF',
      secondary: '#F0F3F7',
      tertiary: '#F7F8F9',
    },
    border: {
      primary: '#E0E5EB',
    },
    text: {
      primary: '#1F2939',
      secondary: '#5E6674',
    },
    error: {
      primary: '#C53030',
      secondary: '#FEE3E3',
      tertiary: '#9B2C2C',
    },
    default: {
      primary: '#1F2939',
      secondary: '#FFFFFF',
      tertiary: '#F2F5F8',
      border: '#CED5DE',
    },
  },
};

root.render(
  <>
    <ThemeProvider theme={theme}>
      <Global />
      <StoreContext.Provider value={store}>
        <BrowserRouter>
          <ErrorBoundary>
            <Router />
          </ErrorBoundary>
        </BrowserRouter>
      </StoreContext.Provider>
    </ThemeProvider>
  </>
);
