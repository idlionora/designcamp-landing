import { ButtonDefault } from '../components/Buttons';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Paper from '@mui/material/Paper';

export const UnderlineDecor = ({ size = 'h1', text = 'insert text' }) => {
	let decorHeight;
	if (size === 'h1') {
		decorHeight = 'bottom-0.5 md:bottom-1.5';
	} else if (size === 'h2') {
		decorHeight = 'bottom-1';
	} else decorHeight = size;

	return (
		<>
			{' '}
			<div className="inline-block relative">
				<span
					className={`h-[12px] ${
						size === 'h1' ? 'w-[105%] left-[-2.5%]' : 'w-[103%] left-[-1.5%]'
					} bg-theme-yellow block absolute ${decorHeight}`}
				></span>
				<span className="absolute">{text}</span>
				<span className="invisible">{text}</span>
			</div>{' '}
		</>
	);
};

export const BannerGrid = ({ title, subtitle, line = true }) => {
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

export const CardGrid = ({
	number = '1',
	title = 'Insert Title Here',
	text = 'Insert long post text here. The text will be truncated in two lines, no matter how long.',
}) => {
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
					<div className="grow flex flex-col justify-center">
						<p className="line-clamp-2 my-5 lg:my-7">{text}</p>
					</div>
					<ButtonDefault text="Lebih lanjut" />
				</div>
			</Paper>
		</Grid>
	);
};
