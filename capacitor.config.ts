import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.0e094b1e632f465f87e53b05ca822220',
  appName: 'urban-spotter',
  webDir: 'dist',
  server: {
    url: 'https://0e094b1e-632f-465f-87e5-3b05ca822220.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    Camera: {
      permissions: ['camera', 'photos']
    }
  }
};

export default config;