import { useRouter } from "expo-router";
import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ScreenWrapper from "../components/ScreenWrapper";
import { theme } from "../constants/theme";

const Welcome = () => { 
   const router = useRouter();


  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} />
      
      {/* <View style={styles.mainContainer}> */}
      <ScreenWrapper>
        
        {/* SECTION 1: Top Branding & Text */}
        <View style={styles.topSection}>
          <View style={styles.topIconContainer}>
            <Icon name="account-group" size={100} color={theme.colors.primary} />
            <View style={styles.plusIconBackground}>
              <Icon name="plus" size={24} color={theme.colors.textPrimary} />
            </View>
          </View>

          <View style={styles.textSection}>
            <Text style={styles.appTitle}>ChristianTalk</Text>
            <Text style={styles.taglinePrimary}>Connect in faith.</Text>
            <Text style={styles.taglineSecondary}>Let the word of Christ dwell in you richly in all wisdom.</Text>
          </View>
        </View>

        {/* SECTION 2: Feature Buttons (Bottom) */}
        <View style={styles.bottomSection}>
          <View style={styles.featureButtonsContainer}>
            <TouchableOpacity style={styles.featureButton}>
              <Icon name="book-open-variant" size={18} color={theme.colors.primary} style={styles.featureIcon} />
              <Text style={styles.featureButtonText}>BIBLE STUDY</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.featureButton}>
              <Icon name="hand-prayer" size={18} color={theme.colors.primary} style={styles.featureIcon} />
              <Text style={styles.featureButtonText}>PRAYER</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.featureButton}>
              <Icon name="comment-account" size={18} color={theme.colors.primary} style={styles.featureIcon} />
              <Text style={styles.featureButtonText}>COMMUNITY</Text>
            </TouchableOpacity>
          </View>

        {/* SECTION 3: Action Buttons (Middle) */}
        <View style={styles.actionButtonsContainer}>
          <Pressable 
          onPress={()=> router.push('signUp')}
          style={styles.createAccountButton}>
            <Text style={styles.createAccountButtonText}>Create an Account</Text>
            <Icon name="arrow-right" size={20} color={theme.colors.textPrimary} style={styles.arrowIcon} />
          </Pressable>

          <Pressable
           onPress={()=> router.push('login')}
          style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </Pressable>
        </View>

        

          {/* Footer Text */}
          <Text style={styles.termsText}>
            By continuing, you agree to our{' '}
            <Text style={styles.linkText}>Terms of Service</Text> and{' '}
            <Text style={styles.linkText}>Privacy Policy</Text>
          </Text>
        </View>
        
        </ScreenWrapper>
      {/* </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between', // Spreads the 3 sections evenly
    paddingHorizontal: 25,
    paddingVertical: 30,
  },
  topSection: {
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  topIconContainer: {
    width: 130,
    height: 130,
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.radius.xxl,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  plusIconBackground: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.circular,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: theme.colors.textPrimary,
  },
  textSection: {
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 32,
    fontWeight: theme.fonts.bold,
    color: theme.colors.textPrimary,
    marginBottom: 8,
  },
  taglinePrimary: {
    fontSize: 20,
    fontWeight: theme.fonts.medium,
    color: theme.colors.textPrimary,
    textAlign: 'center',
  },
  taglineSecondary: {
    fontSize: 15,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 22,
  },
  actionButtonsContainer: {
    width: '100%',
  },
  createAccountButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    paddingVertical: 16,
    borderRadius: theme.radius.md,
    marginBottom: 12,
  },
  createAccountButtonText: {
    color: theme.colors.textPrimary,
    fontSize: 17,
    fontWeight: theme.fonts.bold,
    marginRight: 10,
  },
  loginButton: {
    backgroundColor: theme.colors.cardBackground,
    paddingVertical: 16,
    borderRadius: theme.radius.md,
    alignItems: 'center',
  },
  loginButtonText: {
    color: theme.colors.textPrimary,
    fontSize: 17,
    fontWeight: theme.fonts.bold,
  },
  bottomSection: {
    width: '100%',
    alignItems: 'center',
  },
  featureButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  featureButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.primary + '40',
    borderRadius: theme.radius.lg,
    paddingVertical: 6,
    paddingHorizontal: 12,
    margin: 4,
  },
  featureButtonText: {
    color: theme.colors.primary,
    fontSize: 11,
    fontWeight: theme.fonts.semibold,
  },
  featureIcon: {
    marginRight: 6,
  },
  termsText: {
    color: theme.colors.textSecondary,
    fontSize: 12,
    textAlign: 'center',
    marginTop:10
  },
  linkText: {
    color: theme.colors.textAccent,
    fontWeight: theme.fonts.semibold,
    textDecorationLine: 'underline',
  },
});

export default Welcome;