import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import { ButtonCapsule, ButtonDisabled } from './Buttons';
import imgExpert1 from '../assets/img-expert1.png'
import imgExpert2 from '../assets/img-expert2.png';
import imgExpert3 from '../assets/img-expert3.png';
import imgExpert4 from '../assets/img-expert4.png';


const HomeCarouselCard = ({id, img, name, profession, description}) => {
	return (
		<div className='w-full rounded-[10px]' key={`expertcard${id}`}>
			<img src={img} alt={name} className='w-full'/>
			<h3 className='pt-5 leading-normal'>{name}</h3>
			<p className='font-medium'>{profession}</p>
			<p className='py-3'>{description}</p>			
		</div>
	)
}

const experts = [
	{
		id: 1,
		img: imgExpert1,
		name: 'Olivia Kim',
		profession: 'Digital Illustrator',
		description:
			'Creates stunning digital illustrations using traditional art techniques and digital software.',
	},
	{
		id: 2,
		img: imgExpert2,
		name: 'Marcus Thompson',
		profession: 'Graphic Designer',
		description:
			'Versatile designer, creates visuals that communicate brand message clearly and effectively.',
	},
	{
		id: 3,
		img: imgExpert3,
		name: 'Xavier Nguyen',
		profession: 'Branding Specialist',
		description:
			'Helps companies establish a strong brand identity through effective design and strategy, skilled in market trends and consumer behavior.',
	},
	{
		id: 4,
		img: imgExpert4,
		name: 'Maria Sanchez',
		profession: 'Art Director',
		description:
			'Oversees visual direction and execution of creative projects, skilled in design and collaboration with clients.',
	},
	{
		id: 5,
		img: imgExpert1,
		name: 'Olivia Kim',
		profession: 'Digital Illustrator',
		description:
			'Creates stunning digital illustrations using traditional art techniques and digital software.',
	},
	{
		id: 6,
		img: imgExpert2,
		name: 'Marcus Thompson',
		profession: 'Graphic Designer',
		description:
			'Versatile designer, creates visuals that communicate brand message clearly and effectively.',
	},
	{
		id: 7,
		img: imgExpert3,
		name: 'Xavier Nguyen',
		profession: 'Branding Specialist',
		description:
			'Helps companies establish a strong brand identity through effective design and strategy, skilled in market trends and consumer behavior.',
	},
	{
		id: 8,
		img: imgExpert4,
		name: 'Maria Sanchez',
		profession: 'Art Director',
		description:
			'Oversees visual direction and execution of creative projects, skilled in design and collaboration with clients.',
	},
];

export const HomeCarousel = () => {
	const slideRef = useRef();
	const [slidePosition, setSlidePosition] = useState({
		isFirst: true,
		isLast: false,
	});

	function clickNext() {
		slideRef.current.swiper.slideNext();
	};

	function clickPrev() {
		slideRef.current.swiper.slidePrev();
	};

	function onSlideChange(swiper) {
		setSlidePosition({
			isFirst: swiper.isBeginning,
			isLast: swiper.isEnd
		});
	};

	return (
		<div id="carousel-container" className="w-full mt-12">
			<Swiper
				slidesPerView={1}
				spaceBetween={28}
				className="mySwiper"
				ref={slideRef}
				onSlideChange={onSlideChange}
				navigation={false}
				modules={[Navigation]}
				breakpoints={{
					0: {
						slidesPerView: 1,
					},
					430: {
						slidesPerView: 1.5,
						spaceBetween: 20,
					},
					500: {
						slidesPerView: 2,
						slidesPerGroup: 2,
						spaceBetween: 28,
					},
					768: {
						slidesPerView: 2.5,
						slidesPerGroup: 2,
					},
					840: {
						slidesPerView: 3,
						slidesPerGroup: 3,
					},
					1000: {
						slidesPerView: 3.5,
						slidesPerGroup: 3,
					},
					1140: {
						slidesPerView: 4,
						slidesPerGroup: 4,
					},
					1280: {
						slidesPerView: 4.5,
						slidesPerGroup: 4,
					},
				}}
			>
				{experts.map(({ id, img, name, profession, description }) => {
					return (
						<SwiperSlide key={`expert${id}`}>
							<HomeCarouselCard id={id}
								img={img}
								name={name}
								profession={profession}
								description={description}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<div className="w-full flex justify-end mt-7 gap-2">
				{slidePosition.isFirst ? (
					<ButtonDisabled arrow="reverse" text="" />
				) : (
					<ButtonCapsule arrow="reverse" theme="light" text="" onClick={clickPrev} />
				)}
				{slidePosition.isLast ? (
					<ButtonDisabled arrow={true} text="" />
				) : (
					<ButtonCapsule arrow={true} theme="light" text="" onClick={clickNext} />
				)}
			</div>
		</div>
	);
};
