import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from "../assets/icons/index";
import { theme } from '../constants/theme';

const PostCard = ({ user, time, content, userImg, likes, comments, onReply, isReply }) => (
  <View style={[styles.postContainer, isReply && styles.replyContainer]}>
    <View style={styles.row}>
      <Image source={{ uri: userImg }} style={[styles.avatar, isReply && styles.replyAvatar]} />
      <View style={styles.mainContent}>
        <View style={styles.postHeader}>
          <View>
            <Text style={[styles.userName, isReply && styles.replyUserName]}>{user}</Text>
            <Text style={styles.timeText}>{time}</Text>
          </View>
        </View>
        
        <Text style={styles.text}>{content}</Text>
        
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionBtn}>
            <Icon name="heart" size={14} color={theme.colors.primary} />
            <Text style={styles.actionText}>{likes}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionBtn} onPress={onReply}>
            <Text style={styles.actionText}>{comments}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  postContainer: { backgroundColor: theme.colors.navBackground, borderRadius: 16, padding: 12, marginBottom: 10 },
  replyContainer: { backgroundColor: 'transparent', paddingHorizontal: 0, marginBottom: 12 },
  row: { flexDirection: 'row', gap: 10 },
  avatar: { width: 36, height: 36, borderRadius: 18 },
  replyAvatar: { width: 28, height: 28, borderRadius: 14 },
  mainContent: { flex: 1 },
  postHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  userName: { color: 'white', fontWeight: 'bold', fontSize: 13 },
  replyUserName: { fontSize: 12 },
  timeText: { color: '#666', fontSize: 10 },
  text: { color: '#E0E0E0', fontSize: 13, marginTop: 4 },
  actions: { flexDirection: 'row', gap: 20, marginTop: 8 },
  actionBtn: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  actionText: { color: '#B0B0B0', fontSize: 11, fontWeight: 'bold' },
});

export default PostCard;