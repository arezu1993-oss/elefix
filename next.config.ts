/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true, // باعث می‌شود پوشه‌ها به فرم /contact/index.html ساخته شوند
  images: {
    unoptimized: true, // برای خروجی استاتیک در نتلیفای ضروری است
  },
};

module.exports = nextConfig;
