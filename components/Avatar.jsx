import { Image } from "expo-image";
import { theme } from "../constants/theme";
import { hp } from "../helpers/common";
import { StyleSheet } from "react-native";
import {  getUserImageSrc } from "../services/imageService";



const Avatar = ({
    uri,
    size=hp(4.5),
    rounded=theme.radius.md,
    styles={}
}) =>{
   <Image 
     source={getUserImageSrc(uri)}
     transition={100}
     styles={[styles.avatar, {height: size, width:size, borderRadius: rounded}, style]}
   />
}


export default Avatar;

const styles = StyleSheet.create({
    avatar:{
        borderCurve: 'continuous',
        borderColor: theme.colors.darkLight,
        borderWidth: 1
    }
})