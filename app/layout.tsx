'use client';
// import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Provider } from 'react-redux';
import { store } from './store';

import './globals.css';
import 'react-datepicker/dist/react-datepicker.css';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
// 	title: 'Create Next App',
// 	description: 'Generated by create next app',
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Provider store={store}>{children}</Provider>
				{/* {children} */}
			</body>
		</html>
	);
}
