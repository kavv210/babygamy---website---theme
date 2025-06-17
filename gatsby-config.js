module.exports = {
  siteMetadata: {
    title: `BabyGamy`,
    siteUrl: `https://www.babygamy.com`,
  },
  plugins: [ {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Space Grotesk\:300,400,500,600`, 
        `Pacifico`, 
        `Manrope\:400,600`
      ],
      display: 'swap'
    },
  },],
};
