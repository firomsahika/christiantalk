import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

// Import Components
import { useRouter } from 'expo-router';
import Icon from '../../assets/icons/index';
import Avatar from '../../components/Avatar';
import BibleStudyCard from '../../components/BibleStudyCard';
import DailyScriptureCard from '../../components/DailyScriptureCard';
import Header from '../../components/Header';
import ScreenWrapper from '../../components/ScreenWrapper';
import SharePost from '../../components/SharePost';
import UserPostCard from '../../components/UserPostCard';
import { theme } from '../../constants/theme';
import { useAuth } from '../../contexts/AuthContext';
import { hp } from '../../helpers/common';


const HomeScreen = () => {
  const router = useRouter();
  const { user, setAuth } = useAuth();
  const onLogout = () => {
    setAuth(null);
    router.replace('/welcome')
  }

  return (
    <ScreenWrapper bg={theme.colors.background}>
      {/* <SafeAreaView style={styles.container}> */}
      <Header
        title="ChristianTalk"
        rightIcons={
          <>
            <Icon name="lock" size={24} color="#A6A6A6" style={styles.notificationIcon} />
            <View style={styles.notificationDot} />
            <Pressable onPress={() => router.push("profile")}>
              <Avatar
                uri={user?.image}
                size={hp(4.3)}
                rounded={theme.radius.sm}
                // style={{borderWidth:2}}
                style={styles.profileAvatar}
              />
            </Pressable>
          </>
        }
      />
      <SharePost />

      <ScrollView
        contentContainerStyle={styles.feedScrollContent}
        showsVerticalScrollIndicator={false}
      >

        <DailyScriptureCard />
        <UserPostCard />
        <BibleStudyCard />
      </ScrollView>


      {/* <BottomNavigation /> */}
      {/* </SafeAreaView> */}
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#152012',
  },
  feedScrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 100, // Space for BottomNavigation
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

export default HomeScreen;