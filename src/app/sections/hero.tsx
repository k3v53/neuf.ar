import { NextFont } from '@next/font';
import Image from 'next/image';

export default function LandingHero(logoFont: NextFont) {
	return (
		<section
			className="
			flex flex-col
			items-center justify-center
			min-h-screen
			bg-primary text-accent
			w-full gap-5 p-10 md:p-24
		"
		>
			<div className="flex flex-wrap items-center justify-center gap-5">
				<Image
					src="/ranita.svg"
					alt="Logo Neuf.ar"
					className="dark:invert
						animate-up-and-down
					"
					width={300}
					height={300}
					priority
				/>
				<h1 className={'sm:text-8xl text-4xl ' + logoFont.className}>
					NEUF.AR
				</h1>
			</div>
			<div className="h-36"></div>
			<h1 className={'lg:text-8xl sm:text-5xl text-2xl  ' + logoFont.className}>
				Se parte de
			</h1>
			<h1
				className={
					'lg:text-8xl sm:text-5xl text-2xl bg-accent text-primary rounded-xl p-4 ' +
					logoFont.className
				}
			>
				la tecnologia<span className="animate-pulse-cursor text-black">|</span>
			</h1>
		</section>
	);
}
