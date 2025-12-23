import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from "../assets/icons/index";
import { hp } from '../helpers/common';

const DailyScriptureCard = () => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <View style={styles.cardIconBackground}>
        <Icon name="bookOpen" size={20} color='#53d22d' />
      </View>
      <View>
        <Text style={styles.cardTitle}>Daily Scripture</Text>
        <Text style={styles.cardSubtitle}>System • Just now</Text>
      </View>
      <TouchableOpacity style={styles.cardMoreButton}>
        <Icon name="more" size={24} color="#A6A6A6" />
      </TouchableOpacity>
    </View>
    <View style={styles.verseOfTheDayContainer}>
      <View style={styles.verticalLine} />
      <View style={styles.verseContent}>
        <Text style={styles.verseTitle}>Verse of the Day</Text>
        <Text style={styles.verseText}>
          "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go."
        </Text>
        <Text style={styles.verseReference}>— Joshua 1:9</Text>
      </View>
    </View>
    <View style={styles.cardFooter}>
      <View style={styles.footerIconText}>
        <Icon name="heart" size={18} color="#A6A6A6" />
        <Text style={styles.footerText}>2.4k Amens</Text>
      </View>
      <View style={styles.footerIconText}>
        <Icon name="comment" size={18} color="#A6A6A6" />
        <Text style={styles.footerText}>45</Text>
      </View>
      <TouchableOpacity style={styles.shareButton}>
        <Icon name="share" size={18} color="#A6A6A6" />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1f251d',
    borderRadius: 30,
    padding: 16,
    marginBottom: 16,
    borderBottomWidth: 0.2,
    borderBottomColor: '#314037ff',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardIconBackground: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#23361f',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  cardSubtitle: {
    color: '#A6A6A6',
    fontSize: 12,
  },
  cardMoreButton: {
    marginLeft: 'auto',
  },
  verseOfTheDayContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  verticalLine: {
    width: 4,
    backgroundColor: '#53d22d',
    borderRadius: 2,
    marginRight: 12,
  },
  verseContent: {
    flex: 1,
  },
  verseTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  verseText: {
    color: '#FFFFFF',
    fontSize: hp(2),
    fontStyle: 'italic',
    marginBottom: 8,
    lineHeight: 20,
  },
  verseReference: {
    color: '#53d22d',
    fontSize: 14,
    fontWeight: '600',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  footerIconText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  footerText: {
    color: '#A6A6A6',
    fontSize: 14,
    marginLeft: 4,
  },
  shareButton: {
    marginLeft: 'auto',
  },
});

export default DailyScriptureCard;