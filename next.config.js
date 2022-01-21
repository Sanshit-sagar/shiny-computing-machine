
const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
    unstable_staticImage: true
});

module.exports = {
    i18n: {
        locales: [
            "en-US", 
            "es-ES"
        ],
        defaultLocale: "en-US",
    },
    images: {
        domains: ['avatar.uimaterial.com'],
    },
}
    
//     {
//     i18n: {
//         locales: ["en-US", "zh-CN", "es-ES", "ja", "ko"],
//         defaultLocale: "en-US",
//     },
//     redirects: () => {
//       return [{
//             source: "/docs",
//             destination: "/docs/button",
//             statusCode: 301,
//         },
//     ]}
// });

// const nextra = require('nextra')

// module.exports = nextra('./components/layout.js')({
//   experimental: {
//     turboMode: true,
//   },
//   images: {
//     domains: ['pbs.twimg.com', 'abs.twimg.com'],
//   },
//   headers() {
//     return [
//       {
//         source: '/atom/:nested*',
//         headers: [
//           {
//             key: 'content-type',
//             value: 'text/xml',
//           },
//         ],
//       },
//     ];
//   },
// });
