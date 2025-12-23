import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from '../assets/icons/index';
import Avatar from '../components/Avatar';
import Header from '../components/PagesHeader';
import Input from '../components/input';
import { theme } from '../constants/theme';
import { useAuth } from '../contexts/AuthContext';
import { hp } from "../helpers/common";
import { updateUser } from '../services/userService';

const EditProfileScreen = () => {
  const router = useRouter();
  const { user: currentUser, setAuth } = useAuth();

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: '',
    phoneNumber: '',
    image: null,
    bio: '',
    address: ''
  });

  const [hasChanges, setHasChanges] = useState(false);

  // Load user data on mount
  useEffect(() => {
    if (currentUser) {
      setUser({
        name: currentUser.name || '',
        phoneNumber: currentUser.phoneNumber || '',
        image: currentUser.image || '',
        address: currentUser.address || '',
        bio: currentUser.bio || ''
      });
    }
  }, [currentUser]);

  useEffect(() => {
    const isChanged =
      user.name !== currentUser?.name ||
      user.phoneNumber !== currentUser?.phoneNumber ||
      user.bio !== currentUser?.bio ||
      user.address !== currentUser?.address ||
      user.image !== currentUser?.image;

    setHasChanges(isChanged);
  }, [user, currentUser]); // Runs whenever the form or the original data changes



const handleSave = async () => {
    console.log('1. HandleSave Triggered');
    
    let userData = { ...user };
    let { name, phoneNumber, address, image, bio } = userData;

    
    if (!name || !phoneNumber || !address || !bio) {
      console.log('2. Validation Failed - missing fields');
      Alert.alert("Profile", "Please fill all the fields");
      return;
    }

    console.log('3. Validation Passed. Data to send:', userData);
    setLoading(true);

    try {
        const res = await updateUser(currentUser?.id, userData);
      
        if (res.success) {
            Alert.alert("Profile", "Profile updated successfully! 🎉");
            router.back();
        } else {
            Alert.alert("Error", res.msg || "Could not update profile");
        }
    } catch (error) {
        Alert.alert("Error", "An unexpected error occurred.");
    } finally {
        setLoading(false);
    }
}





  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>

        {/* Header Component */}
        <Header
          title="Edit Profile"
          showBackButton={true}
          renderRight={() => (
            <Pressable onPress={handleSave} disabled={!hasChanges}>
              <Text style={[
                styles.saveText,
                { opacity: hasChanges ? 1 : 0.4 }
              ]}>Save</Text>
            </Pressable>
          )}
        />

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Avatar Section */}
          <View style={styles.avatarSection}>
            <View style={styles.avatarWrapper}>
              <Avatar
                uri={user.image}
                size={hp(16)}
                rounded={theme.radius.xxl * 1.4}
              />
              <Pressable style={styles.editAvatarBtn}>
                <Icon name="camera" size={20} color="white" strokeWidth={2} />
              </Pressable>
            </View>
          </View>

          <Text style={styles.detailTitle}>Please fill your profile details</Text>

          {/* Form Fields using Reusable Input */}
          <View style={styles.form}>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Full Name</Text>
              <Input
                placeholder="Enter your name"
                value={user.name}
                onChangeText={value => setUser({ ...user, name: value })}
                icon={<Icon name="user" size={20} color={theme.colors.textSecondary} />}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Phone Number</Text>
              <Input
                placeholder="Enter phone number"
                value={user.phoneNumber}
                onChangeText={value => setUser({ ...user, phoneNumber: value })}
                keyboardType="phone-pad"
                icon={<Icon name="call" size={20} color={theme.colors.textSecondary} />}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Location</Text>
              <Input
                placeholder="Enter your address"
                value={user.address}
                onChangeText={value => setUser({ ...user, address: value })}
                icon={<Icon name="location" size={20} color={theme.colors.textSecondary} />}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Bio</Text>
              <Input
                placeholder="Tell us about yourself"
                value={user.bio}
                onChangeText={value => setUser({ ...user, bio: value })}
                multiline={true}
                numberOfLines={4}
                containerStyles={{ alignItems: 'flex-start', paddingTop: 10 }}
              />
              <Text style={styles.charCount}>{user.bio.length}/200</Text>
            </View>

            {/* Read-only Email field */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email (Permanent)</Text>
              <Input
                value={currentUser?.email}
                editable={false}
                containerStyles={styles.disabledInput}
                icon={<Icon name="email" size={20} color={theme.colors.textSecondary} />}
              />
              <Text style={styles.helperText}>Contact support to change email.</Text>
            </View>

          </View>

          {/* Footer Actions */}
          <View style={styles.footer}>
            <Pressable style={styles.passwordBtn}>
              <Text style={styles.passwordBtnText}>Change Password</Text>
            </Pressable>

            <Pressable style={styles.deleteBtn}>
              <Text style={styles.deleteBtnText}>Delete Account</Text>
            </Pressable>
          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: theme.colors.background },
  container: { flex: 1 },
  scrollContent: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 50 },
  avatarSection: { alignItems: 'center', marginVertical: 20 },
  avatarWrapper: { position: 'relative' },
  editAvatarBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: theme.colors.primary,
    padding: 8,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: theme.colors.background,
  },
  detailTitle: {
    color: theme.colors.textPrimary,
    fontSize: hp(2.2),
    fontWeight: theme.fonts.semibold,
    marginBottom: 20,
    textAlign: 'center'
  },
  saveText: {
    fontSize: 18,
    fontWeight: theme.fonts.bold,
    color: theme.colors.primary,
  },
  form: { gap: 18 },
  inputGroup: { width: '100%' },
  label: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginBottom: 6,
    marginLeft: 4,
  },
  disabledInput: { opacity: 0.5, backgroundColor: '#f0f0f0' },
  charCount: { textAlign: 'right', fontSize: 12, color: theme.colors.textSecondary, marginTop: 4 },
  helperText: { fontSize: 12, color: theme.colors.textSecondary, marginTop: 6, marginLeft: 4 },
  footer: { marginTop: 40, gap: 15 },
  passwordBtn: { alignItems: 'center', padding: 10 },
  passwordBtnText: { color: theme.colors.primary, fontSize: 16, fontWeight: theme.fonts.semibold },
  deleteBtn: {
    height: 56,
    borderRadius: theme.radius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ff444450',
    backgroundColor: '#ff444405'
  },
  deleteBtnText: { color: '#ff4444', fontSize: 16, fontWeight: theme.fonts.bold },
});