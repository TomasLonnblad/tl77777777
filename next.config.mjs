/** @type {import('next').NextConfig} */
const nextConfig = {

images:{domains: ["images: remotePatterns", "https://tomaslonnblad.github.io/",
// images.unsplash.com 

//  images: {
  //  remotePatterns: [
  
]},



  reactCompiler: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },


  
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/default",
        permanent: false,
      },



    ];
  },

  sassOptions: {
    implementation: 'sass-embedded'
  }

};
export default nextConfig;
