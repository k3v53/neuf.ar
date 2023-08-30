import Image from 'next/image';

export default function LandingEvent(props: {
	name: string;
	date: string;
	imgSrc: string;
}) {
	const { name, date, imgSrc } = props;
	return (
		<div
			className="
        p-10 rounded-xl w-full
      bg-accent bg-opacity-30
        flex flex-col md:flex-row
        gap-5
        justify-between
      "
		>
			<Image
				className="
          rounded-xl
        "
				src={imgSrc}
				width={80}
				height={80}
				alt="Foto del Evento"
			/>
			<div className="flex flex-col w-full">
				<h3 className="text-xl text-primary text-opacity-90">{name}</h3>
				<p className="text-accent text-opacity-40">{date}</p>
			</div>
		</div>
	);
}
