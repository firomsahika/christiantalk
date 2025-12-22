import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { hp } from '../helpers/common';

const UserPostCard = () => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Image
        source={{ uri: 'data:image/jpeg;base64,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' }}
        style={styles.cardAvatar}
      />
      <View>
        <Text style={styles.cardTitle}>Sarah Jenkins</Text>
        <Text style={styles.cardSubtitle}>2h ago • San Diego</Text>
      </View>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followButtonText}>Follow</Text>
      </TouchableOpacity>
    </View>
    <Text style={styles.postBodyText}>
      Sunday Service at Grace Community was absolutely powerful today! The choir led us in such a moving worship session. Feeling blessed and recharged for the week ahead. 🙏✨
    </Text>
    <View style={styles.hashtagsContainer}>
      <Text style={styles.hashtag}>#SundayWorship</Text>
      <Text style={styles.hashtag}>#Community</Text>
    </View>
    {/* <Image
      source={{ uri: 'https://via.placeholder.com/350x200?text=Worship+Service' }}
      style={styles.postImage}
    /> */}
    <View style={styles.cardFooter}>
      <View style={styles.footerIconText}>
        <Icon name="heart-outline" size={18} color="#A6A6A6" />
        <Text style={styles.footerText}>342</Text>
      </View>
      <View style={styles.footerIconText}>
        <Icon name="comment-text-outline" size={18} color="#A6A6A6" />
        <Text style={styles.footerText}>28</Text>
      </View>
      <TouchableOpacity style={styles.shareButton}>
        <Icon name="bookmark-outline" size={18} color="#A6A6A6" />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1f251d',
    borderRadius: 30,
    padding: 16,
    marginBottom: 16,
    borderBottomWidth: 0.2,
    borderBottomColor: '#314037ff',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  cardSubtitle: {
    color: '#A6A6A6',
    fontSize: 12,
  },
  followButton: {
    marginLeft: 'auto',
    backgroundColor: '#53d22d',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  followButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  postBodyText: {
    color: '#FFFFFF',
    fontSize: hp(2),
    marginBottom: 8,
    lineHeight: 24,
  },
  hashtagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  hashtag: {
    color: '#53d22d',
    fontSize: 14,
    marginRight: 8,
    marginBottom: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
    resizeMode: 'cover',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  footerIconText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  footerText: {
    color: '#A6A6A6',
    fontSize: 14,
    marginLeft: 4,
  },
  shareButton: {
    marginLeft: 'auto',
  },
});

export default UserPostCard;