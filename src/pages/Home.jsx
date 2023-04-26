import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Paper from '@mui/material/Paper';
import { ButtonDefault, ButtonCapsule } from '../components/Buttons';
import { UnderlineDecor } from '../components/Particles';
import navLogo from '../assets/logo-designcamp.png';
import iconClose from '../assets/icon-close.svg';
import iconCheck from '../assets/icon-check.svg';
import imgBanner from '../assets/bg-banner.svg';
import imgVidthumb from '../assets/vidthumbnail.png';

const BannerGrid = ({ title, subtitle, line = true }) => {
	return (
		<Grid xs={6} md={3} className="flex flex-col items-center justify-center relative">
			{line ? (
				<div
					className={`w-px h-[60px] bg-white absolute right-0 ${
						line === 'break' ? 'invisible [@media(min-width:900px)]:visible' : ''
					}`}
				/>
			) : null}
			<p className="font-heading font-semibold text-5xl">{title}</p>
			<p>{subtitle}</p>
		</Grid>
	);
};

const CardGrid = ({number = "1", title = "Insert Title Here", text = "Insert long post text here. The text will be truncated in two lines, no matter how long."}) => {
	return (
		<Grid xs={12} sm={6} md={4}>
			<Paper
				elevation={6}
				className="rounded-[20px] px-5 py-5 lg:px-9 lg:py-7 text-left h-full"
			>
				<div className="w-full h-full flex flex-col items-start">
					<div className="flex items-center">
						<div className="flex w-8 h-8 self-start justify-center items-center rounded-[5px] bg-theme-yellow mr-[14px] shrink-0 font-bold text-xl leading-6">
							{number}
						</div>
						<h3>{title}</h3>
					</div>
					<div className='grow flex flex-col justify-center'>
						<p className="line-clamp-2 my-5 lg:my-7">{text}</p>
					</div>
					<ButtonDefault text="Lebih lanjut" />
				</div>
			</Paper>
		</Grid>
	);
}

function Home() {
	const facilities = [
		'Lifetime video lessons',
		'Live Q&A sessions',
		'Hands-on projects',
		'Group critiques',
		'e-Certificate',
		'Portfolio reviews',
	];
	const [loadVideo, setLoadVideo] = useState(false);
	return (
		<>
			<AppBar className="bg-white text-black" position="static">
				<div id="promo-bar" className="w-full flex justify-center bg-theme-yellow">
					<Container
						className="px-4 py-3.5 relative text-center flex justify-center items-center"
						maxWidth="xl"
					>
						<p>Sign up now and get discounts up to 90%&nbsp;off!</p>
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
						<div className="flex flex-col md:flex-row items-end gap-1">
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
					className="flex flex-col items-center px-4 md:px-5 py-[120px] overflow-x-hidden"
					maxWidth="xl"
				>
					<h1 className="text-5xl md:text-7xl">
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
				<div className="w-full h-[39.364rem] absolute bottom-0 z-[-1] overflow-hidden">
					<img
						className="h-full xl:w-full object-cover absolute translate-x-[-50%]"
						src={imgBanner}
						alt=""
					/>
				</div>
				<div className="bg-neutral-dark">
					<Container className="px-0" maxWidth="xl">
						<Grid container className="bg-neutral-dark text-white h-64">
							<BannerGrid title="2000+" subtitle="members" />
							<BannerGrid title="500+" subtitle="positive reviews" line="break" />
							<BannerGrid title="300+" subtitle="videos" />
							<BannerGrid title="30+" subtitle="modules" line={false} />
						</Grid>
					</Container>
				</div>
			</section>
			<section id="facilities">
				<Container className="px-4 md:px-5 py-[90px]" maxWidth="xl">
					<div className="flex flex-col md:flex-row justify-center items-center">
						<div className="w-full max-w-[630px] md:max-w-xl basis-1/3 mb-7 md:mb-0">
							<h2 className="mr-8">
								Comprehensive
								<br />
								Learning <UnderlineDecor text="Facilities" size="h2" />
							</h2>
							<ul className="list-none pl-0 mt-[1.875rem]">
								{facilities.map((facility, index) => {
									return (
										<li
											key={'facility-' + index}
											className="flex gap-3 items-center mb-[1.25rem]"
										>
											<img
												className="inline-block w-6"
												src={iconCheck}
												alt=""
											/>
											<p>{facility}</p>
										</li>
									);
								})}
							</ul>
						</div>
						<div className="w-full max-w-[640px] overflow-hidden rounded-2xl cursor-pointer basis-2/3">
							<img
								className={`w-full ${loadVideo ? 'hidden' : ''} rounded-2xl`}
								src={imgVidthumb}
								alt="Play Intro Video"
								onClick={() => setLoadVideo(true)}
							/>
							{loadVideo ? (
								<iframe
									id="ytplayer"
									type="text/html"
									width="100%"
									height="360"
									src="https://www.youtube.com/embed/FgZBeR1q-44?autoplay=1&mute=1"
									frameborder="0"
								></iframe>
							) : null}
						</div>
					</div>
					<div className="text-center pt-16">
						<h2>
							What Will You
							<UnderlineDecor text="Learn" size="h2" />
						</h2>
						<p className="text-[#878787] mt-4">
							Discover what you'll learn in DesignCamp's graphic design course, from
							fundamentals to advanced techniques.
						</p>
						<Grid container className="mt-12" rowSpacing={2} columnSpacing={3}>
							<CardGrid
								number="1"
								title="Fundamental of Graphic Design"
								text="Provides a comprehensive introduction to the principles and techniques of graphic design. Students will learn about color theory, typography, composition, and layout, as well as the history and theory of graphic design."
							/>
							<CardGrid
								number="2"
								title="Design Thinking"
								text="How to identify design problems, brainstorm solutions, and iterate on design ideas to create suitable design for client. designers communicate mostly in sketches and models to translate abstract requirements into concrete objects."
							/>
							<CardGrid
								number="3"
								title="Mastering Adobe Photoshop"
								text="Learn how to use tools and techniques for photo manipulation, compositing, and digital editing in Adobe Photoshop. This photoshop course is made to help you learn to edit or create appealing images."
							/>
							<CardGrid
								number="4"
								title="Vector with Adobe Illustrator"
								text="Learn how to work with shapes, paths, and text to create logos, icons, and illustrations. Vector images create clean, scaleable design that allow for exciting visual possibilities with the added bonus of functionality."
							/>
							<CardGrid
								number="5"
								title="Layouting with Adobe InDesign"
								text="How to work with text and images, create styles, and prepare files for print or digital display. You will learn how to set out documents, work with colour and incorporate text and images into documents."
							/>
							<CardGrid
								number="6"
								title="Building a Strong Brand Identity"
								text="Learn about logo design, color theory, and typography, as well as how to develop a brand. A brand identity can inspire customers and increase a sense of loyalty for your brand."
							/>
						</Grid>
					</div>
				</Container>
			</section>
			<section id="comparison" className='bg-neutral-dark text-white'>
				<Container className="px-4 md:px-5 py-[90px]" maxWidth="xl"></Container>
			</section>
		</>
	);
}

export default Home;
