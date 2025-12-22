import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from "../../constants/theme";


const PostCreationPage = () => {
  const router = useRouter();
  const [postContent, setPostContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); 
  const [isPosting, setIsPosting] = useState(false); 

  const currentUserAvatar = 'https://i.ibb.co/L50n15W/user-male-avatar.png';

  const handleCreatePost = () => {
    if (!postContent.trim() && !selectedImage) return;
    setIsPosting(true);
    setTimeout(() => {
      Alert.alert('Post Created', 'Your post has been shared!');
      navigation.goBack(); 
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      
      {/* KeyboardAvoidingView ensures the footer stays above the keyboard */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.container}
      >
        
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()} style={styles.headerButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </Pressable>
          <Text style={styles.screenTitle}>Create Post</Text>
          <Pressable
            onPress={handleCreatePost}
            style={[styles.postButton, postContent.trim() && styles.postButtonActive]}
            disabled={!postContent.trim() || isPosting}
          >
            <Text style={[styles.postButtonText, postContent.trim() && styles.postButtonTextActive]}>
              {isPosting ? '...' : 'Post'}
            </Text>
          </Pressable>
        </View>

        {/* ScrollView with flexGrow: 1 to allow the input to expand */}
        <ScrollView 
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
        >
          <View style={styles.inputSection}>
            <Image source={{ uri: currentUserAvatar }} style={styles.userAvatar} />
            <TextInput
              style={styles.postInput}
              placeholder="What's on your heart today?"
              placeholderTextColor={theme.colors.textSecondary + '70'}
              value={postContent}
              onChangeText={setPostContent}
              multiline
              autoFocus={true}
              textAlignVertical="top" // Important for Android to start text at the top
            />
          </View>

          {selectedImage && (
            <View style={styles.imagePreviewContainer}>
              <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
              <Pressable onPress={() => setSelectedImage(null)} style={styles.removeImageButton}>
                <Icon name="close" size={20} color="white" />
              </Pressable>
            </View>
          )}
        </ScrollView>

        {/* Footer Actions */}
        <View style={styles.footerActions}>
          <Pressable onPress={() => setSelectedImage('https://i.ibb.co/nC1R86d/worship-service.jpg')} style={styles.actionIconContainer}>
            <Icon name="image-outline" size={24} color={theme.colors.primary} />
            <Text style={styles.actionIconText}>Photo</Text>
          </Pressable>
          <Pressable style={styles.actionIconContainer}><Icon name="video-outline" size={24} color={theme.colors.primary} /><Text style={styles.actionIconText}>Video</Text></Pressable>
          <Pressable style={styles.actionIconContainer}><Icon name="comment-quote-outline" size={24} color={theme.colors.primary} /><Text style={styles.actionIconText}>Quote</Text></Pressable>
          <Pressable style={styles.actionIconContainer}><Icon name="account-plus-outline" size={24} color={theme.colors.primary} /><Text style={styles.actionIconText}>Tag</Text></Pressable>
        </View>
      </KeyboardAvoidingView>
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
  headerButton: { minWidth: 60 },
  cancelButtonText: { color: theme.colors.textPrimary, fontSize: 16, fontWeight: theme.fonts.medium },
  screenTitle: { fontSize: 17, fontWeight: theme.fonts.bold, color: theme.colors.textPrimary },
  postButton: { borderRadius: theme.radius.sm, paddingHorizontal: 16, paddingVertical: 6, backgroundColor: theme.colors.textSecondary + '20' },
  postButtonActive: { backgroundColor: theme.colors.primary },
  postButtonText: { fontSize: 14, fontWeight: theme.fonts.bold, color: theme.colors.textSecondary },
  postButtonTextActive: { color: 'white' },
  
  scrollContent: {
    flexGrow: 1, // This allows the content to fill the screen
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  inputSection: {
    flexDirection: 'row',
    flex: 1, // Makes the section expand to fill available height
    alignItems: 'flex-start',
  },
  userAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 12,
  },
  postInput: {
    flex: 1, // This is the KEY: it makes the input field take all available height
    color: theme.colors.textPrimary,
    fontSize: 18,
    lineHeight: 24,
    paddingTop: 8,
    minHeight: 200, // Provides a decent starting height
  },
  imagePreviewContainer: {
    width: '100%',
    height: 250,
    borderRadius: theme.radius.lg,
    overflow: 'hidden',
    marginTop: 20,
  },
  selectedImage: { width: '100%', height: '100%' },
  removeImageButton: { position: 'absolute', top: 12, right: 12, backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 20, padding: 4 },
  
  footerActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: theme.colors.textSecondary + '10',
    backgroundColor: theme.colors.background,
  },
  actionIconContainer: { alignItems: 'center' },
  actionIconText: { color: theme.colors.textSecondary, fontSize: 11, fontWeight: theme.fonts.medium, marginTop: 4 },
});

export default PostCreationPage;