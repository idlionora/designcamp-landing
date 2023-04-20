
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import './App.css'

function App() {

  return (
		<>
			<h1>Hello World!</h1>
			<Typography variant="h1" gutterBottom>
				Hello World!
			</Typography>
			<Typography variant="h2" gutterBottom>
				This is Subtitle
			</Typography>
			<Typography variant="h3" gutterBottom>
				This is Child Subtitle
			</Typography>
			<Button className="pb-20" variant="contained">
				Contained
			</Button>
		</>
  );
}

export default App
