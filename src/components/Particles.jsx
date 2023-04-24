export const UnderlineDecor = ({
    size = 'h1',
    text = 'insert text'
}) => {
    let decorHeight;
    if (size === 'h1') {
        decorHeight = 'bottom-3.5';
    } else if (size === 'h2') {
        decorHeight = 'bottom-1'
    } else decorHeight = size;

	return (
		<>
			{' '}
			<div className="inline-block relative">
				<span className={`h-[12px] ${size === 'h1' ? 'w-[105%] left-[-2.5%]' : 'w-[103%] left-[-1.5%]'} bg-theme-yellow block absolute ${decorHeight}`}></span>
				<span className="absolute">{text}</span>
				<span className="invisible">{text}</span>
			</div>{' '}
		</>
	);
};
