
import React from 'react';
import { Pressable, Text, Platform } from 'react-native';
import { auth } from '../../lib/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function GoogleButton() {
  const onPress = async () => {
    try {
      if (Platform.OS !== 'web') {
        alert('Google login Web-only në këtë version. (Native kërkon OAuth client IDs)');
        return;
      }
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (e) {
      console.error('Google sign-in error:', e);
      alert(e.message || 'Google sign-in failed');
    }
  };

  return (
    <Pressable onPress={onPress} style={{ backgroundColor: '#fff', borderWidth: 1, borderRadius: 10, padding: 14 }}>
      <Text style={{ textAlign: 'center', fontWeight: '600' }}>Vazhdo me Google</Text>
    </Pressable>
  );
}
