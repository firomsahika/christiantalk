import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BibleStudyCard = () => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Image
        source={{ uri: 'https://via.placeholder.com/32/A6A6A6/FFFFFF?text=M' }}
        style={styles.cardAvatar}
      />
      <View>
        <Text style={styles.cardTitle}>Pastor Mike</Text>
        <Text style={styles.cardSubtitle}>5h ago • Bible Study Group</Text>
      </View>
      <TouchableOpacity style={styles.cardMoreButton}>
        <Icon name="dots-horizontal" size={24} color="#A6A6A6" />
      </TouchableOpacity>
    </View>
    <View style={styles.bibleStudyPostContent}>
      <View style={styles.dashedBorder} />
      <View style={styles.bibleStudyTextContent}>
        <Text style={styles.questionOfTheWeekTitle}>Question of the Week <Icon name="book-open-variant" size={18} color="#FFFFFF" /></Text>
        <Text style={styles.bibleStudyPostText}>
          We are diving into Romans 8 this week. What verse speaks to you the most about God's enduring love?
        </Text>
        <View style={styles.hashtagsContainer}>
          <Text style={styles.hashtag}>#BibleStudy</Text>
          <Text style={styles.hashtag}>#Romans</Text>
        </View>
      </View>
    </View>
    <View style={styles.cardFooter}>
      <View style={styles.footerIconText}>
        <Icon name="thumb-up-outline" size={18} color="#A6A6A6" />
        <Text style={styles.footerText}>156</Text>
      </View>
      <View style={styles.footerIconText}>
        <Icon name="comment-text-outline" size={18} color="#A6A6A6" />
        <Text style={styles.footerText}>89 Comments</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1f251d',
    borderRadius: 30,
    padding: 16,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
  bibleStudyPostContent: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  dashedBorder: {
    width: 2,
    borderWidth: 1,
    borderColor: '#53d22d',
    borderStyle: 'dashed',
    borderRadius: 1,
    marginRight: 12,
  },
  bibleStudyTextContent: {
    flex: 1,
  },
  questionOfTheWeekTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bibleStudyPostText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 8,
    lineHeight: 24,
  },
  hashtagsContainer: {
    flexDirection: 'row',
  },
  hashtag: {
    color: '#53d22d',
    fontSize: 14,
    marginRight: 8,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
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
});

export default BibleStudyCard;