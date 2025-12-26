import { Tabs } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import Icon from '../../assets/icons';
import { hp } from '../../helpers/common';

export default function MainTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#6CC450', // Your primary green
        tabBarInactiveTintColor: '#A6A6A6',
        tabBarStyle: {
          backgroundColor: '#122019', // Your dark background
          borderTopColor: '#2B3D33',
          borderTopWidth: 1,
          height: 140,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: hp(1.4),
          fontWeight: '500',
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={26} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Learn"
        options={{
          title: 'Learn',
          tabBarIcon: ({ color }) => (
            <Icon name="study" size={26} color={color} />
          ),
        }}
      />

      {/* The Central Create Button (FAB Style) */}
      <Tabs.Screen
        name="Post"
        options={{
          title: '', // No label for the FAB
          tabBarIcon: ({ focused }) => (
            <View style={styles.createPostFab}>
              <Icon name="bookOpen" size={30} color="#000" />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Group"
        options={{
          title: 'Groups',
          tabBarIcon: ({ color }) => (
            <Icon name="users" size={26} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Setting"
        options={{
          title: 'Setting',
          tabBarIcon: ({ color }) => (
            <Icon name="setting" size={26} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  createPostFab: {
    backgroundColor: '#53d22d',
    width: 58,
    height: 58,
    borderRadius: 29,
    justifyContent: 'center',
    alignItems: 'center',
    // This moves the icon up to create the "Floating" effect
    marginBottom: hp(4), 
    borderWidth: 5,
    borderColor: '#122019',
    // Shadow/Elevation for professional look
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});