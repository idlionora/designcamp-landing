import Button from '@mui/material/Button';
import ArrowIcon from '../assets/ArrowIcon';

// ButtonDefault size = 'sm' for small setting
export const ButtonDefault = ({ text = 'Button', width = 'w-fit', size = 'lg', arrow = false }) => {
	return (
		<Button
			className={`rounded-full normal-case text-base text-theme-yellow hover:bg-transparent p-0`}
			variant="text"
			color="yellowOpaque"
		>
			<span
				className={`text-black hover:text-theme-yellow ${width} ${
					size === 'sm' ? 'p-0' : 'py-4 px-6'
				} flex items-center justify-center leading-none white-shadow ${
					size === 'lg'
						? 'rounded-full border border-solid border-transparent hover:border-theme-yellow'
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
	onClick = null,
	className = ''
}) => {
	return (
		<Button
			className={`rounded-full normal-case ${
				theme === 'light' ? 'bg-[#FFA500] hover:bg-amber-400' : 'bg-[#1C2024]'
			} text-base p-0 border border-solid border-transparent ${className}`}
			variant="contained"
			color="yellowOpaque"
			disableElevation
			onClick={onClick}
		>
			<span
				className={`${
					theme === 'light' ? 'text-black' : ''
				} hover:text-black ${width} px-6 py-4 flex items-center justify-center leading-none`}
			>
				{arrow === 'reverse' ? <ArrowIcon rotate={180} /> : null}
				<p
					className={`${
						text.length == 0
							? ''
							: arrow === 'reverse'
							? 'ml-2'
							: arrow == true && 'mr-2'
					}`}
				>
					{text}
				</p>
				{arrow == true ? <ArrowIcon /> : null}
			</span>
		</Button>
	);
};

export const ButtonDisabled = ({ text = 'Button', width = 'w-fit', arrow = false }) => {
	return (
		<div
			className={`${width} px-6 py-4 flex items-center justify-center leading-none text-base rounded-full border border-solid border-inherit text-inherit`}
		>
			{arrow === 'reverse' ? <ArrowIcon rotate={180} /> : null}
			<p
				className={`${
					text.length == 0 ? '' : arrow === 'reverse' ? 'ml-2' : arrow == true && 'mr-2'
				}`}
			>
				{text}
			</p>
			{arrow == true ? <ArrowIcon /> : null}
		</div>
	);
};
