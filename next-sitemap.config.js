module.exports = {
    siteUrl: process.env.SITE_URL,
    exclude: ["/404"],
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                disallow: ["/404", '/thirdpartylicenses.txt'],
            }
        ]
    },
};