import { StyleSheet, TextInput, View } from 'react-native';
import { theme } from '../constants/theme';
import { hp } from '../helpers/common';

const Input = (props) => {
  return (
    <View style={[styles.container, props.containerStyles && props.containerStyles]}>
      {props.icon && props.icon}
      <TextInput
        style={[
          styles.textInput, 
          props.multiline && { textAlignVertical: 'top', height: hp(15), paddingVertical: 12 }
        ]}
        placeholderTextColor={theme.colors.textSecondary}
        ref={props.inputRef && props.inputRef}
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.textSecondary + '20',
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.radius.lg,
    paddingHorizontal: 16,
    gap: 12,
  },
  textInput: {
    flex: 1,
    color: theme.colors.textPrimary,
    fontSize: 16,
    height: hp(7), // Matches your previous paddingVertical/size
  },
});