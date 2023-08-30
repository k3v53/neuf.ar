import LandingMember from '../widgets/landing-member';

export default function LandingMembers() {
	const members = [
		{
			name: 'Antonella',
			title: 'CEO',
			src: '/img/members/anto.png',
		},
		{
			name: 'Kevin',
			title: 'CTO',
			src: '/img/members/kevin.jpg',
		},
		{ name: 'Rocio', title: 'CMO', src: '' },
		{ name: 'Gastón', title: 'CMO', src: '' },
	];
	return (
		<section className="flex flex-wrap px-16 py-52 gap-10 justify-evenly w-full">
			{members.map((item, index) => (
				<LandingMember key={index} {...item} />
			))}
		</section>
	);
}
