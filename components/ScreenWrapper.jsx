import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ScreenWrapper = ({children, bg}) => {
  const {top} = useSafeAreaInsets();
  const paddingTop = top>0? top+5: 10;
  const paddingHorizontal = 5;


  return (
    <View style={{flex:1, paddingHorizontal, paddingTop, backgroundColor:bg}}>
      {
        children
      }
    </View>
  )
}

export default ScreenWrapper