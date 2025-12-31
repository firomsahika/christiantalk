import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from "../assets/icons/index";
import GroupHeader from '../components/GroupHeader';
import MembersTab from "../components/MembersTab";
import PlanTab from "../components/PlanTab";
import PostCard from '../components/PostCard';
import StudyTopicCard from '../components/StudyTopicCard';
import { theme } from '../constants/theme';

const GroupDetailScreen = () => {
  const router = useRouter();
  const { id, title } = useLocalSearchParams()
  const [activeTab, setActiveTab] = useState("Discussion");

  const renderContent = () => {
    switch (activeTab) {
      case 'Discussion':
        return (
          <>
            <View style={styles.feed}>
              <StudyTopicCard
                tag="Week 2 Focus"
                title="No Condemnation"
                description="Read Romans 8:1-4.Question: 1. How does knowing there is 'no condemnation' change your walk?"
                imageUri="https://lh3.googleusercontent.com/aida-public/AB6AXuAWDkBqFZfvHjZ11ghsqeID7I0zPmfLgtx8eSpr6Ic3SxLfflUirlHjcOo02rFXRIK2if20R5H_xT-ByAWKMVybCASHTSlPu6EvirAsefXAomYYe8vAnFhR8LnErUuGuRFpiUDWzMOE19G63XVaAEbteZWSXfZL23EvXVShy_OPYNKgbnD7s7WQuOZw1zVFiUjGkOczcqtyi6WLY3HMovoiIEiwuuXPIj1tVqRlIKeohSosAd3SoRpyEQsR2BO5JTlRozsRNxlwVqs"
              />
              <PostCard
                user="Sarah J."
                time="2h ago"
                content="This verse really spoke to me today. Reminder is exactly what I needed."
                userImg="https://lh3.googleusercontent.com/aida-public/AB6AXuCPbr5-dTGZpABJqOlaC8bvUdOQaGAnh0QRCXcAkfkQJ_xNpcs5hyym496Vso1_bNozCRs_EXhr3zycpZA7lLdo-nhBl5ZHqEFN8l8y9PAhVlTVNSMXHP3obticgmThmbrSdlEtX0cife2X1yHujP9JOl3DSIy5OhSj48DxHYyW1HMJ53rd4TPETnOccMIXYjxf9rC31ojjR3TvnMYRVvp_MTE5ibEMNGimmZPYdKTGShDABmD2MCzsKvaBZQd3qNiynIQ0reZUeek"
                likes="8"
                comments="Reply"
              />
               <PostCard
                user="Firomsa J."
                time="1day ago"
                content="This verse really spoke to me today. Reminder is exactly what I needed."
                userImg="https://lh3.googleusercontent.com/aida-public/AB6AXuCPbr5-dTGZpABJqOlaC8bvUdOQaGAnh0QRCXcAkfkQJ_xNpcs5hyym496Vso1_bNozCRs_EXhr3zycpZA7lLdo-nhBl5ZHqEFN8l8y9PAhVlTVNSMXHP3obticgmThmbrSdlEtX0cife2X1yHujP9JOl3DSIy5OhSj48DxHYyW1HMJ53rd4TPETnOccMIXYjxf9rC31ojjR3TvnMYRVvp_MTE5ibEMNGimmZPYdKTGShDABmD2MCzsKvaBZQd3qNiynIQ0reZUeek"
                likes="20"
                comments="Reply"
              />

              {/* Stick input */}
              <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.iconCircle}>
                  <Icon name="camera" size={22} color="#B0B0B0" />
                </TouchableOpacity>
                <View style={styles.textInputWrapper}>
                  <TextInput
                    placeholder="Post a message..."
                    placeholderTextColor="#666"
                    style={styles.input}
                  />
                  <Icon name="bookOpen" size={20} color="#B0B0B0" />
                </View>
                <TouchableOpacity style={styles.sendBtn}>
                  <Icon name="send" size={18} color="#0a1f0a" /></TouchableOpacity>
              </View>
            </View>
          </>
        );
      case 'Plan':
        return (
          <PlanTab />
        );
      case 'Members':
        return (
          <MembersTab />
        );
      default:
        return null;

    }
  };



  return (
    <View style={styles.container}>
      <GroupHeader
        title={title}
        onBack={() => router.back()}
      />

      <ScrollView stickyHeaderIndices={[2]} showsVerticalScrollIndicator={false}>
        {/* Profile Info Section */}
        <View style={styles.infoSection}>
          <View style={styles.avatarWrapper}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGFnvFC6Td9b7JuyqGU7PjRZY1uVbXf_CV5dSQ7F610oNejBc5JVJ8QuAM3ZqSmkz770gDZlr9B58SnAojQMDUVpjkttxUClEOHwwFoKrMd_6jSJAB5_jh8QUdMrEixHuuf39Zm4P5gZsAf9erZApWsuAW4BdWsAWKf0PO6stVkjahglLWZp5q78puFfgQZZPkGvceqDDOz6BuqEyMZ7Xvtg3ujRYte3xne2aPZBsF-zrnKnuu-KmjhqmYGt1kLLow-isYSBsrags' }}
              style={styles.mainAvatar}
            />
            <View style={styles.statusDot} />
          </View>
          <View style={styles.infoTextWrapper}>
            <View style={styles.activeStudyBadge}>
              <View style={styles.pulseDot} />
              <Text style={styles.activeText}>Active Study</Text>
            </View>
            <Text style={styles.memberSub}>12 Members • Daily</Text>
          </View>
          <TouchableOpacity style={styles.inviteBtn}>
            <Icon name="user" size={18} color="#0a1f0a" />
            <Text style={styles.inviteText}>Invite</Text>
          </TouchableOpacity>
        </View>

        {/* Tab Bar (simplified as seen in previous logic) */}
        <View style={styles.tabsContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }}>
            {["Discussion", "Plan", "Members"].map((tab) => (
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

        {/* rendering dynamic content */}

        {renderContent()}

      </ScrollView>

      {/* Sticky Input Bar */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a1f0a' },
  infoSection: { alignItems: 'center', padding: 24 },
  avatarWrapper: { width: 96, height: 96, borderRadius: 48, padding: 4, borderWidth: 2, borderColor: theme.colors.primary },
  mainAvatar: { flex: 1, borderRadius: 44 },
  statusDot: { position: 'absolute', bottom: 4, right: 4, width: 24, height: 24, borderRadius: 12, backgroundColor: theme.colors.primary, borderWidth: 4, borderColor: '#0a1f0a' },
  infoTextWrapper: { alignItems: 'center', marginVertical: 12 },
  activeStudyBadge: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  pulseDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: theme.colors.primary },
  activeText: { color: 'rgba(255,255,255,0.9)', fontSize: 14, fontWeight: '500' },
  memberSub: { color: '#B0B0B0', fontSize: 14, marginTop: 4 },
  inviteBtn: { backgroundColor: theme.colors.primary, flexDirection: 'row', width: 200, height: 44, borderRadius: 22, justifyContent: 'center', alignItems: 'center', gap: 8 },
  inviteText: { color: '#0a1f0a', fontWeight: 'bold', fontSize: 14 },
  tabContainer: { flexDirection: 'row', paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.05)', backgroundColor: '#0a1f0a' },
  activeTab: { borderBottomWidth: 3, borderBottomColor: theme.colors.primary, paddingVertical: 12, marginRight: 32 },
  inactiveTab: { paddingVertical: 12, marginRight: 32 },
  activeTabText: { color: theme.colors.primary, fontWeight: 'bold' },
  inactiveTabText: { color: '#B0B0B0', fontWeight: 'bold' },
  feed: { padding: 16, paddingBottom: 100 },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.colors.navBackground,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.05)'
  },
  iconCircle: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.05)', justifyContent: 'center', alignItems: 'center' },
  textInputWrapper: { flex: 1, backgroundColor: theme.colors.navBackground, borderRadius: 24, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, height: 44, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  input: { flex: 1, color: 'white', fontSize: 14 },
  sendBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: theme.colors.primary, justifyContent: 'center', alignItems: 'center', shadowColor: theme.colors.primary, shadowRadius: 10, shadowOpacity: 0.3 }
});

export default GroupDetailScreen;