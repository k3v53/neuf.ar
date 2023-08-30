import Image from 'next/image';

export default function CallToAction() {
	return (
		<div className="flex flex-col items-center space-y-4 bg-primary bg-opacity-95 p-10 w-full">
			<div className="w-64 h-64 relative rounded-full">
				<Image
					src="https://framerusercontent.com/images/p2q5PIb8UfvdJCCjwog4cOxVc.svg"
					layout="fill"
					className="dark:invert"
					objectFit="cover"
					alt="Logo"
				/>
			</div>
			<div className="text-center">
				<h2 className="text-4xl font-bold text-6xl">Anímate ya</h2>
			</div>
			<div className="text-center">
				<p className="leading-relaxed">
					No te quedes fuera de esta increíble aventura tecnológica. Únete a
					nuestra comunidad hoy y descubre un mundo lleno de oportunidades y
					conexiones.
				</p>
			</div>
			<div className="flex space-x-4 bg-black bg-opacity-25 p-4 rounded-2xl gap-5 px-10">
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
				<div className="w-16 h-16 relative rounded-full">
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
