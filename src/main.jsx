import React from 'react'
import ReactDOM from 'react-dom/client'
import { StyledEngineProvider, createTheme, ThemeProvider } from '@mui/material';
import App from './App';
import './index.css';

const themeOveride = createTheme({
	typography: {
		fontFamily: 'Plus Jakarta Sans',
		fontWeightLight: 400,
		fontWeightRegular:500,
		fontWeightMedium: 600,
		fontWeightBold: 700
	},
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={themeOveride}>
				<App />
			</ThemeProvider>
		</StyledEngineProvider>
	</React.StrictMode>
);
