import Image from 'next/image';

export default function LandingMember(props: {
	name: string;
	title: string;
	src: string;
}) {
	const { name, title, src } = props;
	return (
		<div className="flex flex-col items-center gap-6">
			<Image
				className="rounded-full aspect-square"
				src={src}
				alt=""
				// layout="fill"
				width={100}
				height={100}
				objectFit="cover"
				objectPosition="center center"
				sizes="80px"
				quality={100}
				loading="lazy"
			/>
			<div className="flex flex-col gap-2 items-center">
				<h3
					style={{
						fontFamily: 'Climate Crisis, sans-serif',
						fontSize: '20px',
						lineHeight: '1.4em',
						textAlign: 'center',
						textTransform: 'uppercase',
					}}
					className="text-primary opacity-75 uppercase font-bold text-xl "
				>
					{name}
				</h3>
				<p
					style={{
						fontFamily: 'Golos Text, Golos Text Placeholder, sans-serif',
						lineHeight: '1.5em',
						textAlign: 'center',
						color: 'rgb(104, 216, 214)',
					}}
					className="framer-text"
				>
					{title}
				</p>
			</div>
		</div>
	);
}
