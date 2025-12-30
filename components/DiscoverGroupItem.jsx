import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from '../assets/icons/index'; // Adjust path based on your project
import { theme } from '../constants/theme';

const DiscoverGroupItem = ({ title, description, imageUri, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: imageUri }} 
          style={styles.image} 
          resizeMode="cover"
        />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.description} numberOfLines={1}>
          {description}
        </Text>
      </View>

      <Icon 
        name="arrowRight" 
        size={20} 
        color={theme.colors.textSecondary || '#6b7280'} 
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.05)',
    borderRadius: theme.radius.xxl
  },
  imageContainer: {
    position: 'relative',
    flexShrink: 0,
  },
  image: {
    height: 48,
    width: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  content: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
    gap:5
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    color: theme.colors.textSecondary || '#9ca3af',
    fontSize: 14,
    marginTop: 2,
  },
});

export default DiscoverGroupItem;