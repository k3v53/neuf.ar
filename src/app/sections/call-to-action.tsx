import { NextFont } from '@next/font';
import Image from 'next/image';

export default function CallToAction(logoFont: NextFont) {
	return (
		<div className="flex flex-col items-center space-y-4 bg-primary bg-opacity-95 p-10 w-full text-black">
			<div className="w-64 h-64 relative rounded-full">
				<Image
					src="https://framerusercontent.com/images/p2q5PIb8UfvdJCCjwog4cOxVc.svg"
					layout="fill"
					className="dark animate-up-and-down"
					objectFit="cover"
					alt="Logo"
				/>
			</div>
			<h2
				className={`
					text-center font-bold
					sm:text-6xl
					text-2xl
					bg-black text-primary
					rounded-xl p-4
					${logoFont.className}
				`}
			>
				Animate ya
			</h2>
			<p className="text-center leading-relaxed text-lg w-72">
				No te quedes fuera de esta increíble aventura tecnológica. Únete a
				nuestra comunidad hoy y descubre un mundo lleno de oportunidades y
				conexiones.
			</p>
			<div className="hover:shadow-md shadow-sm transition-all flex flex-wrap justify-evenly bg-black bg-opacity-25 p-4 rounded-2xl gap-5 px-10">
				<div className="w-16 h-16 relative rounded-full">
					<Image
						src="https://logo.clearbit.com/spotify.com?size=500"
						layout="fill"
						objectFit="cover"
						className="rounded-full"
						alt="Logo"
					/>
				</div>
				<a
					className="m-0"
					href="https://www.instagram.com/comit.sde/"
					target="_blank"
					rel="noopener"
				>
					<div className="w-16 h-16 relative rounded-full">
						<Image
							src="https://logo.clearbit.com/Instagram.com?size=500"
							layout="fill"
							objectFit="cover"
							className="rounded-full"
							alt="Logo"
						/>
					</div>
				</a>
				<a href="https://discord.gg/UK2hM9JttQ" target="_blank" rel="noopener">
					<div className="w-16 h-16 relative rounded-full">
						<Image
							src="https://logo.clearbit.com/Discord.com?size=500"
							layout="fill"
							objectFit="cover"
							className="rounded-full"
							alt="Logo"
						/>
					</div>
				</a>
				<div className=" w-16 h-16 relative rounded-full">
					<Image
						src="https://logo.clearbit.com/Twitch.com?size=500"
						layout="fill"
						objectFit="cover"
						className="rounded-full"
						alt="Logo"
					/>
				</div>
			</div>
		</div>
	);
}
