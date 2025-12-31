import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from '../assets/icons/index'; // Using your custom Icon component
import { theme } from '../constants/theme';

const MemberItem = ({ 
  name, 
  subtitle, 
  image, 
  badge, 
  isLeader, 
  isCurrentUser, 
  onPress, 
  onMorePress 
}) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.7} 
      onPress={onPress}
      style={[styles.container, isCurrentUser && styles.currentUserBg]}
    >
      {/* Avatar */}
      <View style={[
        styles.avatarContainer, 
        isLeader ? styles.leaderBorder : styles.defaultBorder
      ]}>
        <Image source={{ uri: image }} style={styles.avatar} />
      </View>

      {/* Info */}
      <div style={styles.info}>
        <View style={styles.nameRow}>
          <Text style={styles.name} numberOfLines={1}>{name}</Text>
          {badge && (
            <View style={[
              styles.badge, 
              isLeader ? styles.leaderBadge : styles.defaultBadge
            ]}>
              <Text style={[
                styles.badgeText, 
                isLeader ? styles.leaderBadgeText : styles.defaultBadgeText
              ]}>{badge}</Text>
            </View>
          )}
        </View>
        <Text style={styles.subtitle} numberOfLines={1}>{subtitle}</Text>
      </div>

      {/* More Button - Hidden for current user per design */}
      {!isCurrentUser && (
        <TouchableOpacity onPress={onMorePress} style={styles.moreButton}>
          <Icon name="more" size={20} color={theme.colors.textSecondary} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  currentUserBg: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  avatarContainer: {
    borderRadius: 28,
    padding: 2,
    marginRight: 16,
  },
  leaderBorder: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  defaultBorder: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#333',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginTop: 2,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  leaderBadge: {
    backgroundColor: 'rgba(19, 236, 19, 0.2)',
  },
  defaultBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  leaderBadgeText: {
    color: theme.colors.primary,
  },
  defaultBadgeText: {
    color: theme.colors.textSecondary,
  },
  moreButton: {
    padding: 4,
  }
});

export default MemberItem;