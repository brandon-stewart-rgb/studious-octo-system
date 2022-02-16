import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
    <nav className='header'>
      <div>
        <Link href='/'>
          <a>Brandon's Kitchen🍅 </a>
        </Link>
      </div>
    </nav>
			<main>
        {/* bringing in all info and displaying */}
				<Component {...pageProps} />
			</main>
		</>
	);
}

export default MyApp;
