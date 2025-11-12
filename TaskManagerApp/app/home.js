// app/home.js
import React from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';
import { router } from 'expo-router';

export default function Home() {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace('/');
    } catch (e) {
      Alert.alert('Gabim', e.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}>
      <Text style={{ fontSize: 22, fontWeight: '700' }}>Home ✅</Text>
      <Text style={{ marginTop: 8 }}>I kyçur si: {user?.email || 'Google user'}</Text>

      <Pressable onPress={handleLogout} style={{ marginTop: 16, backgroundColor: '#111', padding: 12, borderRadius: 10 }}>
        <Text style={{ color: '#fff' }}>Dil</Text>
      </Pressable>
    </View>
  );
}
