const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  async rewrites() {
    return [{ source: '/', destination: '/index.html' }];
  },
};

module.exports = nextConfig;

