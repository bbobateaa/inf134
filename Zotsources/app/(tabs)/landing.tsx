import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import Header from '@/components/header';

const tabOptions = [
{ id: 'academic', label: 'Academic & Career', info: 'Info about Academic & Career resources...' },
{ id: 'wellbeing', label: 'Wellbeing & Basic Needs', info: 'Info about Wellbeing & Basic Needs...' },
{ id: 'community', label: 'Community & Engagement', info: 'Info about Community & Engagement...' },
{ id: 'financial', label: 'Financial & Savings', info: 'Info about Financial & Savings...' },
{ id: 'popular', label: 'Most Popular', info: 'Info about Most Popular resources...' },
];

// Dummy events keyed by date string YYYY-MM-DD
const eventsByDate: Record<string, string[]> = {
'2025-06-03': ['Math workshop at 3pm', 'Yoga class at 6pm'],
'2025-06-04': ['Career fair at 1pm'],
// add more dates & events here
};

function getWeekDates() {
const today = new Date();
const dayOfWeek = today.getDay(); // Sunday=0..Saturday=6
// Get Sunday of current week
const sunday = new Date(today);
sunday.setDate(today.getDate() - dayOfWeek);

// Build array of 7 dates (Sunday to Saturday)
const dates = [];
for (let i = 0; i < 7; i++) {
    const d = new Date(sunday);
    d.setDate(sunday.getDate() + i);
    dates.push(d);
}
return dates;
}

export default function LandingPage() {
const [selectedTab, setSelectedTab] = useState(tabOptions[0]);

const weekDates = getWeekDates();

const isToday = (date: Date) => {
    const today = new Date();
    return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
    );
};

const formatDate = (date: Date) => date.toISOString().split('T')[0]; // YYYY-MM-DD

return (
    <View style={{ flex: 1, backgroundColor: '#065DAB' }}>
    <Header showBackButton={false} />

    {/* Tab options */}
    <View style={styles.optionsContainer}>
        {tabOptions.map((tab) => {
        const selected = tab.id === selectedTab.id;
        return (
            <TouchableOpacity
            key={tab.id}
            style={[styles.option, selected && styles.optionSelected]}
            onPress={() => setSelectedTab(tab)}
            >
            <Text style={[styles.optionText, selected && styles.optionTextSelected]}>
                {tab.label}
            </Text>
            </TouchableOpacity>
        );
        })}
    </View>

    {/* Tab info */}
    <View style={styles.tabInfoContainer}>
        <Text style={styles.tabInfoText}>{selectedTab.info}</Text>
    </View>

    {/* Upcoming events container */}
    <View style={styles.container2}>
        <Text style={styles.upcomingTitle}>Upcoming Events This Week</Text>

        <FlatList
        data={weekDates}
        horizontal
        keyExtractor={(date) => date.toISOString()}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item: date }) => {
            const dateStr = formatDate(date);
            const events = eventsByDate[dateStr] || [];
            return (
            <View style={[styles.dateContainer, isToday(date) && styles.todayHighlight]}>
                <Text style={styles.dateDay}>{date.toLocaleDateString('en-US', { weekday: 'short' })}</Text>
                <Text style={styles.dateNum}>{date.getDate()}</Text>
                {events.length > 0 ? (
                events.map((ev, i) => (
                    <Text key={i} style={styles.eventText}>
                    • {ev}
                    </Text>
                ))
                ) : (
                <Text style={styles.noEventText}>No events</Text>
                )}
            </View>
            );
        }}
        />
    </View>
    </View>
);
}

const styles = StyleSheet.create({
optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#065DAB',
    flexWrap: 'wrap',
},
option: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 5,
    marginVertical: 5,
},
optionSelected: {
    backgroundColor: '#fff',
},
optionText: {
    color: '#fff',
    fontSize: 14,
},
optionTextSelected: {
    color: '#065DAB',
    fontWeight: 'bold',
},
tabInfoContainer: {
    padding: 15,
    backgroundColor: '#0A75D8',
    marginHorizontal: 10,
    borderRadius: 10,
    minHeight: 80,
},
tabInfoText: {
    color: '#fff',
    fontSize: 16,
},
container2: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
},
upcomingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
},
dateContainer: {
    width: 120,
    borderRadius: 15,
    backgroundColor: '#F2F2F2',
    marginHorizontal: 8,
    padding: 10,
},
todayHighlight: {
    backgroundColor: '#065DAB',
},
dateDay: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
},
dateNum: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
},
eventText: {
    fontSize: 12,
    color: '#222',
},
noEventText: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#777',
    textAlign: 'center',
},
});
