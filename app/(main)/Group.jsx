import { useRouter } from "expo-router";
import { Platform, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from '../../assets/icons/index';
import ActiveGroupCard from "../../components/ActiveGroupCard";
import Header from '../../components/Header';
import InviteCard from "../../components/InviteCard";
import ScreenWrapper from "../../components/ScreenWrapper";
import { theme } from '../../constants/theme';

const Group = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg={theme.colors.background}>
      <Header
        title="Groups"
        rightIcons={
          <>
            <Icon name="search" size={20} color={theme.colors.primary} style={styles.searchIcon} />
            <Pressable onPress={() => router.push("profile")} style={styles.createGroup}>
              <Icon name="plusIcon" size={22} color="black" style={styles.createGroupIcon} />
            </Pressable>
          </>
        }
      />
      <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }}>
            <TouchableOpacity style={styles.activeTab}><Text style={styles.activeTabText}>My Groups</Text></TouchableOpacity>
            <TouchableOpacity style={styles.inactiveTab}><Text style={styles.inactiveTabText}>Discover</Text></TouchableOpacity>
            <TouchableOpacity style={styles.inactiveTab}><Text style={styles.inactiveTabText}>Invites</Text></TouchableOpacity>
          </ScrollView>
        </View>

        {/* Section: Pending Invites */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Pending Invites</Text>
            <TouchableOpacity><Text style={styles.viewAll}>View all</Text></TouchableOpacity>
          </View>
          <InviteCard
            name="Young Professionals"
            inviter="John Doe"
            imageUri="https://i.pinimg.com/1200x/17/c0/d1/17c0d1bfcef18ad4a83d5b5b95f328df.jpg"
          />
        </View>

        {/* Section: Active Groups */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Your Active Groups</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} snapToInterval={336} decelerationRate="fast" contentContainerStyle={{ paddingHorizontal: 20 }}>
            <ActiveGroupCard
              title="Romans Deep Dive"
              description="Exploring the theological depths of the book of Romans. Chapter 8 discussion this week."
              members="7"
              type="Online"
              nextMeeting="Next: Wed @ 7pm"
              imageUri="https://i.pinimg.com/736x/8c/fc/c0/8cfcc08b4bad9d58f91cd246086628f0.jpg"
            />
            <ActiveGroupCard
              title="Psalms for Peace"
              description="Daily readings for finding peace in anxious times."
              members="12"
              type="Remote"
              nextMeeting="3 New Messages"
              imageUri="https://i.pinimg.com/736x/9c/81/00/9c8100862ba8fbcb3adeec5395466d95.jpg"
            />
          </ScrollView>
        </View>
      </ScrollView>
    </ScreenWrapper>
  )
}

export default Group

const styles = StyleSheet.create({
  searchIcon: {
    marginLeft: 16,
    backgroundColor: theme.colors.cardBackground,
    padding: 6,
    borderRadius: theme.radius.xxl,
    borderColor: theme.colors.primary,
    borderWidth: 10
  },
  createGroupIcon: {
    marginLeft: 16,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.xxl,
    padding: 4
  },
  createGroup: {

    borderRadius: theme.radius.xxl
  },
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.navBackground,
  },

  // --- Header ---
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: -0.5,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1, // Fixed from borderWeight to borderWidth
    borderColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  iconCircleActive: {
    backgroundColor: theme.colors.primary,
    // Professional shadow implementation
    ...Platform.select({
      ios: {
        shadowColor: theme.colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
  },

  // --- Tabs Navigation ---
  tabsContainer: {
    backgroundColor: theme.colors.navBackground,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: theme.colors.primary,
    paddingVertical: 12,
    marginRight: 24,
    minWidth: 'auto',
  },
  activeTabText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    tracking: 'wide',
  },
  inactiveTab: {
    paddingVertical: 12,
    marginRight: 24,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  inactiveTabText: {
    color: theme.colors.textSecondary,
    fontSize: 14,
    fontWeight: '500',
  },

  // --- Sections ---
  section: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  viewAll: {
    color: theme.colors.primary,
    fontSize: 12,
    fontWeight: '600',
  },
});