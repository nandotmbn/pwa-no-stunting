const withImages = require("next-images");
const withPWA = require("next-pwa")({
	dest: "public",
	register: true,
	skipWaiting: true,
});


module.exports = withPWA(
		withImages({
			images: {
				disableStaticImages: true,
				domains: ["localhost"],
			},
		})
);
