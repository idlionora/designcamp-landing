import React from 'react'
import ReactDOM from 'react-dom/client'
import { StyledEngineProvider, createTheme, ThemeProvider } from '@mui/material';
import App from './App';
import './index.css';

const themeOveride = createTheme({
	typography: {
		fontFamily: "'Plus Jakarta Sans', 'sans-serif'",
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
		h1: {
			fontFamily: "'Montagu Slab', 'serif'",
			fontWeight: 600,
			fontSize: '4.5rem',
			lineHeight: 1.2
		},
		h2: {
			fontFamily: "'Montagu Slab', 'serif'",
			fontWeight: 600,
			fontSize: '2.25rem',
			lineHeight: 1.2
		},
		h3: {
			fontFamily: "'Plus Jakarta Sans', 'sans-serif'",
			fontWeight: 700,
			fontSize: '1.25rem',
			lineHeight: 1.2
		},
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
