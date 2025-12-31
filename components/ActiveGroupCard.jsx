import { ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from '../assets/icons/index';
import { theme } from '../constants/theme';



const ActiveGroupCard = ({ onPress, title, description, members, type, nextMeeting, imageUri }) => {
    return (
        <Pressable onPress={onPress} activeOpacity={0.8}>
            <View style={styles.cardContainer}>
                <ImageBackground source={{ uri: imageUri }} style={styles.bgImage} imageStyle={{ borderRadius: 24 }}>
                    <View style={styles.overlay} />
                    <View style={styles.content}>
                        <View style={styles.badge}>
                            <Icon name="calendar" size={14} color={theme.colors.backgroundDark} />
                            <Text style={styles.badgeText}>{nextMeeting}</Text>
                        </View>

                        <View>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.description} numberOfLines={2}>{description}</Text>

                            <div style={styles.metaRow}>
                                <View style={styles.metaItem}>
                                    <Icon name="users" size={14} color={theme.colors.primary} />
                                    <Text style={styles.metaText}>{members} Members</Text>
                                </View>
                                <View style={styles.metaItem}>
                                    <Icon name="video" size={14} color={theme.colors.primary} />
                                    <Text style={styles.metaText}>{type}</Text>
                                </View>
                            </div>

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Join Meeting</Text>
                                <Icon name="arrowRight" size={18} color={theme.colors.backgroundDark} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: 320, height: 380, marginRight: 16, borderRadius: 24, overflow: 'hidden'
    },
    bgImage: {
        flex: 1, justifyContent: 'space-between', padding: 20
    },
    overlay: {
        ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.5)'
    },
    content: {
        flex: 1, justifyContent: 'space-between'
    },
    badge: {
        alignSelf: 'flex-start',
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },
    badgeText: {
        color: theme.colors.navBackground,
        fontSize: 12,
        fontWeight: 'bold'
    },
    title: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 8
    },
    description: {
        color: '#e5e7eb',
        fontSize: 14,
        marginBottom: 12
    },
    metaRow: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 20
    },
    metaItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4, backgroundColor: 'rgba(0,0,0,0.4)',
        padding: 6, borderRadius: 4
    },
    metaText: {
        color: theme.colors.primary,
        fontSize: 12,
        fontWeight: '600'
    },
    button: {
        backgroundColor: theme.colors.primary,
        flexDirection: 'row',
        height: 50,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8
    },
    buttonText: {
        color: theme.colors.navBackground,
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default ActiveGroupCard;