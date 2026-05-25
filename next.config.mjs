/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/class/manus-ai-online", destination: "/manus/online", permanent: true },
      { source: "/class/manus-ai-seminar", destination: "/manus/seminar", permanent: true },
      { source: "/class/manus-ai-private", destination: "/private", permanent: true },
    ];
  },
};

export default nextConfig;
