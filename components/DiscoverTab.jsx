import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from '../assets/icons/index';
import { theme } from '../constants/theme';
import DiscoverGroupItem from './DiscoverGroupItem';


const DiscoverTab = () => {
  const mockGroups = [
    { id: '1', title: 'Hiking & Prayer Fellowship', desc: 'Combining physical activity with spiritual fellowship.', img: 'https://picsum.photos/200' },
    { id: '2', title: 'Romans Deep Dive', desc: 'A rigorous theological study of the book of Romans.', img: 'https://picsum.photos/201' },
    { id: '3', title: 'Psalms for Anxiety', desc: 'Daily readings and check-ins for finding peace.', img: 'https://picsum.photos/202' },
    { id: '4', title: 'Young Professionals', desc: 'Connect with other Christians in the workplace.', img: 'https://picsum.photos/203' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Discover More Groups</Text>
      </View>

      <View style={styles.listContainer}>
        {mockGroups.map((group) => (
          <DiscoverGroupItem
            key={group.id}
            title={group.title}
            description={group.desc}
            imageUri={group.img}
            onPress={() => console.log('Group Pressed', group.id)}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.loadMoreBtn}>
        <Text style={styles.loadMoreText}>Load more groups</Text>
        <Icon name="arrowDown" size={18} color={theme.colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  sectionTitle: {
    color: theme.colors.textPrimary,
    fontSize: 20,
    fontWeight: theme.fonts.bold,
  },
  listContainer: {
    flexDirection: 'column',
    border:theme.colors.background,
    borderWidth:5,
    gap:10,
    borderRadius: theme.radius.xxl
  },
  loadMoreBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    marginBottom: 24,
    gap: 4,
  },
  loadMoreText: {
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default DiscoverTab;