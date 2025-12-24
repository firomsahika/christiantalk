import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { theme } from "../constants/theme";
import { hp } from "../helpers/common";
import { getUserImageSrc } from "../services/imageService";



const Avatar = ({
    uri,
    size = hp(4.5),
    rounded = theme.radius.md,
    style = {}
}) => {

    let source = uri && typeof uri === 'object' 
        ? { uri: uri.uri } 
        : getUserImageSrc(uri);

    return (
        <Image
            source={source}
            transition={100}
            style={[styles.avatar, { height: size, width: size, borderRadius: rounded }, style]}
        />
    )
}


export default Avatar;

const styles = StyleSheet.create({
    avatar: {
        borderCurve: 'continuous',
        borderColor: theme.colors.darkLight,
        borderWidth: 1
    }
})