const isProd = process.env.NODE_ENV = 'production';
const nextConfig = {
  basePath: isProd ? '/nextjs-blog-deployment' : '',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
 },

images:{domains: ["images: remotePatterns", "https://tomaslonnblad.github.io/",
// images.unsplash.com 
]},


  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}
 
module.exports = nextConfig




