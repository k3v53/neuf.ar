import LandingEvent from '../widgets/landing-event';

export default function LandingEvents() {
	const events = [
		{
			name: 'Santiago Programa',
			date: '05/2022',
			imgSrc: '/img/events/SgoProBanner.png',
		},
		{
			name: 'Visita del 1er Encuentro de Economía del Conocimiento',
			date: '09/2022',
			imgSrc: '/img/events/ForoRegionalCba.jpg',
		},
		{
			name: 'ComIT',
			date: '11/2022',
			imgSrc: '/img/events/ComITBanner.png',
		},
		{
			name: 'ComIT',
			date: '05/2023',
			imgSrc: '/img/events/ComITBanner.png',
		},
		{
			name: 'Expo Santiago',
			date: '09/2023',
			imgSrc: '/img/events/ExpoSantiago.jpg',
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
