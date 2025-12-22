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

const SignupScreen = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const handleSignup = async () => {
    const name = nameRef.current.trim();
    const email = emailRef.current.trim();
    const password = passwordRef.current.trim();
    const confirmPassword = confirmPasswordRef.current.trim();

    if (!name || !email || !password) {
      const msg = "Please fill all the fields!";
      Platform.OS === 'web' ? window.alert(msg) : Alert.alert('Error', msg);
      return;
    }

    setLoading(true);

    const { data: { session }, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name: name } }
    });

    setLoading(false);

    if (error) {
      Alert.alert('Sign Up Error', error.message);
    } else {
      console.log('Signup successful');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} />
      <View style={styles.container}>
        
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Icon name="chevron-left" size={30} color={theme.colors.textPrimary} />
          </Pressable>
          <Text style={styles.screenTitle}>SIGNUP</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <Text style={styles.welcomeTitle}>Join Our faithful community</Text>
          <Text style={styles.welcomeSubtitle}>
            Create an account to share your testimony, study the word and connect with believers.
          </Text>

          {/* Form Container */}
          <View style={styles.formContainer}>
            
            {/* Full Name Field */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Full Name</Text>
              <View style={styles.inputContainer}>
                <Icon name="account-outline" size={22} color={theme.colors.textSecondary} style={styles.inputIcon} />
                <TextInput
                  style={styles.textInput}
                  placeholder="e.g John Doe"
                  placeholderTextColor={theme.colors.textSecondary}
                  onChangeText={value => nameRef.current = value}
                />
              </View>
            </View>

            {/* Email Field */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email Address</Text>
              <View style={styles.inputContainer}>
                <Icon name="email-outline" size={22} color={theme.colors.textSecondary} style={styles.inputIcon} />
                <TextInput
                  style={styles.textInput}
                  placeholder="e.g johndoe@gmail.com"
                  placeholderTextColor={theme.colors.textSecondary}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={value => emailRef.current = value}
                />
              </View>
            </View>

            {/* Password Field */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Password</Text>
              <View style={styles.inputContainer}>
                <Icon name="lock-outline" size={22} color={theme.colors.textSecondary} style={styles.inputIcon} />
                <TextInput
                  style={styles.textInput}
                  placeholder="At least 6 characters"
                  placeholderTextColor={theme.colors.textSecondary}
                  secureTextEntry
                  onChangeText={value => passwordRef.current = value}
                />
              </View>
            </View>

          </View>

          <Pressable
            style={({ pressed }) => [
              styles.signupButton,
              { opacity: pressed || loading ? 0.8 : 1 }
            ]}
            onPress={handleSignup}
            disabled={loading}
          >
            <Text style={styles.signupButtonText}>
              {loading ? "Creating Account..." : "Sign up"}
            </Text>
          </Pressable>

          {/* Footer links */}
          <View style={styles.loginLinkContainer}>
            <Text style={styles.loginLinkText}>Already have an account? </Text>
            <Pressable onPress={() => router.push('login')}>
              <Text style={styles.loginLinkHighlight}>Login</Text>
            </Pressable>
          </View>

          <Text style={styles.termsText}>
            By signing up, you agree to our{' '}
            <Text style={styles.linkText}>Terms of Service</Text> and{' '}
            <Text style={styles.linkText}>Privacy Policy</Text>
          </Text>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 5,
  },
  screenTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: theme.fonts.bold,
    color: theme.colors.textPrimary,
    textAlign: 'center',
    marginRight: 40,
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingTop: 10,
    paddingBottom: 40,
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.textPrimary,
    textAlign: 'center',
    marginBottom: 10,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: 30,
  },
  formContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20, // Space between different input sections
    width: '100%',
  },
  inputLabel: {
    fontSize: 15,
    color: theme.colors.textSecondary,
    fontWeight: theme.fonts.semibold,
    marginBottom: 6,
    marginLeft: 4, // Slight offset to align with icon
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.radius.md,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: theme.colors.textSecondary + '20',
  },
  inputIcon: {
    marginRight: 12,
  },
  textInput: {
    flex: 1,
    color: theme.colors.textPrimary,
    fontSize: 16,
    paddingVertical: 14,
  },
  signupButton: {
    backgroundColor: theme.colors.primary,
    width: '100%',
    paddingVertical: 18,
    borderRadius: theme.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 6,
  },
  signupButtonText: {
    color: theme.colors.textPrimary,
    fontSize: 18,
    fontWeight: theme.fonts.bold,
  },
  loginLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginLinkText: {
    color: theme.colors.textSecondary,
    fontSize: 15,
  },
  loginLinkHighlight: {
    color: theme.colors.textAccent,
    fontWeight: theme.fonts.semibold,
    textDecorationLine: 'underline',
  },
  termsText: {
    color: theme.colors.textSecondary,
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
  },
  linkText: {
    color: theme.colors.textAccent,
    fontWeight: theme.fonts.semibold,
  },
});

export default SignupScreen;