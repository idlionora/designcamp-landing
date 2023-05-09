import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { ButtonDefault, ButtonCapsule } from '../components/Buttons';
import { UnderlineDecor, BannerGrid, CardGrid } from '../components/Particles';
import HomeCarousel from '../components/Carousel';
import HomeAccordion from '../components/Accordion';
import logoMain from '../assets/logo-designcamp.png';
import logoWhite from '../assets/logo-designcamp2.png';
import logoVector from '../assets/logo-designcamp3.svg';
import iconClose from '../assets/icon-close.svg';
import iconCheck from '../assets/icon-check.svg';
import imgBanner from '../assets/bg-banner.svg';
import imgVidthumb from '../assets/vidthumbnail.png';
import imgVidthumb2 from '../assets/vidthumbnail2.png';
import iconInstagram from '../assets/icon-instagram.svg';
import iconTwitter from '../assets/icon-twitter.svg';
import iconYoutube from '../assets/icon-youtube.svg';
import iconLinkedin from '../assets/icon-linkedin.svg';

const thingsToLearn = [
	{
		number: '1',
		title: 'Fundamental of Graphic Design',
		text: 'Provides a comprehensive introduction to the principles and techniques of graphic design. Students will learn about color theory, typography, composition, and layout, as well as the history and theory of graphic design.',
	},
	{
		number: '2',
		title: 'Design Thinking',
		text: 'How to identify design problems, brainstorm solutions, and iterate on design ideas to create suitable design for client. designers communicate mostly in sketches and models to translate abstract requirements into concrete objects.',
	},
	{
		number: '3',
		title: 'Mastering Adobe Photoshop',
		text: 'Learn how to use tools and techniques for photo manipulation, compositing, and digital editing in Adobe Photoshop. This photoshop course is made to help you learn to edit or create appealing images.',
	},
	{
		number: '4',
		title: 'Vector with Adobe Illustrator',
		text: 'Learn how to work with shapes, paths, and text to create logos, icons, and illustrations. Vector images create clean, scaleable design that allow for exciting visual possibilities with the added bonus of functionality.',
	},
	{
		number: '5',
		title: 'Layouting with Adobe InDesign',
		text: 'How to work with text and images, create styles, and prepare files for print or digital display. You will learn how to set out documents, work with colour and incorporate text and images into documents.',
	},
	{
		number: '6',
		title: 'Building a Strong Brand Identity',
		text: 'Learn about logo design, color theory, and typography, as well as how to develop a brand. A brand identity can inspire customers and increase a sense of loyalty for your brand.',
	},
];
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

const facilities = [
	'Lifetime video lessons',
	'Live Q&A sessions',
	'Hands-on projects',
	'Group critiques',
	'e-Certificate',
	'Portfolio reviews',
];

const saveMoreList = [
	'30+ modules',
	'6+ hands-on projects',
	'Lifetime access',
	'Weekly mentorship',
];

const saveMoreDivs = [
	{ title: 'Graphic Design Bootcamp', desc: '$2.000++' },
	{ title: 'Offline Training', desc: '$300++/ module * 20 modules = $6,000++' },
	{ title: 'Offline Training', desc: '$50++/ module * 20 modules = $1,000++' },
	{ title: 'Buy Modules One by One', desc: '$20/ module * 20 modules = $400' },
	{ title: 'Hire a Mentor', desc: '$50 - $100/ session' },
];

const socialButtons = [
	{ icon: iconInstagram, ariaLabel: 'Instagram', link: 'https://www.instagram.com/' },
	{ icon: iconTwitter, ariaLabel: 'Twitter', link: 'https://twitter.com/' },
	{ icon: iconYoutube, ariaLabel: 'Youtube', link: 'https://www.youtube.com/' },
	{ icon: iconLinkedin, ariaLabel: 'LinkedIn', link: 'https://www.linkedin.com/' },
];

