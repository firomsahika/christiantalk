import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from "../assets/icons/index";
import { theme } from "../constants/theme";

const BottomNavigation = () => (
  <View style={styles.bottomNavigation}>
    <TouchableOpacity style={styles.navItem}>
      <Icon name="home" size={24} color="#6CC450" />
      <Text style={[styles.navText, { color: '#6CC450' }]}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Icon name="study" size={24} color="#A6A6A6" />
      <Text style={styles.navText}>Learn</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.createPostFab}>
      {/* <Icon name="book-open-variant" size={30} color="#000" /> */}
      <Icon name="bookOpen" size={30} color="#000" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Icon name="users" size={24} color="#A6A6A6" />
      <Text style={styles.navText}>Groups</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Icon name="setting" size={24} color="#A6A6A6" />
      <Text style={styles.navText}>Setting</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#122019',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#2B3D33',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#A6A6A6',
    fontSize: 12,
    marginTop: 4,
  },
  createPostFab: {
    backgroundColor: theme.colors.primary,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -25,
    borderWidth: 4,
    borderColor: '#122019',
  },
});

export default BottomNavigation;