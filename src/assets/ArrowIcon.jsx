const ArrowIcon = ({ width = '15', height = '15', rotate = 0 }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 15 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			transform={`rotate(${rotate})`}
		>
			<path
				d="M1 6.5C0.447715 6.5 0 6.94772 0 7.5C0 8.05228 0.447715 8.5 1 8.5V6.5ZM14.7071 8.20711C15.0976 7.81658 15.0976 7.18342 14.7071 6.79289L8.34315 0.428932C7.95262 0.0384078 7.31946 0.0384078 6.92893 0.428932C6.53841 0.819457 6.53841 1.45262 6.92893 1.84315L12.5858 7.5L6.92893 13.1569C6.53841 13.5474 6.53841 14.1805 6.92893 14.5711C7.31946 14.9616 7.95262 14.9616 8.34315 14.5711L14.7071 8.20711ZM1 8.5H14V6.5H1V8.5Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default ArrowIcon;
