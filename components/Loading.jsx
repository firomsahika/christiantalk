import { ActivityIndicator, View } from 'react-native';
import { theme } from '../constants/theme';

const Loading = ({size="large", color=theme.colors.primary}) => {
  return (
    <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
      <ActivityIndicator size={size} color={color} />
      {/* <Text style={{color:theme.colors.primary}}>Loading...</Text> */}
    </View>
  );
};

export default Loading;

