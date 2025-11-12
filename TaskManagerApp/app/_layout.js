// app/_layout.js
import { Stack } from 'expo-router';
import { AuthProvider } from '../hooks/useAuth';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export default function RootLayout() {
  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerTitle: 'Task Manager App' }} />
    </AuthProvider>
  );
}
