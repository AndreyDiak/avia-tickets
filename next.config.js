/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/avia',
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
