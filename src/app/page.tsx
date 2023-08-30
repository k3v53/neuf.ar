import localFont from 'next/font/local';
import CallToAction from './sections/call-to-action';
import LandingHero from './sections/hero';
import JoinUs from './sections/join-us';
import LandingMembers from './sections/landing-members';
import LandingQuote from './sections/landing-quote';
import Footer from './sections/footer';
const logoFont = localFont({ src: './Bord.ttf' });

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-0 m-0">
			<LandingHero {...logoFont} />
			<JoinUs />
			<LandingQuote />
			<LandingMembers />
			<CallToAction />
			<Footer />
		</main>
	);
}
