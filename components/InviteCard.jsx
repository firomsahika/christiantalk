import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from '../assets/icons/index';
import { theme } from '../constants/theme';

const InviteCard = ({ name, inviter, imageUri }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Image source={{ uri: imageUri }} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.inviterRow}>
          <Icon name="user" size={12} color={theme.colors.textSecondary} />
          <Text style={styles.inviterText}>Invited by {inviter}</Text>
        </View>
      </View>
    </View>
    <View style={styles.actions}>
      <Pressable style={[styles.btn, { backgroundColor: theme.colors.primary }]}>
        <Text style={styles.btnTextPrimary}>Accept</Text>
      </Pressable>
      <Pressable style={[styles.btn, styles.btnDecline]}>
        <Text style={styles.btnTextSecondary}>Decline</Text>
      </Pressable>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { backgroundColor: theme.colors.navBackground, padding: 16, borderRadius: 16, borderWeight: 1, borderColor: 'rgba(255,255,255,0.05)' },
  header: { flexDirection: 'row', gap: 12, marginBottom: 16 },
  avatar: { width: 60, height: 60, borderRadius: theme.radius.xxl },
  name: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  inviterRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4 },
  inviterText: { color: theme.colors.textSecondary, fontSize: 12 },
  actions: { flexDirection: 'row', gap: 12 },
  btn: { flex: 1, height: 40, borderRadius: theme.radius.xxl, justifyContent: 'center', alignItems: 'center' },
  btnDecline: { borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)' },
  btnTextPrimary: { color: theme.colors.navBackground, fontWeight: 'bold' },
  btnTextSecondary: { color: 'white' }
});

export default InviteCard;

