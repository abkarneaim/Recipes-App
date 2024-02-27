import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.react.delicies',
  appName: 'delicies',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
