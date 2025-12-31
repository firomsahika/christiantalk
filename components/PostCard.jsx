import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from "../assets/icons/index";
import { theme } from '../constants/theme';

const PostCard = ({ user, time, content, userImg, attachedImg, likes, comments }) => (
  <View style={styles.postContainer}>
    <View style={styles.row}>
      <Image source={{ uri: userImg }} style={styles.avatar} />
      <View style={styles.mainContent}>
        <View style={styles.postHeader}>
          <View>
            <Text style={styles.userName}>{user}</Text>
            <Text style={styles.timeText}>{time}</Text>
          </View>
          <TouchableOpacity>
            <Icon name="more" size={20} color="#B0B0B0" />
            </TouchableOpacity>
        </View>
        <Text style={styles.text}>{content}</Text>
        {attachedImg && <Image source={{ uri: attachedImg }} style={styles.attachedImg} />}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionBtn}>
            <Icon name="heart" size={18} color={theme.colors.primary} />
            <Text style={styles.primaryActionText}>Amen ({likes})</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <Icon name="comment" size={18} color="#B0B0B0" />
            <Text style={styles.secondaryActionText}>{comments}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  postContainer: { 
    backgroundColor: theme.colors.navBackground, 
    borderRadius: 16, 
    padding: 16, 
    marginBottom: 16, 
    borderWidth: 1, 
    borderColor: 'rgba(255,255,255,0.05)' 
  },
  row: { flexDirection: 'row', gap: 12 },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  mainContent: { flex: 1 },
  postHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  userName: { color: 'white', fontWeight: 'bold', fontSize: 14 },
  timeText: { color: '#B0B0B0', fontSize: 12 },
  text: { color: '#E0E0E0', fontSize: 14, lineHeight: 20, marginTop: 4 },
  attachedImg: { width: '100%', height: 200, borderRadius: 12, marginTop: 12 },
  actions: { flexDirection: 'row', gap: 24, marginTop: 16 },
  actionBtn: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  primaryActionText: { color: theme.colors.primary, fontSize: 12, fontWeight: 'bold' },
  secondaryActionText: { color: '#B0B0B0', fontSize: 12, fontWeight: 'bold' },
});

export default PostCard;