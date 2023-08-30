import { Philosopher } from 'next/font/google';
import localFont from 'next/font/local';
import CallToAction from './sections/call-to-action';
import Footer from './sections/footer';
import LandingHero from './sections/hero';
import JoinUs from './sections/join-us';
import LandingMembers from './sections/landing-members';
import LandingQuote from './sections/landing-quote';
const logoFont = localFont({ src: './Bord.ttf', variable: '--logo-font' });
const headingFont = Philosopher({
	weight: '700',
	subsets: ['latin'],
	variable: '--heading-font',
});
const paragraphFont = Philosopher({
	weight: '400',
	subsets: ['latin'],
	variable: '--paragraph-font',
});

export default function Home() {
	return (
		<main
			className={`
			flex min-h-screen 
			flex-col
			items-center justify-between
			p-0 m-0
			${logoFont.variable}
			${headingFont.variable}
			${paragraphFont.variable}
			`}
		>
			<LandingHero {...logoFont} />
			<JoinUs {...logoFont} />
			<LandingQuote />
			<LandingMembers />
			<CallToAction {...logoFont} />
			<Footer />
		</main>
	);
}
