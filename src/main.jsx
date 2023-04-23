import React from 'react'
import ReactDOM from 'react-dom/client'
import { StyledEngineProvider, createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';

const themeOveride = createTheme({
	palette: {
		yellowOpaque: {
			light: '#fde047',
			main: '#facc15',
			dark: '#fbbf24',
			contrastText: '#fff',
		},
	},
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
			lineHeight: 1.2,
		},
		h2: {
			fontFamily: "'Montagu Slab', 'serif'",
			fontWeight: 600,
			fontSize: '2.25rem',
			lineHeight: 1.2,
		},
		h3: {
			fontFamily: "'Plus Jakarta Sans', 'sans-serif'",
			fontWeight: 700,
			fontSize: '1.25rem',
			lineHeight: 1.2,
		},
	},
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={themeOveride}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/*" element={<Home />} />
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</StyledEngineProvider>
	</React.StrictMode>
);
