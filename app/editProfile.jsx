import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Alert,
    Image,
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { theme } from '../constants/theme';

const EditProfileScreen = () => {
  const router = useRouter();

  // Initial Data (In a real app, this comes from a global state or API)
  const initialUserData = {
    avatar:'data:image/jpeg;base64,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',
    fullName: 'John Doe',
    username: 'john.talks',
    bio: 'Walking in faith and sharing my journey.',
    email: 'john.doe@example.com',
    location: 'New York, USA',
  };

  const [userData, setUserData] = useState(initialUserData);
  const [hasChanges, setHasChanges] = useState(false);

  // Unified change handler
  const handleChange = (field, value) => {
    const updatedData = { ...userData, [field]: value };
    setUserData(updatedData);

    // Deep comparison to check if "Save" button should be enabled
    const changesMade = JSON.stringify(updatedData) !== JSON.stringify(initialUserData);
    setHasChanges(changesMade);
  };

  const handleSave = () => {
    if (hasChanges) {
      setHasChanges(false);
      Alert.alert('Success', 'Profile updated successfully.');
      router.back();
    }
  };

  const handleCancel = () => {
    if (hasChanges) {
      Alert.alert('Discard Changes', 'You have unsaved changes. Discard them?', [
        { text: 'No', style: 'cancel' },
        { text: 'Yes', onPress: () => router.back() },
      ]);
    } else {
      router.back();
    }
  };

  const handleDeleteAccount = () => {
    Alert.alert('Delete Account', 'This action is permanent. Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive' },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={handleCancel} style={styles.headerBtn}>
            <Text style={styles.cancelText}>Cancel</Text>
          </Pressable>
          
          <Text style={styles.headerTitle}>Edit Profile</Text>
          
          <Pressable 
            onPress={handleSave} 
            disabled={!hasChanges} 
            style={styles.headerBtn}
          >
            <Text style={[
              styles.saveText, 
              { color: hasChanges ? theme.colors.primary : theme.colors.textSecondary }
            ]}>
              Save
            </Text>
          </Pressable>
        </View>

        <ScrollView 
          contentContainerStyle={styles.scrollContent} 
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Avatar Section */}
          <View style={styles.avatarSection}>
            <Image source={{ uri: userData.avatar }} style={styles.profileAvatar} />
            <Pressable style={styles.changePicBtn}>
              <Text style={styles.changePicText}>Change Profile Picture</Text>
            </Pressable>
          </View>

          {/* Form Fields */}
          <View style={styles.form}>
            
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                style={styles.input}
                value={userData.fullName}
                onChangeText={(val) => handleChange('fullName', val)}
                placeholder="Your Name"
                placeholderTextColor={theme.colors.textSecondary}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                value={userData.username}
                onChangeText={(val) => handleChange('username', val)}
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Bio</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={userData.bio}
                onChangeText={(val) => handleChange('bio', val)}
                multiline
                numberOfLines={4}
                maxLength={200}
              />
              <Text style={styles.charCount}>{userData.bio.length}/200</Text>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email (Permanent)</Text>
              <TextInput
                style={[styles.input, styles.disabledInput]}
                value={userData.email}
                editable={false}
              />
              <Text style={styles.helperText}>Contact support to change email.</Text>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Location</Text>
              <TextInput
                style={styles.input}
                value={userData.location}
                onChangeText={(val) => handleChange('location', val)}
              />
            </View>
          </View>

          {/* Danger Zone */}
          <View style={styles.footer}>
            <Pressable style={styles.passwordBtn}>
              <Text style={styles.passwordBtnText}>Change Password</Text>
            </Pressable>

            <Pressable onPress={handleDeleteAccount} style={styles.deleteBtn}>
              <Text style={styles.deleteBtnText}>Delete Account</Text>
            </Pressable>
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
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.textSecondary + '10',
  },
  headerBtn: {
    paddingVertical: 5,
    color:theme.colors.primary
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: theme.fonts.bold,
    color: theme.colors.textPrimary,
  },
  cancelText: {
    fontSize: 16,
    color: theme.colors.textPrimary,
  },
  saveText: {
    fontSize: 16,
    fontWeight: theme.fonts.bold,
    color:theme.colors.primary
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 50,
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  changePicBtn: {
    marginTop: 12,
  },
  changePicText: {
    color: theme.colors.primary,
    fontWeight: theme.fonts.semibold,
    fontSize: 15,
  },
  form: {
    gap: 20,
  },
  inputGroup: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    fontWeight: theme.fonts.medium,
    marginBottom: 8,
    marginLeft: 4,
  },
  input: {
    backgroundColor: theme.colors.cardBackground,
    color: theme.colors.textPrimary,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: theme.radius.lg,
    fontSize: 16,
    borderWidth: 1,
    borderColor: theme.colors.textSecondary + '10',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  disabledInput: {
    opacity: 0.6,
  },
  charCount: {
    textAlign: 'right',
    fontSize: 12,
    color: theme.colors.textSecondary,
    marginTop: 4,
  },
  helperText: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    marginTop: 6,
    marginLeft: 4,
  },
  footer: {
    marginTop: 40,
    alignItems: 'center',
    gap: 20,
  },
  passwordBtn: {
    padding: 10,
  },
  passwordBtnText: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: theme.fonts.semibold,
    textDecorationLine: 'underline',
  },
  deleteBtn: {
    width: '100%',
    backgroundColor: 'rgba(255, 68, 68, 0.1)',
    height: 56,
    borderRadius: theme.radius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 68, 68, 0.3)',
  },
  deleteBtnText: {
    color: '#ff4444',
    fontSize: 16,
    fontWeight: theme.fonts.bold,
  },
});

export default EditProfileScreen;