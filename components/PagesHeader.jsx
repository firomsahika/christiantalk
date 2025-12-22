import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from '../assets/icons'; // Ensure this matches your icon library path
import { theme } from '../constants/theme';
import { hp } from '../helpers/common';

const Header = ({ title, showBackButton = false, mb = 10, renderRight }) => {
  const router = useRouter();

  return (
    <View style={[styles.container, { marginBottom: mb }]}>
      {/* Left Section */}
      <View style={styles.leftContainer}>
        {showBackButton && (
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Icon name="arrowLeft" size={26} color={theme.colors.textPrimary} strokeWidth={2.5} />
          </Pressable>
        )}
      </View>

      {/* Center Section */}
      <Text style={styles.title}>{title || ""}</Text>

      {/* Right Section */}
      <View style={styles.rightContainer}>
        {renderRight ? renderRight() : null}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 50, // Standard header height
    marginTop: 5,
  },
  leftContainer: {
    width: 40, // Keeps title centered by balancing right section
    justifyContent: 'center',
  },
  rightContainer: {
    width: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  title: {
    fontSize: hp(2.4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.textPrimary,
    textAlign: 'center',
  },
  backButton: {
    padding: 4,
  }
});