const Home = () => {
	const [promoBarIsOpen, setPromoBarIsOpen] = useState(true);
	const [screenDisplay, setScreenDisplay] = useState(false);
	const [screenOpacity, setScreenOpacity] = useState(false);
	const [videoDisplay, setVideoDisplay] = useState(false);
	const [videoInPosition, setVideoInPosition] = useState(false);
	const [infoContent, setInfoContent] = useState({title: '', text: ''});
	const [infoDisplay, setInfoDisplay] = useState(false);
	const [infoInPosition, setInfoInPosition] = useState(false);

	function toggleVideoModal() {
		if (!videoDisplay) {
			setScreenDisplay(true);
			setVideoDisplay(true);
			setTimeout(() => {
				setScreenOpacity(true);
				setVideoInPosition(true);
			}, 10);
		} else {
			setScreenOpacity(false);
			setVideoInPosition(false);
			setTimeout(() => {
				setScreenDisplay(false);
			}, 210);
			setTimeout(() => {
				setVideoDisplay(false);
			}, 360);
		}
	}

	function toggleInfoModal(title, text) {
		if (!infoDisplay) {
			setInfoContent({title: title, text: text})
			setScreenDisplay(true);
			setInfoDisplay(true);
			setTimeout(() => {
				setScreenOpacity(true);
				setInfoInPosition(true);
			})
		} else {
			setScreenOpacity(false);
			setInfoInPosition(false);
			setTimeout(() => {
				setScreenDisplay(false);
			}, 210);
			setTimeout(() => {
				setInfoDisplay(false);
				setInfoContent({title:'', text:''})
			}, 360)
		} 
	}

	return (
		<>
			<div
				className={`bg-theme-grey w-full h-full fixed z-50 transition-opacity duration-200 ${
					screenDisplay ? 'block' : 'hidden'
				} ${screenOpacity ? 'opacity-70' : 'opacity-0'}`}
			/>
			<div
				className={`fixed z-[51] w-full h-full sm:px-4 md:px-5 flex justify-center items-center ${
					videoDisplay ? 'block' : 'hidden'
				} ${videoInPosition ? 'translate-y-0' : 'translate-y-[100vh]'}`}
				style={{ transition: 'transform 350ms ease-out' }}
				onClick={toggleVideoModal}
			>
				<div className="relative w-full max-w-[61.25rem]">
					<div
						className="w-full pt-[56.224%] relative"
						onClick={(e) => e.stopPropagation()}
					></div>
					<img
						src={imgVidthumb2}
						alt=""
						className="w-full h-full rounded-2xl absolute z-[1] top-0"
					/>
					{videoDisplay && (
						<iframe
							id="ytplayer"
							className="rounded-2xl absolute z-[2] top-0 border-none"
							type="text/html"
							width="100%"
							height="100%"
							src="https://www.youtube.com/embed/FgZBeR1q-44"
						></iframe>
					)}
				</div>
			</div>
			<div
				className={`fixed z-[51] w-full h-full px-4 md:px-5 flex justify-center items-center ${
					infoDisplay ? 'block' : 'hidden'
				} ${infoInPosition ? 'translate-y-0' : 'translate-y-[100vh]'}`}
				style={{ transition: 'transform 350ms ease-out' }}
				onClick={toggleInfoModal}
			>
				<div
					className="relative w-full max-w-[38.95rem] bg-white rounded-[20px] py-9 px-12"
					onClick={(e) => e.stopPropagation()}
				>
					<div className="flex justify-between items-center">
						<h3>{infoContent.title}</h3>
						<img
							className="w-3 h-3 cursor-pointer"
							src={iconClose}
							alt="Close Info"
							onClick={toggleInfoModal}
						/>
					</div>
					<p className="mt-8">{infoContent.text}</p>
				</div>
			</div>
			<AppBar className="bg-white text-black" position="static">
				{promoBarIsOpen && (
					<div
						id="promo-bar"
						className="w-full flex justify-center items-center px-4 py-3.5 text-center bg-theme-yellow"
					>
						<p>Sign up now and get discounts up to 90%&nbsp;off!</p>
						<img
							className="ml-4 w-3 h-3 sm:absolute right-4 cursor-pointer"
							src={iconClose}
							alt="Close Promotion"
							onClick={() => setPromoBarIsOpen(false)}
						/>
					</div>
				)}
				<Container className="px-4" maxWidth="xl">
					<Toolbar className="md:h-[100px] justify-between py-2" disableGutters>
						<img
							className="w-[215px] md:w-[230px]"
							src={logoMain}
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
								className="w-full rounded-2xl"
								src={imgVidthumb}
								alt="Play Intro Video"
								onClick={toggleVideoModal}
							/>
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
							{thingsToLearn.map(({ number, title, text }) => {
								return (
									<CardGrid
										key={'infocard' + number}
										number={number}
										title={title}
										text={text}
										onClick={() => toggleInfoModal(title, text)}
									/>
								);
							})}
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
											<img src={logoWhite} alt="Design Camp" />
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
							<p className="mt-4 text-[#878787]">
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
			<section id="save-more">
				<Container className="px-4 md:px-5 pb-[90px] text-center" maxWidth="xl">
					<h2>
						<UnderlineDecor size="h2" text="Save More" />
						with DesignCamp
					</h2>
					<p className="text-[#878787] mt-4">Get benefits worth thousands of dollars!</p>
					<div className="w-full mt-[60px] flex flex-col md:flex-row gap-[60px] items-center justify-center relative">
						<div className="w-full max-w-[536px] bg-neutral-dark rounded-[20px] py-20 px-8 min-[300px]:px-12 sm:px-16 text-left h-[35rem] sm:h-[33.2rem] md:h-[35.625rem]">
							<img
								src={logoVector}
								alt="DesignCamp"
								className="w-full max-w-[332px]"
							/>
							<p className="mt-6">
								<span className="line-through align-top text-[#D62525] text-xl sm:text-2xl">
									$500
								</span>
								<span className="text-4xl sm:text-[2.5rem] text-white font-extrabold align-top ml-[10px]">
									$60
								</span>
							</p>
							<ul className="list-none mt-7 pl-0 text-lg sm:text-xl text-white sm:font-bold">
								{saveMoreList.map((saveMore, index) => {
									return (
										<li
											key={'savemore-a' + index}
											className="flex gap-3 items-center mb-4"
										>
											<img
												className="inline-block w-6"
												src={iconCheck}
												alt=""
											/>
											<p>{saveMore}</p>
										</li>
									);
								})}
							</ul>
						</div>
						<div className="w-full max-w-[536px] bg-neutral-dark rounded-[20px] py-14 sm:py-20 px-8 min-[300px]:px-12 sm:px-16 text-left text-white h-[37rem] min-[300px]:h-[35rem] sm:h-[33.2rem] md:h-[35.625rem] flex flex-col justify-center lg:justify-start gap-7">
							{saveMoreDivs.map(({ title, desc }, index) => {
								return (
									<div key={'savemore-b' + index}>
										<p className="font-bold text-xl leading-6">{title}</p>
										<p className="block mt-2">{desc}</p>
									</div>
								);
							})}
						</div>
						<div className="rounded-full bg-theme-yellow flex w-[130px] h-[130px] items-center justify-center font-bold text-4xl sm:text-5xl absolute top-1/2 translate-y-[-65%] min-[300px]:translate-y-[-50%]">
							<p>VS</p>
						</div>
					</div>
					<div className="mt-[60px] py-[68px] px-4 bg-theme-yellow/[.15] rounded-[30px] border-solid border-4 border-theme-yellow text-center">
						<h2>Limited-time Promotion</h2>
						<p className="text-xl leading-6 mt-2">
							Join today for an exclusice price&nbsp;offer!
						</p>
						<p className="font-extrabold text-[4rem] mt-9">$50</p>
						<ButtonCapsule
							theme="light"
							arrow={true}
							text="Join Now"
							className="mt-3"
						/>
						<p className="mt-9">
							Note: Prices will increase as more learning materials are added. Join
							now to save more!
						</p>
					</div>
				</Container>
			</section>
			<footer className="bg-neutral-dark text-white">
				<Container className="px-4 md:px-5 text-left" maxWidth="xl">
					<Grid container className="py-[70px]">
						<Grid xs={12} md={6}>
							<img src={logoWhite} alt="DesignCamp" className="w-[230px]" />
							<p className="mt-3 block w-full max-w-[440px]">
								Your comprehensive graphic design education with mentorship and
								hands-on practice.
							</p>
							<div className="mt-9 flex gap-3">
								{socialButtons.map(({ icon, ariaLabel, link }, index) => {
									return (
										<a
											key={`socialbutton` + index}
											href={link}
											target="_blank"
											className="w-14 h-14 rounded-full flex items-center justify-center border-none bg-[#23262a]"
											aria-labelledby={ariaLabel}
										>
											<img src={icon} alt="" className="w-[25px]" />
										</a>
									);
								})}
							</div>
						</Grid>
						<Grid xs={12} md={6} className="flex min-[900px]:justify-end">
							<div className="flex gap-x-4 gap-y-10 leading-normal mt-10 min-[900px]:mt-0 w-full max-w-[36.94rem] justify-start min-[900px]:justify-end flex-wrap min-[375px]:flex-nowrap">
								<div className="w-full max-w-[155px] min-[390px]:max-w-[170.33px] ">
									<h3 className="leading-normal">Product</h3>
									<a href="#" className="block mt-5 no-underline text-white">
										Overview
									</a>
									<a href="#" className="block mt-5 no-underline text-white">
										Pricing
									</a>
									<a href="#" className="block mt-5 no-underline text-white">
										Roadmap
									</a>
								</div>
								<div className="w-full max-w-[155px] min-[390px]:max-w-[170.33px]">
									<h3 className="leading-normal">Company</h3>
									<a href="#" className="block mt-5 no-underline text-white">
										About
									</a>
									<a href="#" className="block mt-5 no-underline text-white">
										Contact
									</a>
									<a href="#" className="block mt-5 no-underline text-white">
										Career
									</a>
									<a href="#" className="block mt-5 no-underline text-white">
										Reviews
									</a>
								</div>
								<div className="w-full max-w-[170.33px]">
									<h3 className="leading-normal">Legal</h3>
									<a href="#" className="block mt-5 no-underline text-white">
										Terms & Conditions
									</a>
									<a href="#" className="block mt-5 no-underline text-white">
										Cookie Policy
									</a>
									<a href="#" className="block mt-5 no-underline text-white">
										Privacy Policy
									</a>
								</div>
							</div>
						</Grid>
					</Grid>
				</Container>
				<Container
					className="py-7 flex flex-col md:flex-row justify-between border-solid border-0 border-t-2 border-[#23262A]"
					maxWidth="xl"
				>
					<p>© 2023 CodePolitan. All&nbsp;rights&nbsp;reserved.</p>
					<p className="mt-3 md:mt-0">Designed by KelasFullstack.id</p>
				</Container>
			</footer>
		</>
	);
};

export default Home;
