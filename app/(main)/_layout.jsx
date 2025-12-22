// import { Tabs } from 'expo-router';
// import Icon from '../../assets/icons';
// import { theme } from '../../constants/theme';
// import { hp } from '../../helpers/common';

// export default function MainTabsLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: true,
//         tabBarStyle: {
//           height: hp(8),
//           backgroundColor: 'white',
//           borderTopWidth: 0,
//           elevation: 0,
//         },
//         tabBarLabelStyle:{
//             fontSize: hp(1.4),
            
//         },
//          tabBarActiveTintColor: theme.colors.primary,  // label color when focused
//       }}
//     >
//       <Tabs.Screen
//         name="Home"
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <Icon
//               name="home"
//               size={hp(5)}
//               color={focused ? theme.colors.primary : theme.colors.text}
//             />
//           ),
//         }}
//       />

    

//       <Tabs.Screen
//         name="Post"
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <Icon
//               name="plus"
//               size={hp(5)}
//               color={focused ? theme.colors.primary : theme.colors.text}
//             />
//           ),
//         }}
//       />

//         <Tabs.Screen
//         name="BibleStudy"
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <Icon
//               name="study"
//               size={hp(5)}
//               color={focused ? theme.colors.primary : theme.colors.text}
//             />
//           ),
//         }}
//       /> 

//        <Tabs.Screen
//         name="Setting"
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <Icon
//               name="setting"
//               size={hp(5)}
//               color={focused ? theme.colors.primary : theme.colors.text}
//             />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }
