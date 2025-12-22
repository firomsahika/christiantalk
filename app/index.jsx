import { useRouter } from 'expo-router';
import { View } from 'react-native';
import Loading from '../components/Loading';
import { theme } from '../constants/theme';

const index = () => {
  const router = useRouter();
  return  (
    <View style={{backgroundColor:theme.colors.background,flex:1, alignItems:'center', justifyContent:'center'}}>
      <Loading />
    </View>
  )
}

export default index