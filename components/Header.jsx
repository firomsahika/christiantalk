import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../constants/theme';
import { useAuth } from '../contexts/AuthContext';

const Header = ({title, rightIcons}) => {
  const router = useRouter();
  const {user} = useAuth(); 


  return (
    <View style={styles.header}>
    <Text style={styles.headerTitle}>{title}</Text>
    <View style={styles.headerIcons}>
      {rightIcons}
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#151f11',
    borderRadius: theme.radius.xl,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.textPrimary,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcon: {
    marginLeft: 16,
  },
  notificationDot: {
    position: 'absolute',
    top: 0,
    right: 43,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#6CC450',
  },
  profileAvatar: {
    width: 30,
    height: 30,
    borderRadius: 16,
    marginLeft: 16,
    backgroundColor: '#A6A6A6',
  },
});

export default Header;