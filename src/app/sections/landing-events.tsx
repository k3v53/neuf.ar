import LandingEvent from '../widgets/landing-event';

export default function LandingEvents() {
	const events = [
		{
			name: 'Santiago Programa',
			date: '01/02/2022',
			imgSrc:
				'https://framerusercontent.com/images/85HmKXf8gGODLkZ9EUx5XcmY7eE.jpg',
		},
		{
			name: 'ComIT',
			date: '01/08/2022',
			imgSrc:
				'https://framerusercontent.com/images/85HmKXf8gGODLkZ9EUx5XcmY7eE.jpg',
		},
		{
			name: 'Expo Santiago',
			date: '30/08/2023',
			imgSrc:
				'https://framerusercontent.com/images/85HmKXf8gGODLkZ9EUx5XcmY7eE.jpg',
		},
	];
	return (
		<section
			className="
        flex flex-wrap gap-4 justify-evenly w-full
        p-10 py-20
        md:px-20
      "
		>
			{events.map((val, i) => LandingEvent(val))}
		</section>
	);
}
