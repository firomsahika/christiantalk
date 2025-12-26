import { ScrollView, StyleSheet } from 'react-native';

// Import Components
import { useRouter } from 'expo-router';
import BibleStudyCard from '../../components/BibleStudyCard';
import DailyScriptureCard from '../../components/DailyScriptureCard';
import Header from '../../components/Header';
import ScreenWrapper from '../../components/ScreenWrapper';
import SharePost from '../../components/SharePost';
import UserPostCard from '../../components/UserPostCard';
import { theme } from '../../constants/theme';
import { useAuth } from '../../contexts/AuthContext';

const HomeScreen = () => {
  const router = useRouter();
  const {setAuth} = useAuth();
  const onLogout = ()=>{
    setAuth(null);
    router.replace('/welcome')
  }
  
  return (
   <ScreenWrapper bg={theme.colors.background}>
    {/* <SafeAreaView style={styles.container}> */}
      <Header />
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
});

export default HomeScreen;