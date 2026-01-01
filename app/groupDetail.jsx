import { useLocalSearchParams, useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from "../assets/icons/index";
import GroupHeader from '../components/GroupHeader';
import MembersTab from "../components/MembersTab";
import PlanTab from "../components/PlanTab";
import PostCard from '../components/PostCard';
import StudyTopicCard from '../components/StudyTopicCard';
import { theme } from '../constants/theme';

const GroupDetailScreen = () => {
  const router = useRouter();
  const { id, title } = useLocalSearchParams();
  const inputRef = useRef(null);
  
  const [activeTab, setActiveTab] = useState("Discussion");
  const [replyingTo, setReplyingTo] = useState(null);
  const [inputText, setInputText] = useState("");

  // Discussion Data State
  const [posts, setPosts] = useState([
    {
      id: '1',
      user: "Sarah J.",
      content: "This verse really spoke to me today. Reminder is exactly what I needed.",
      time: "2h ago",
      userImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPbr5-dTGZpABJqOlaC8bvUdOQaGAnh0QRCXcAkfkQJ_xNpcs5hyym496Vso1_bNozCRs_EXhr3zycpZA7lLdo-nhBl5ZHqEFN8l8y9PAhVlTVNSMXHP3obticgmThmbrSdlEtX0cife2X1yHujP9JOl3DSIy5OhSj48DxHYyW1HMJ53rd4TPETnOccMIXYjxf9rC31ojjR3TvnMYRVvp_MTE5ibEMNGimmZPYdKTGShDABmD2MCzsKvaBZQd3qNiynIQ0reZUeek",
      likes: 8,
      replies: [
        {
          id: '1-1',
          user: "Michael R.",
          content: "Me too! Romans 8 is powerful.",
          time: "1h ago",
          userImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcigrmR9ik0Ktqy2b4VpwXP0WcRIh8CDCOoSICFnxXqhnagd-dIn53lxRNqFIwxh-Imyd6LMPg9h-XxtUIS-iSu09AORtAkWSqSfTqKhVwRT_DLtGkFk1hLr3Z0AZ4l56hcv-e8KmXghtozbuo47scBUGyIgMYRtLM6avYCSnXkp4cHHxDaicmo1_3CFuTkWftExOxQQ2cbLgOM5dclic2IAQOxPZ-kflzc90DNqsBGHLDe84oFmAbvw9eAROympYsB2zb8PVxWJU",
          likes: 2,
        }, 
        {
          id: '1-1',
          user: "Michael R.",
          content: "Me too! Romans 8 is powerful.his verse really spoke to me today. Reminder is exactly what I needed.",
          time: "1h ago",
          userImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcigrmR9ik0Ktqy2b4VpwXP0WcRIh8CDCOoSICFnxXqhnagd-dIn53lxRNqFIwxh-Imyd6LMPg9h-XxtUIS-iSu09AORtAkWSqSfTqKhVwRT_DLtGkFk1hLr3Z0AZ4l56hcv-e8KmXghtozbuo47scBUGyIgMYRtLM6avYCSnXkp4cHHxDaicmo1_3CFuTkWftExOxQQ2cbLgOM5dclic2IAQOxPZ-kflzc90DNqsBGHLDe84oFmAbvw9eAROympYsB2zb8PVxWJU",
          likes: 2,
        }
      ]
    },
    {
      id: '2',
      user: "Firomsa J.",
      content: "The grace of God is truly sufficient.",
      time: "1day ago",
      userImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPbr5-dTGZpABJqOlaC8bvUdOQaGAnh0QRCXcAkfkQJ_xNpcs5hyym496Vso1_bNozCRs_EXhr3zycpZA7lLdo-nhBl5ZHqEFN8l8y9PAhVlTVNSMXHP3obticgmThmbrSdlEtX0cife2X1yHujP9JOl3DSIy5OhSj48DxHYyW1HMJ53rd4TPETnOccMIXYjxf9rC31ojjR3TvnMYRVvp_MTE5ibEMNGimmZPYdKTGShDABmD2MCzsKvaBZQd3qNiynIQ0reZUeek",
      likes: 20,
      replies: []
    }
  ]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    if (replyingTo) {
      const updatedPosts = posts.map(post => {
        if (post.id === replyingTo.id) {
          return {
            ...post,
            replies: [...post.replies, {
              id: Date.now().toString(),
              user: "David Kim (You)",
              content: inputText,
              time: "Just now",
              userImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFxeG_ouOToXjwT1ynMQuRZG0ZbYR2yvIEKbvQ9qWpbMHd2o4l_QpFQlPhAdZZlaiiwwyXssOuFpTMD0Lr-TZi8_pvSPRdokACX4pCpOJ3KfG2sU5-RTLaXJz4CLkVswThkbmybS2FCp4I3k0BeAWkflUYOWICLw3zHq3X5f11OS2r2PLLQu7X8-SsTYu3OLy9jGwfMt2gPVEbHXZ24fKT__Y-m7ah1YjzyF-lHo8gJCB2QBMVEuE98yc22dQUzFNgzZSw2vqEsu0",
              likes: 0
            }]
          };
        }
        return post;
      });
      setPosts(updatedPosts);
    } else {
      const newPost = {
        id: Date.now().toString(),
        user: "David Kim (You)",
        content: inputText,
        time: "Just now",
        userImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFxeG_ouOToXjwT1ynMQuRZG0ZbYR2yvIEKbvQ9qWpbMHd2o4l_QpFQlPhAdZZlaiiwwyXssOuFpTMD0Lr-TZi8_pvSPRdokACX4pCpOJ3KfG2sU5-RTLaXJz4CLkVswThkbmybS2FCp4I3k0BeAWkflUYOWICLw3zHq3X5f11OS2r2PLLQu7X8-SsTYu3OLy9jGwfMt2gPVEbHXZ24fKT__Y-m7ah1YjzyF-lHo8gJCB2QBMVEuE98yc22dQUzFNgzZSw2vqEsu0",
        likes: 0,
        replies: []
      };
      setPosts([newPost, ...posts]);
    }
    setInputText("");
    setReplyingTo(null);
  };

  const renderDiscussion = () => (
    <View style={styles.feed}>
      <StudyTopicCard
        tag="Week 2 Focus"
        title="No Condemnation"
        description="Read Romans 8:1-4. Question: 1. How does knowing there is 'no condemnation' change your walk?"
        imageUri="https://lh3.googleusercontent.com/aida-public/AB6AXuAWDkBqFZfvHjZ11ghsqeID7I0zPmfLgtx8eSpr6Ic3SxLfflUirlHjcOo02rFXRIK2if20R5H_xT-ByAWKMVybCASHTSlPu6EvirAsefXAomYYe8vAnFhR8LnErUuGuRFpiUDWzMOE19G63XVaAEbteZWSXfZL23EvXVShy_OPYNKgbnD7s7WQuOZw1zVFiUjGkOczcqtyi6WLY3HMovoiIEiwuuXPIj1tVqRlIKeohSosAd3SoRpyEQsR2BO5JTlRozsRNxlwVqs"
      />
      
      {posts.map((post) => (
        <View key={post.id}>
          <PostCard
            {...post}
            comments="Reply"
            onReply={() => {
              setReplyingTo(post);
              inputRef.current?.focus();
            }}
          />
          {post.replies.map((reply) => (
            <View key={reply.id} style={styles.replyIndentation}>
              <PostCard
                {...reply}
                comments="Reply"
                isReply={true}
                onReply={() => {
                  setReplyingTo(post); 
                  inputRef.current?.focus();
                }}
              />
            </View>
          ))}
        </View>
      ))}
      <View style={{ height: 120 }} />
    </View>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'Discussion': return renderDiscussion();
      case 'Plan': return <PlanTab />;
      case 'Members': return <MembersTab />;
      default: return null;
    }
  };

  return (
    <View style={styles.container}>
      <GroupHeader title={title} onBack={() => router.back()} />

      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        {/* Profile Info Section */}
        <View style={styles.infoSection}>
          <View style={styles.avatarWrapper}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGFnvFC6Td9b7JuyqGU7PjRZY1uVbXf_CV5dSQ7F610oNejBc5JVJ8QuAM3ZqSmkz770gDZlr9B58SnAojQMDUVpjkttxUClEOHwwFoKrMd_6jSJAB5_jh8QUdMrEixHuuf39Zm4P5gZsAf9erZApWsuAW4BdWsAWKf0PO6stVkjahglLWZp5q78puFfgQZZPkGvceqDDOz6BuqEyMZ7Xvtg3ujRYte3xne2aPZBsF-zrnKnuu-KmjhqmYGt1kLLow-isYSBsrags' }}
              style={styles.mainAvatar}
            />
            <View style={styles.statusDot} />
          </View>
          <div style={styles.infoTextWrapper}>
            <View style={styles.activeStudyBadge}>
              <View style={styles.pulseDot} />
              <Text style={styles.activeText}>Active Study</Text>
            </View>
            <Text style={styles.memberSub}>12 Members • Daily</Text>
          </div>
          <TouchableOpacity style={styles.inviteBtn}>
            <Icon name="user" size={18} color="#0a1f0a" />
            <Text style={styles.inviteText}>Invite</Text>
          </TouchableOpacity>
        </View>

        {/* Tab Bar */}
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
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {renderContent()}
      </ScrollView>

      {/* FIXED INPUT BAR */}
      {activeTab === "Discussion" && (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        >
          {replyingTo && (
            <View style={styles.replyIndicator}>
              <Text style={styles.replyText}>
                Replying to <Text style={{fontWeight: 'bold', color: 'white'}}>{replyingTo.user}</Text>
              </Text>
              <TouchableOpacity onPress={() => setReplyingTo(null)}>
                <Icon name="more" size={16} color="#B0B0B0" />
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.fixedInputContainer}>
            <TouchableOpacity style={styles.iconCircle}>
              <Icon name="camera" size={22} color="#B0B0B0" />
            </TouchableOpacity>
            <View style={styles.textInputWrapper}>
              <TextInput
                ref={inputRef}
                value={inputText}
                onChangeText={setInputText}
                placeholder={replyingTo ? "Write a reply..." : "Post a message..."}
                placeholderTextColor="#666"
                style={styles.input}
              />
              <Icon name="bookOpen" size={20} color="#B0B0B0" />
            </View>
            <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
              <Icon name="send" size={18} color="#0a1f0a" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      )}
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
  tabsContainer: { borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.05)' },
  activeTab: { borderBottomWidth: 3, borderBottomColor: theme.colors.primary, paddingVertical: 12, marginRight: 32 },
  inactiveTab: { paddingVertical: 12, marginRight: 32 },
  activeTabText: { color: theme.colors.primary, fontWeight: 'bold' },
  inactiveTabText: { color: '#B0B0B0', fontWeight: 'bold' },
  feed: { padding: 16 },
  
  // Nested Reply UI
  replyIndentation: {
    marginLeft: 30,
    borderLeftWidth: 1,
    borderLeftColor: theme.colors.primary,
    paddingLeft: 10,
    marginBottom: 5,
  },
  replyIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.navBackground,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: theme.colors.primary,
  },
  replyText: { color: '#B0B0B0', fontSize: 12 },
  fixedInputContainer: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#0a1f0a',
  },
  iconCircle: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.05)', justifyContent: 'center', alignItems: 'center' },
  textInputWrapper: { flex: 1, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 24, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, height: 44, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  input: { flex: 1, color: 'white', fontSize: 14 },
  sendBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: theme.colors.primary, justifyContent: 'center', alignItems: 'center' }
});

export default GroupDetailScreen; 