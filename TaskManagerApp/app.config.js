
module.exports = {
  name: 'TaskManagerApp',
  slug: 'task-manager-app',
  scheme: process.env.EXPO_PUBLIC_APP_SCHEME || 'taskmanager',
  ios: {
    bundleIdentifier: 'com.yourname.taskmanager',
  },
  android: {
    package: 'com.yourname.taskmanager',
  },
  experiments: {
    typedRoutes: true,
  },
  plugins: ['expo-router'],
};
