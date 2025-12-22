import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {
  Alert, Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar, StyleSheet, Text,
  TextInput,
  View
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from "../constants/theme";
import { hp } from '../helpers/common';
import { supabase } from '../lib/supabase';

const LoginScreen = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = async () => {
    const email = emailRef.current.trim();
    const password = passwordRef.current.trim();

    if (!email || !password) {
      const msg = "Please fill all the fields!";
      Platform.OS === 'web' ? window.alert(msg) : Alert.alert('Error', msg);
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (error) Alert.alert('Login Error', error.message);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>

        {/* Header - Tightened height */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Icon name="chevron-left" size={28} color={theme.colors.textPrimary} />
          </Pressable>
          <Text style={styles.screenTitle}>Login</Text>
        </View>

        <ScrollView 
          contentContainerStyle={styles.scrollContent} 
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Top Branding - Scaled down for better fit */}
          <View style={styles.brandSection}>
            <View style={styles.iconCircle}>
              <Icon name="account-group" size={40} color={theme.colors.primary} />
            </View>
            <Text style={styles.welcomeTitle}>Welcome Back</Text>
            <Text style={styles.welcomeSubtitle}>Sign in to continue your spiritual journey</Text>
          </View>

          {/* Form - Grouped tighter */}
          <View style={styles.formContainer}>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email Address</Text>
              <View style={styles.inputWrapper}>
                <Icon name="email-outline" size={20} color={theme.colors.textSecondary} />
                <TextInput
                  style={styles.textInput}
                  placeholder="name@example.com"
                  placeholderTextColor={theme.colors.textSecondary + '70'}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={value => emailRef.current = value}
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Password</Text>
              <View style={styles.inputWrapper}>
                <Icon name="lock-outline" size={20} color={theme.colors.textSecondary} />
                <TextInput
                  style={styles.textInput}
                  placeholder="••••••••"
                  placeholderTextColor={theme.colors.textSecondary + '70'}
                  secureTextEntry
                  onChangeText={value => passwordRef.current = value}
                />
              </View>
              <Pressable style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </Pressable>
            </View>

          </View>

          {/* Action Area */}
          <View style={styles.actionContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.loginButton,
                { transform: [{ scale: pressed ? 0.98 : 1 }] }
              ]}
              onPress={handleLogin}
              disabled={loading}
            >
              <Text style={styles.loginButtonText}>
                {loading ? "Please wait..." : "Login"}
              </Text>
            </Pressable>

            <View style={styles.footer}>
              <Text style={styles.footerText}>Don't have an account? </Text>
              <Pressable onPress={() => router.push('signUp')}>
                <Text style={styles.footerLink}>Sign Up</Text>
              </Pressable>
            </View>
          </View>
          
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 50, // Fixed height for a cleaner top bar
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  screenTitle: {
    flex: 1,
    fontSize: 17,
    fontWeight: theme.fonts.bold,
    color: theme.colors.textPrimary,
    textAlign: 'center',
    marginRight: 40, 
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingBottom: 30,
  },
  brandSection: {
    alignItems: 'center',
    marginTop: hp(2),
    marginBottom: hp(4),
  },
  iconCircle: {
    width: 70,
    height: 70,
    backgroundColor: theme.colors.cardBackground,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 8,
    borderWidth: 1,
    borderColor: theme.colors.textSecondary + '10',
  },
  welcomeTitle: {
    fontSize: hp(5),
    fontWeight: theme.fonts.bold,
    color: theme.colors.textPrimary,
    textAlign: 'center',
  },
  welcomeSubtitle: {
    fontSize: 15,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginTop: 5,
  },
  formContainer: {
    gap: 14, // Consistent spacing between email and password blocks
  },
  inputGroup: {
    width: '100%',
  },
  inputLabel: {
    fontSize: 14,
    color: theme.colors.textPrimary,
    fontWeight: theme.fonts.medium,
    marginBottom: 8,
    marginLeft: 2,
    opacity: 0.9,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.radius.lg,
    paddingHorizontal: 16,
    height: 56, // Fixed height for consistency
    borderWidth: 1.5,
    borderColor: 'transparent', // Default state
    // If you have a primary color, you could toggle border color on focus
  },
  textInput: {
    flex: 1,
    color: theme.colors.textPrimary,
    fontSize: 16,
    marginLeft: 12,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    paddingVertical: 8,
  },
  forgotPasswordText: {
    color: theme.colors.textAccent,
    fontSize: 13,
    fontWeight: theme.fonts.semibold,
  },
  actionContainer: {
    marginTop: hp(4),
    width: '100%',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: theme.colors.primary,
    width: '100%',
    height: 56,
    borderRadius: theme.radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 6,
  },
  loginButtonText: {
    color: theme.colors.textPrimary,
    fontSize: 16,
    fontWeight: theme.fonts.bold,
    letterSpacing: 0.5,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 25,
  },
  footerText: {
    color: theme.colors.textSecondary,
    fontSize: 15,
  },
  footerLink: {
    color: theme.colors.textAccent,
    fontWeight: theme.fonts.bold,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;