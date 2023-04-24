import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { ButtonDefault, ButtonCapsule } from '../components/Buttons';
import { UnderlineDecor } from '../components/Particles';
import navLogo from '../assets/logo-designcamp.png';
import iconClose from '../assets/icon-close.png';


function Home() {
	return (
		<>
			<AppBar className="bg-white text-black" position="static">
				<div id="promo-bar" className="w-full flex justify-center bg-theme-yellow">
					<Container
						className="px-4 py-3.5 relative text-center flex justify-center items-center"
						maxWidth="xl"
					>
						<p>Sign up now and get discounts up to 90% off!</p>
						<img
							className="ml-4 w-3 h-3 sm:absolute right-4"
							src={iconClose}
							alt="Close Promotion"
						/>
					</Container>
				</div>
				<Container className="px-4" maxWidth="xl">
					<Toolbar className="h-fit md:h-[100px] justify-between py-2" disableGutters>
						<img
							className="w-[215px] md:w-[230px]"
							src={navLogo}
							alt="DesignCamp Logo"
						/>
						<div className="flex flex-col md:flex-row items-end gap-x-1">
							<ButtonDefault
								width="w-[115px]"
								size="lg"
								text="Sign In"
								arrow="false"
							/>
							<ButtonCapsule width="w-[115px]" text="Join now" />
						</div>
					</Toolbar>
				</Container>
			</AppBar>
			<section id="banner" className="text-center relative">
				<Container
					className="flex flex-col items-center px-4 md:px-5 py-[120px]"
					maxWidth="xl"
				>
					<h1>
						Transform Your <UnderlineDecor text="Creative" />
						<br />
						Vision into <UnderlineDecor text="Reality" />
					</h1>
					<p className="w-full max-w-[915px] mt-3 text-[#878787] font-medium leading-[1.6]">
						Join the DesignCamp community and unlock your potential as a graphic
						designer, no experience required. Our comprehensive course offers hands-on
						training, expert guidance, and real-world experience to help you master the
						art of graphic design from the ground up.
					</p>
					<div className="mt-11 flex gap-5">
						<ButtonDefault
							size="lg"
							text="Contact Us"
							arrow={false}
							width="w-[155px]"
						/>
						<ButtonCapsule text="Start Learning" arrow={true} />
					</div>
				</Container>
				<Grid container spacing={0} className="bg-neutral-dark text-white h-64">
					<Grid md={3} className="flex items-center justify-center">
						<p>dnasdkja</p>
					</Grid>
					<Grid md={3}>dsalkjda</Grid>
					<Grid md={3}>dsbakjbnakdsb</Grid>
					<Grid md={3}>djanhkbasdhba</Grid>
				</Grid>
			</section>
			<section className="mb-[90px]">
			</section>
		</>
	);
}

export default Home;
