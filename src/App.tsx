import React from 'react';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './Styles/GlobalStyle';

import { useTheme } from '../src/components/hooks/theme';

import Routes from './routes';

const App: React.FC = () => {

    const {theme} = useTheme();

    return(
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Routes />
        </ThemeProvider>
    );
}

export default App;