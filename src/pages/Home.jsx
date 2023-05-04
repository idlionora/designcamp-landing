import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { ButtonDefault, ButtonCapsule } from '../components/Buttons';
import { UnderlineDecor, BannerGrid, CardGrid } from '../components/Particles';
import HomeCarousel from '../components/Carousel';
import HomeAccordion from '../components/Accordion';
import navLogo from '../assets/logo-designcamp.png';
import navLogoWhite from '../assets/logo-designcamp2.png';
import iconClose from '../assets/icon-close.svg';
import iconCheck from '../assets/icon-check.svg';
import imgBanner from '../assets/bg-banner.svg';
import imgVidthumb from '../assets/vidthumbnail.png';



function createRow(category, selflearnDesc, designcampDesc) {
	return { category, selflearnDesc, designcampDesc };
}
const comparisonRows = [
	createRow(
		'Learning Path',
		'You must create your own learning path, which can be difficult without guidance or knowledge of the full scope of graphic design.',
		'Offers a structured learning path that covers the fundamental principles and techniques of graphic design.'
	),
	createRow(
		'Learning Resources',
		'You must rely on free or low-cost resources available online, which may be incomplete or inconsistent in quality.',
		'Offers you high-quality video tutorials, interactive exercises, and real-world projects.'
	),
	createRow(
		'Mentorship and Support',
		'You must rely on your own knowledge and research for feedback and guidance',
		'Offers you mentorship and support from experienced instructors and peers, providing you with valuable feedback and guidance throughout the learning process.'
	),
	createRow(
		'Hands-On Practice',
		'Limited opportunities for hands-on practice and application of learned skills.',
		'Offers you real-world projects and design challenges that allow you to apply your learned skills and build your portfolio.'
	),
	createRow(
		'Affordability',
		'You can find free or low-cost resources online, but it can be difficult to determine which resources are reliable and effective.',
		'Requires an investment in tuition fees, but provides you with valuable resources, mentorship, and hands-on practice to help build your skills and portfolio.'
	),
	createRow(
		'Friends',
		'You are learning on your own and may not have a community of fellow learners to share ideas, ask questions, or collaborate with.',
		'You will have a community of peers to share ideas, collaborate with, and receive feedback from.'
	),
];

const Home = () => {
	const [loadVideo, setLoadVideo] = useState(false);
	const facilities = [
		'Lifetime video lessons',
		'Live Q&A sessions',
		'Hands-on projects',
		'Group critiques',
		'e-Certificate',
		'Portfolio reviews',
	];

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
					<Toolbar className="md:h-[100px] justify-between py-2" disableGutters>
						<img
							className="w-[215px] md:w-[230px]"
							src={navLogo}
							alt="DesignCamp Logo"
						/>
						<div className="flex flex-col md:flex-row items-end gap-1">
							<ButtonDefault width="w-[115px]" text="Sign In" />
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
						<ButtonDefault text="Contact Us" width="w-[155px]" />
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
			<section id="comparison" className="bg-neutral-dark text-white pt-[90px] pb-[70px]">
				<h2 className="px-4 md:px-5 text-center">
					Self Learning vs <span className="text-theme-yellow">DesignCamp</span>
				</h2>
				<p className="px-4 md:px-5 leading-6 text-center mt-4">
					Mentorship is key to success in graphic design - choose DesignCamp for
					personalized guidance.
				</p>
				<Container className="px-0 mt-7 overflow-x-hidden" maxWidth="xl">
					<div id="comparison-table-frame" className="w-full overflow-x-auto relative">
						<div
							id="comparison-table-bg"
							className="w-[768px] md:w-full h-full py-5 px-4 md:px-5 absolute top-0"
						>
							<div className="flex w-full h-full">
								<div className="w-[23.8%]" />
								<div className="w-[38.1%] pl-[25.5px]">
									<div className="bg-[#23262a] rounded-[20px] w-full h-full" />
								</div>
								<div className="w-[38.1%] pl-[25.5px]">
									<div className="bg-[#23262a] rounded-[20px] border-solid border-4 border-theme-yellow shadow-[0_0_20px_#FFA500] w-full h-full" />
								</div>
							</div>
						</div>
						<table
							id="comparison-table-text"
							className="w-[768px] md:w-full my-5 px-4 md:px-5 relative"
						>
							<thead>
								<tr>
									<th className="w-[23.8%] px-0" />
									<th className="w-[38.1%] pl-[25.5px] pr-0 pt-5 lg:pt-7 pb-9 lg:pb-12 text-center font-bold text-2xl leading-[1.2]">
										<p className="px-5 lg:px-9">Self Learning</p>
									</th>
									<th className="flex justify-center pl-[25.5px] pr-0 pt-4 lg:pt-6">
										<div className="w-[14.375rem] ml-3 md:ml-1">
											<img src={navLogoWhite} alt="Design Camp" />
										</div>
									</th>
								</tr>
							</thead>
							<tbody>
								{comparisonRows.map((row, index) => {
									return (
										<tr
											key={'category-' + index}
											className="align-top leading-normal"
										>
											<td className="font-bold p-0">{row.category}</td>
											<td className="p-0 pl-[25.5px]">
												<p className="px-5 lg:px-9 mb-9">
													{row.selflearnDesc}
												</p>
											</td>
											<td className="p-0 pl-[25.5px]">
												<p className="px-5 lg:px-9  mb-9">
													{row.designcampDesc}
												</p>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</Container>
			</section>
			<section id="experts">
				<Container className="px-4 md:px-5 py-[90px]" maxWidth="xl">
					<div className="text-center">
						<h2>
							Learn from the
							<UnderlineDecor text="Expert" size="h2" />
						</h2>
						<p className="text-[#878787] mt-4">
							Discover what you'll learn in DesignCamp's graphic design course, from
							fundamentals to advanced techniques.
						</p>
					</div>
					<HomeCarousel />
				</Container>
			</section>
			<section id="faq">
				<Container className="px-4 md:px-5 pb-[90px]" maxWidth="xl">
					<div className="w-full flex flex-col lg:flex-row gap-5 justify-between">
						<div className="w-full lg:max-w-[450px] text-center lg:text-left">
							<h2>
								<UnderlineDecor
									size="h2"
									text="Frequently"
									className="min-[357px]:hidden"
								/>
								<UnderlineDecor
									size="h2"
									text="Asked"
									className="min-[357px]:hidden"
								/>
								<UnderlineDecor
									size="h2"
									text="Frequently Asked"
									className="hidden min-[357px]:inline-block"
								/>
								Questions
							</h2>
							<p className="mt-4 text-[#878787] leading-normal">
								Get answers to your questions about DesignCamp's graphic
								design&nbsp;course.
							</p>
							<div className="hidden lg:block lg:mt-[76px]">
								<p className="font-semibold">Have other questions?</p>
								<ButtonCapsule className="mt-3" text="Contact Us" />
							</div>
						</div>
						<div className="w-full max-w-[980px] grow-0">
							<HomeAccordion />
							<div className="lg:hidden mt-7 flex flex-col justify-center items-center">
								<p className="font-semibold">Have other questions?</p>
								<div className="w-fit">
									<ButtonCapsule className="mt-3" text="Contact Us" />
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
}

export default Home;
