import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from '../assets/icons/index';
import MemberItem from '../components/MemberItem';
import { theme } from '../constants/theme';
import ScreenWrapper from './ScreenWrapper';

const MembersTab = () => {
  return (
    <ScreenWrapper bg={theme.colors.navBackground}>
      <View style={styles.container}>
        
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Icon name="search" size={20} color={theme.colors.textSecondary} />
            <TextInput 
              placeholder="Search for a brother or sister..."
              placeholderTextColor={theme.colors.textSecondary}
              style={styles.searchInput}
            />
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          {/* Admins Section */}
          <Text style={styles.sectionHeader}>Admins</Text>
          <MemberItem 
            name="Joshua Miller"
            subtitle="Group Leader"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBuJl0dvwGvaIQN5kVStpll8BvvnOW7KcM8GGNYQ9_9lUB2tY2mIzTEf3EaHCZ7jQvIKBeYcxVPBkorWRwg8lU-N9uAZZkSc9RwWlvYqer6wbW--roSr3SlW4Tb45GXgxD0x-WKBcM3RHQdRwtRLcm5WJemKiYr_OrxM5mDK1vVzeFrTdWEbMclrzd_3Bw0yy7-gd1C9HkrbrWD93_kMZ7mM-yjQMqT5k6ddn_zEEiovRaE2ExaurDcR9fsJG7RuIvfg6Zwm6z0nzI"
            badge="Leader"
            isLeader={true}
          />
          <MemberItem 
            name="Sarah Chen"
            subtitle="Co-host"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuByUefv54Y42Bodn0AsqVPCtjuyrmDfPtwkW00-dznCS7ze8opHchl1FJKIy73kURED2QqpLDBjlPRx02HmWlVaKSXiILjhYKCauKcwDQlbJ-Hrkw-jXkjV7cI7R4xxeIOPPWTLlcOPTnaoiG5mVZV_IiWQxsIcimximv20dA-POTqIQOFoj-eXZsDYLgIkkklu_cz1jF_TzPoCoOxVdx6sW8sCMwF2iewo-iktrzA-hXmZYGVSu-JAJASHLTI3KmE58a4Sp4xrXvw"
            badge="Admin"
          />

          <View style={styles.divider} />

          {/* Members Section */}
          <View style={styles.membersHeaderRow}>
            <Text style={styles.sectionHeader}>Members</Text>
            <Text style={styles.memberCount}>14 People</Text>
          </View>

          <MemberItem 
            name="Michael Ross"
            subtitle="Joined 2 days ago"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCcigrmR9ik0Ktqy2b4VpwXP0WcRIh8CDCOoSICFnxXqhnagd-dIn53lxRNqFIwxh-Imyd6LMPg9h-XxtUIS-iSu09AORtAkWSqSfTqKhVwRT_DLtGkFk1hLr3Z0AZ4l56hcv-e8KmXghtozbuo47scBUGyIgMYRtLM6avYCSnXkp4cHHxDaicmo1_3CFuTkWftExOxQQ2cbLgOM5dclic2IAQOxPZ-kflzc90DNqsBGHLDe84oFmAbvw9eAROympYsB2zb8PVxWJU"
          />
          <MemberItem 
            name="David Kim"
            subtitle="Active now"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBFxeG_ouOToXjwT1ynMQuRZG0ZbYR2yvIEKbvQ9qWpbMHd2o4l_QpFQlPhAdZZlaiiwwyXssOuFpTMD0Lr-TZi8_pvSPRdokACX4pCpOJ3KfG2sU5-RTLaXJz4CLkVswThkbmybS2FCp4I3k0BeAWkflUYOWICLw3zHq3X5f11OS2r2PLLQu7X8-SsTYu3OLy9jGwfMt2gPVEbHXZ24fKT__Y-m7ah1YjzyF-lHo8gJCB2QBMVEuE98yc22dQUzFNgzZSw2vqEsu0"
            badge="You"
            isCurrentUser={true}
          />
          <MemberItem 
            name="Emily Watson"
            subtitle="Joined last week"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuA-j8-Dv7uWf_ADM0Z1TGbLstreF__N_ERfwj8QNqTFoLG-hezJBe4qH61JMCcrN4x0dwi3tBj4njw7TxgXovQk6yyhYeWLuATM5v_oExT3J4wuzytKSm3muwRh_QzMwaxowodJJPH9sljumfqmr7-GRYdd7HKshSbINQfrsV_VrUeqpMa_BwW2wfhiGhutJUU6Y6kRePmKWqXlvspf551ehawGfdHTdnVMkxPBpzBsZXJN_IRrPOk2pd5US4y-P-bM8YYO5bEy0ZA"
          />
          <MemberItem 
            name="Marcus Johnson"
            subtitle="Offline"
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDr3tFSrXL8s2-7-BKXxkg9FN76T05DC3WQk5z9IftjQOczWBLkYblgnY4ClPj1KhEIkfFTIHYhkjsZV4AsxLQ5zGc_A_C9Zg-_7JQUpYSq7B8nnsMOgYQHbg6XbDSTxL0QJaCiCPM8Qj6h4pgzwqE1_DWsayeKsHS3dFhElVtS4xn-nqq6TRbURXeq6Hbqo_C-nO86qRHMlq9NdHL1p5BriImAyH7Z1c0nmwz8Z836X79R06scc2mAOS5PvgO8CfRPF9aWFDq24RI"
          />
          
          <View style={{ height: 100 }} />
        </ScrollView>

        {/* Floating Invite Button */}
        <View style={styles.fabContainer}>
          <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
            <Icon name="user" size={24} color="black" />
            <Text style={styles.fabText}>Invite Members</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    padding: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 25,
    paddingHorizontal: 16,
    height: 48,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: 'white',
    fontSize: 16,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  membersHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
  },
  memberCount: {
    color: theme.colors.textSecondary,
    fontSize: 14,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 30,
    left: 16,
    right: 16,
  },
  fab: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    elevation: 5,
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  fabText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default MembersTab;