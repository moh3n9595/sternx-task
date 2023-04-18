import {Lato} from 'next/font/google';

import {Head} from '@sternx/common';
import {Layout} from '@sternx/layouts';
import {AppProps} from '@sternx/types';
import '@sternx/styles/globals.css';

const lato = Lato({weight: ['100', '300', '400', '700', '900'], subsets: ['latin']});

const App = ({Component, pageProps}: AppProps) => {
	return (
		<>
			<style jsx global>{`
				html {
					font-family: ${lato.style.fontFamily};
				}
			`}</style>
			<Head ns={Component?.ns} />
			<Layout type={Component?.layout} ns={Component?.ns}>
				<Component {...pageProps} />
			</Layout>
		</>
	);
};

export default App;
