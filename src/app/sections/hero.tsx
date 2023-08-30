import { NextFont } from '@next/font';
import Image from 'next/image';

export default function LandingHero(logoFont: NextFont) {
	return (
		<section className="flex flex-col items-center justify-center h-screen bg-primary w-full gap-5 text-accent">
			<div className="flex flex-wrap items-center justify-center gap-5">
				<Image
					src="/ranita.svg"
					alt="Logo Neuf.ar"
					className="dark:invert"
					width={300}
					height={300}
					priority
				/>
				<h1 className={'text-8xl  ' + logoFont.className}>NEUF.AR</h1>
			</div>
			<div className="h-36"></div>
			<h1 className={'text-8xl ' + logoFont.className}>Se parte de</h1>
			<h1
				className={
					'text-8xl bg-accent text-primary rounded-xl p-4 break-words break-before-all ' +
					logoFont.className
				}
			>
				la tecnologia
			</h1>
		</section>
	);
}
