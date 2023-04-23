import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import navLogo from '../assets/logo-designcamp.png';
import iconClose from '../assets/icon-close.png';

function Home() {
	return (
		<>
			<AppBar className="bg-white text-black" position="static">
				<div id="promo-bar" className="w-full flex justify-center bg-theme-yellow">
					<Container className="px-4 py-3.5 relative text-center flex justify-center items-center" maxWidth="xl">
						<p>Sign up now and get discounts up to 90% off!</p>
						<img className='ml-4 w-3 h-3 sm:absolute right-4' src={iconClose} alt="Close Promotion" />
					</Container>
				</div>
				<Container className="px-4" maxWidth="xl">
					<Toolbar className="h-fit md:h-[100px] justify-between py-2" disableGutters>
						<img
							className="w-[215px] md:w-[230px]"
							src={navLogo}
							alt="DesignCamp Logo"
						/>
						<div className="flex flex-col md:flex-row items-end">
							<Button
								className="rounded-full normal-case text-yellow-400 text-base w-28 h-12"
								variant="text"
								color="warning"
							>
								<span className="text-black">Sign In</span>
							</Button>
							<Button
								className="rounded-full normal-case bg-[#1C2024] text-base w-28 h-12 ml-1 p-0"
								variant="contained"
								color="yellowOpaque"
								disableElevation
							>
								<span className="hover:text-black h-full w-full flex items-center justify-center">
									Join now
								</span>
							</Button>
						</div>
					</Toolbar>
				</Container>
			</AppBar>
			<section>
				
			</section>
		</>
	);
}

export default Home;
