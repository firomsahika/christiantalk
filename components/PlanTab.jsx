import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Or your preferred icon library
import ScreenWrapper from './ScreenWrapper';
import {theme} from '../constants/theme';
import Icon from '../assets/icons/index';


const PlanTab = () => {
  return (
    <ScreenWrapper style={styles.container}>
      {/* Header & Tabs logic would usually sit in a Parent, 
          but here is the content for the "Plan" section */}
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Section: Current Study */}
        <View style={styles.sectionHeader}>
          <Icon name="bookOpen" size={20} color={theme.colors.primary} />
          <Text style={styles.sectionTitle}>Current Study</Text>
        </View>

        {/* Hero Card */}
        <View style={styles.heroCard}>
          <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1000' }}
            style={styles.heroImage}
            imageStyle={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
          >
            <View style={styles.activeBadge}>
              <Text style={styles.activeBadgeText}>ACTIVE</Text>
            </View>
            <View style={styles.gradientOverlay} />
          </ImageBackground>

          <View style={styles.cardContent}>
            <Text style={styles.weekLabel}>WEEK 4</Text>
            <Text style={styles.cardTitle}>The Sermon on the Mount</Text>

            <View style={styles.infoRow}>
              <Icon name="calendar" size={18} color={theme.colors.textSecondary} />
              <Text style={styles.infoText}>Wed, Oct 25 • 7:00 PM</Text>
            </View>

            <View style={styles.infoRow}>
              <Icon name="bookOpen" size={18} color={theme.colors.textSecondary} />
              <Text style={styles.infoText}>Reading: Matthew 5-7</Text>
            </View>

            <View style={styles.resourceRow}>
              <TouchableOpacity style={styles.resourceItem}>
                <Icon name="help-circle-outline" size={16} color={THEME.primary} />
                <Text style={styles.resourceText}>3 Questions</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.resourceItem}>
                <Icon name="file" size={16} color={THEME.primary} />
                <Text style={styles.resourceText}>Study Guide</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.viewButton}>
                <Text style={styles.viewButtonText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Section: Upcoming */}
        <View style={[styles.sectionHeader, { marginTop: 24 }]}>
          <Icon name="calendar-clock" size={20} color={THEME.textSecondary} />
          <Text style={styles.sectionTitle}>Upcoming</Text>
        </View>

        <UpcomingItem 
          week="Week 5" 
          title="Miracles of Jesus" 
          date="Nov 1 • 7:00 PM" 
          reading="John 2" 
          image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=200"
        />

        <UpcomingItem 
          week="Week 6" 
          title="The Parables" 
          date="Nov 8 • 7:00 PM" 
          reading="Mark 4" 
          image="https://images.unsplash.com/photo-1441333346627-031b59c112b6?q=80&w=200"
        />

        {/* Past Studies Accordion */}
        <TouchableOpacity style={styles.accordionButton}>
          <View style={styles.accordionLeft}>
            <MaterialCommunityIcons name="history" size={22} color={THEME.textSecondary} />
            <Text style={styles.accordionText}>View Past Studies (3)</Text>
          </View>
          <MaterialCommunityIcons name="chevron-down" size={24} color={THEME.textSecondary} />
        </TouchableOpacity>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <MaterialCommunityIcons name="plus" size={32} color="black" />
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

const UpcomingItem = ({ week, title, date, reading, image }) => (
  <TouchableOpacity style={styles.upcomingCard}>
    <ImageBackground source={{ uri: image }} style={styles.upcomingImage} imageStyle={{ borderRadius: 8 }} />
    <View style={styles.upcomingInfo}>
      <Text style={styles.weekLabel}>{week}</Text>
      <Text style={styles.upcomingTitle} numberOfLines={1}>{title}</Text>
      <View style={styles.miniInfoRow}>
         <MaterialCommunityIcons name="calendar" size={14} color={THEME.textSecondary} />
         <Text style={styles.miniInfoText}>{date}</Text>
      </View>
      <View style={styles.miniInfoRow}>
         <MaterialCommunityIcons name="book-variant" size={14} color={THEME.textSecondary} />
         <Text style={styles.miniInfoText}>{reading}</Text>
      </View>
    </View>
    <MaterialCommunityIcons name="chevron-right" size={24} color={THEME.textSecondary + '80'} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.backgroundDark,
  },
  scrollContent: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    itemsCenter: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  heroCard: {
    backgroundColor: THEME.surfaceDark,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(19, 236, 19, 0.1)',
    overflow: 'hidden',
  },
  heroImage: {
    height: 160,
    width: '100%',
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: 'rgba(28, 39, 28, 0.8)', // Simulating tailwind gradient
  },
  activeBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  activeBadgeText: {
    color: THEME.primary,
    fontSize: 10,
    fontWeight: 'bold',
  },
  cardContent: {
    padding: 16,
    paddingTop: 8,
  },
  weekLabel: {
    color: THEME.textSecondary,
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  cardTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    color: THEME.textSecondary,
    fontSize: 14,
    marginLeft: 8,
  },
  resourceRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  resourceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  resourceText: {
    color: THEME.primary,
    fontSize: 12,
    marginLeft: 4,
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
    marginTop: 16,
    paddingTop: 12,
    alignItems: 'flex-end',
  },
  viewButton: {
    backgroundColor: THEME.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  viewButtonText: {
    color: THEME.backgroundDark,
    fontWeight: 'bold',
    fontSize: 14,
  },
  upcomingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME.surfaceDark,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  upcomingImage: {
    width: 80,
    height: 80,
  },
  upcomingInfo: {
    flex: 1,
    marginLeft: 12,
  },
  upcomingTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  miniInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  miniInfoText: {
    color: THEME.textSecondary,
    fontSize: 12,
    marginLeft: 4,
  },
  accordionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: THEME.surfaceDark,
    padding: 16,
    borderRadius: 12,
    marginTop: 8,
  },
  accordionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accordionText: {
    color: THEME.textSecondary,
    fontWeight: '500',
    marginLeft: 12,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: THEME.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: THEME.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
  },
});

export default PlanTab;