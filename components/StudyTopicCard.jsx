import { LinearGradient } from 'expo-linear-gradient'; // Ensure expo-linear-gradient is installed
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from '../assets/icons/index';
import { theme } from '../constants/theme';

const StudyTopicCard = ({ tag, title, description, imageUri }) => (
  <TouchableOpacity activeOpacity={0.9} style={styles.card}>
    <ImageBackground source={{ uri: imageUri }} style={styles.image}>
      <LinearGradient
        colors={['transparent', 'rgba(10, 31, 10, 0.6)', 'rgba(10, 31, 10, 1)']}
        style={styles.gradient}
      />
      <View style={styles.content}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{tag}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.stat}>
            <Icon name="heart" size={16} fill={theme.colors.primary} color={theme.colors.primary} />
            <Text style={styles.statText}>24</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.stat}>
            <Icon name="comment" size={16} color="white" />
            <Text style={styles.statText}>12 Comments</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: { height: 320, borderRadius: 24, overflow: 'hidden', marginBottom: 20 },
  image: { flex: 1, justifyContent: 'flex-end' },
  gradient: { ...StyleSheet.absoluteFillObject },
  content: { padding: 20 },
  badge: { 
    alignSelf: 'flex-start', 
    backgroundColor: 'rgba(19, 236, 19, 0.2)', 
    paddingHorizontal: 12, 
    paddingVertical: 4, 
    borderRadius: 20, 
    borderWidth: 1, 
    borderColor: 'rgba(19, 236, 19, 0.3)' 
  },
  badgeText: { color: theme.colors.primary, fontSize: 12, fontWeight: theme.fonts.bold },
  title: { color: 'white', fontSize: 24, fontWeight: theme.fonts.bold, marginVertical: 8 },
  description: { color: 'rgba(255,255,255,0.9)', fontSize: 14, lineHeight: 20 },
  footer: { flexDirection: 'row', gap: 20, marginTop: 15, borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.1)', paddingTop: 15 },
  stat: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  statText: { color: 'white', fontSize: 12, fontWeight: theme.fonts.bold },
});

export default StudyTopicCard;