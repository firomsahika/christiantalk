import { useRouter } from "expo-router";
import { useState } from "react"; // 1. Import useState
import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from '../../assets/icons/index';
import ActiveGroupCard from "../../components/ActiveGroupCard";
import DiscoverTab from "../../components/DiscoverTab"; // 2. Import your Discover component
import Header from '../../components/Header';
import InviteCard from "../../components/InviteCard";
import ScreenWrapper from "../../components/ScreenWrapper";
import { theme } from '../../constants/theme';

const Group = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("My Groups");
  
  const renderTabContent = () => {
    switch (activeTab) {
      case "My Groups":
        return (
          <>
            {/* Section: Pending Invites */}
            <View style={styles.section}>
              <div style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Pending Invites</Text>
                <TouchableOpacity><Text style={styles.viewAll}>View all</Text></TouchableOpacity>
              </div>
              <InviteCard
                name="Young Professionals"
                inviter="John Doe"
                imageUri="https://i.pinimg.com/1200x/17/c0/d1/17c0d1bfcef18ad4a83d5b5b95f328df.jpg"
              />
            </View>

            {/* Section: Active Groups */}
            <View style={styles.section}>
              <div style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Your Active Groups</Text>
              </div>
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false} 
                snapToInterval={336} 
                decelerationRate="fast" 
                contentContainerStyle={{ paddingHorizontal: 20 }}
              >
                <ActiveGroupCard
                  title="Romans Deep Dive"
                  description="Exploring the theological depths of the book of Romans."
                  members="7"
                  type="Online"
                  nextMeeting="Next: Wed @ 7pm"
                  imageUri="https://i.pinimg.com/736x/8c/fc/c0/8cfcc08b4bad9d58f91cd246086628f0.jpg"
                  onPress={()=> router.push({
                    pathname: 'groupDetail',
                    params: { id: 'romans-deep-dive', title:"Romans Deep Dive" }
                  })}
                />
                <ActiveGroupCard
                  title="Psalms for Peace"
                  description="Daily readings for finding peace in anxious times."
                  members="12"
                  type="Remote"
                  nextMeeting="3 New Messages"
                  imageUri="https://i.pinimg.com/736x/9c/81/00/9c8100862ba8fbcb3adeec5395466d95.jpg"
                  onPress={()=> router.push({
                    pathname: 'groupDetail',
                    params: { id: 'psalms-for-peace', title:"Psalms for Peace" }
                  })}
                />
              </ScrollView>
            </View>
          </>
        );
      case "Discover":
        return <DiscoverTab />;
      case "Invites":
        return (
          <View style={styles.section}>
             <Text style={{color: 'white', textAlign: 'center', marginTop: 20}}>No new invites</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <ScreenWrapper bg={theme.colors.background}>
      <Header
        title="Groups"
        rightIcons={
          <View style={styles.headerIcons}>
            <Pressable style={styles.searchIcon}>
            <Icon name="search" size={18} color={theme.colors.primary} />
            </Pressable>
            <Pressable onPress={() => router.push("profile")} style={styles.createGroup}>
              <Icon name="plusIcon" size={22} color="black" style={styles.createGroupIcon} />
            </Pressable>
          </View>
        }
      />
      
      <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
        {/* 4. Interactive Tabs */}
        <View style={styles.tabsContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }}>
            {["My Groups", "Discover", "Invites"].map((tab) => (
              <TouchableOpacity 
                key={tab}
                onPress={() => setActiveTab(tab)}
                style={activeTab === tab ? styles.activeTab : styles.inactiveTab}
              >
                <Text style={activeTab === tab ? styles.activeTabText : styles.inactiveTabText}>
                  {tab}
                </Text>
                {/* Red dot for Invites tab as seen in your HTML */}
                {tab === "Invites" && <View style={styles.redDot} />}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* 5. Render Dynamic Content */}
        {renderTabContent()}
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Group;

const styles = StyleSheet.create({
  // ... your existing styles ...
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  searchIcon:{

    padding:6,
     borderWidth:1,
     borderColor:theme.colors.primary,
     borderRadius:theme.radius.xxl
  },
  createGroupIcon: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.xxl,
    padding: 4,
    marginLeft: 4,
  },
  tabsContainer: {
    backgroundColor: theme.colors.background, // Match screen background
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: theme.colors.primary, // This makes it GREEN
    paddingVertical: 12,
    marginRight: 24,
  },
  inactiveTab: {
    paddingVertical: 12,
    marginRight: 24,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent', // Bottom border is hidden when inactive
  },
  activeTabText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  inactiveTabText: {
    color: theme.colors.textSecondary || '#6b7280',
    fontSize: 14,
    fontWeight: '500',
  },
  redDot: {
    position: 'absolute',
    top: 10,
    right: -8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.primary, // Matches your HTML "Invites" dot
  },
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
  },
  viewAll: {
    color: theme.colors.primary,
    fontSize: 12,
    fontWeight: '600',
  }
});