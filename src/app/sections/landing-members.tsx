import LandingMember from '../widgets/landing-member';

export default function LandingMembers() {
	const members = [
		{
			name: 'Antonella',
			title: 'Coordinadora de Eventos',
			src: '/img/members/anto.png',
		},
		{
			name: 'Kevin',
			title: 'Director de Contenidos',
			src: '/img/members/kevin.jpg',
		},
		{ name: 'Rocío', title: 'Estratega de Marca Digital', src: '' },
		{ name: 'Gastón', title: 'Promotor de Comunidad', src: '' },
	];
	return (
		<section className="flex flex-wrap px-16 py-52 gap-10 justify-evenly w-full bg-contrast bg-opacity-10 bg-center bg-cover">
			{members.map((item, index) => (
				<LandingMember key={index} {...item} />
			))}
		</section>
	);
}
