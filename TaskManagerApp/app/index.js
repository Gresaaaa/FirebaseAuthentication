// app/index.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import GoogleButton from './(components)/GoogleButton';
import { useAuth } from '../hooks/useAuth';

export default function Index() {
  const { user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user) router.replace('/home');
  }, [user]);

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email.trim(), password);
      Alert.alert('Sukses', 'Përdoruesi u krijua!');
    } catch (e) {
      Alert.alert('Gabim', e.message);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      Alert.alert('Sukses', 'Përdoruesi hyri!');
    } catch (e) {
      Alert.alert('Gabim', e.message);
    }
  };

  return (
    <View style={{ flex: 1, padding: 24, gap: 12, justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: '600', marginBottom: 12 }}>Mirësevjen 👋</Text>

      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, borderRadius: 10, padding: 12 }}
      />

      <TextInput
        placeholder="Fjalëkalimi"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, borderRadius: 10, padding: 12 }}
      />

      <Pressable onPress={handleLogin} style={{ backgroundColor: '#111', padding: 14, borderRadius: 10 }}>
        <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>Hyr</Text>
      </Pressable>

      <Pressable onPress={handleSignUp} style={{ backgroundColor: '#ffd000', padding: 14, borderRadius: 10 }}>
        <Text style={{ color: '#111', textAlign: 'center', fontWeight: '700' }}>Regjistrohu</Text>
      </Pressable>

      <View style={{ height: 8 }} />
      <GoogleButton />

      <View style={{ marginTop: 16 }}>
        <Text style={{ opacity: 0.6, textAlign: 'center' }}>Ose vazhdo pa llogari (demo)</Text>
        <Link href="/home" style={{ textAlign: 'center', color: '#007aff', marginTop: 6 }}>Shko në Home</Link>
      </View>
    </View>
  );
}
