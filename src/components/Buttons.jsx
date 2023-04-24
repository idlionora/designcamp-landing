import Button from '@mui/material/Button';
import ArrowIcon from '../assets/ArrowIcon';

export const ButtonDefault = ({ text = 'Button', width = 'w-fit', size = 'sm', arrow = true }) => {
	return (
		<Button
			className={`rounded-full normal-case text-base text-theme-yellow hover:bg-white p-0`}
			variant="text"
			color="yellowOpaque"
		>
			<span
				className={`text-black hover:text-theme-yellow ${width} ${
					size === 'sm' ? 'p-0' : 'py-4 px-6'
				} flex items-center justify-center leading-none white-shadow ${
					size === 'lg'
						? 'rounded-full border border-solid border-white hover:border-theme-yellow'
						: ''
				}`}
			>
				<p className={arrow == true ? 'mr-2.5' : ''}>{text}</p>
				{arrow == true ? <ArrowIcon width="11" /> : null}
			</span>
		</Button>
	);
};

export const ButtonCapsule = ({
	text = 'Button',
	width = 'w-fit',
	theme = 'dark',
	arrow = false,
}) => {
	return (
		<Button
			className={`rounded-full normal-case ${
				theme === 'light' ? 'bg-[#FFA500] hover:bg-amber-400' : 'bg-[#1C2024]'
			} text-base p-0`}
			variant="contained"
			color="yellowOpaque"
			disableElevation
		>
			<span
				className={`${
					theme === 'light' ? 'text-black' : ''
				} hover:text-black ${width} py-4 px-6 flex items-center justify-center leading-none`}
			>
				<p className={arrow == true ? 'mr-2' : ''}>{text}</p>
				{arrow == true ? <ArrowIcon /> : null}
			</span>
		</Button>
	);
};
