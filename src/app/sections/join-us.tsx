import { NextFont } from '@next/font';

export default function JoinUs(logoFont: NextFont) {
	return (
		<section
			className="p-20 bg-secondary bg-center bg-cover w-full"
			style={{
				backgroundImage: `url(https://framerusercontent.com/images/f1BAtlf3U31FyMbsIKxRTIw6I.jpg)`,
			}}
		>
			<div
				className="
			flex flex-wrap
			md:flex-nowrap
			bg-black bg-opacity-75 p-5 rounded-3xl gap-14 text-primary items-center justify-evenly
			md:py-16
			md:px-24
			drop-shadow-md
			transition-all
			hover:text-accent
			hover:bg-opacity-95
			"
			>
				<h1 className="sm:text-6xl text-3xl font-bold flex-1 ">
					Únete a <span className={logoFont.className}>NEUF.AR</span>
				</h1>
				<p className=" text-xl flex-1">
					Ser parte de Neufar significa sumergirse en un mundo lleno de
					innovación y descubrimientos. Nuestra comunidad te brinda la
					oportunidad de colaborar en proyectos emocionantes y aprender de los
					más destacados profesionales del sector.
				</p>
			</div>
		</section>
	);
}
