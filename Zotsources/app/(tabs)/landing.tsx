import React, { useState } from 'react';
import {
StyleSheet,
Text,
TouchableOpacity,
View,
FlatList,
} from 'react-native';
import Header from '@/components/header';
import CustomNavBar from '@/components/NavBar';
import { useRouter } from 'expo-router';

const forYouItems = [
{
    id: '1',
    title: 'LARC Tutoring Program',
    desc: 'Small group tutoring for a variety of UCI courses. Online and in-person options.',
    category: 'Academic',
    date: 'Fri, May 18 @ 12:00 PM',
},
{
    id: '2',
    title: 'LARC Tutoring Program',
    desc: 'Small group tutoring for a variety of UCI courses. Online and in-person options.',
    category: 'Community',
    date: 'Fri, May 18 @ 12:00 PM',
},
];

const eventsByDate: Record<string, Record<string, string>> = {
    '2025-06-03': {
    '3:00 PM - 5:00 PM': 'Math workshop',
    '6:00 PM - 8:00 PM': 'Yoga class',
    },
    '2025-06-04': {
    '11:00 AM - 3:00 PM': 'Career fair',
    '6:00 PM - 8:00 PM': 'Career fair',
    '11:59 PM': 'FAFSA Application Due',
    },
    '2025-06-05': {
        '6:00 PM - 8:00 PM': 'Community talk',
    },
};


function getWeekDates() {
const today = new Date();
const dayOfWeek = today.getDay();
const sunday = new Date(today);
sunday.setDate(today.getDate() - dayOfWeek);
const dates = [];
for (let i = 0; i < 7; i++) {
    const d = new Date(sunday);
    d.setDate(sunday.getDate() + i);
    dates.push(d);
}
return dates;
}

const formatDate = (date: Date) => date.toISOString().split('T')[0];

export default function LandingPage() {
const weekDates = getWeekDates();
const [selectedDate, setSelectedDate] = useState(formatDate(new Date()));

const isToday = (date: Date) => {
    const today = new Date();
    return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
    );
};
const router = useRouter();

return (
    <>
    <View style={{ flex: 1, backgroundColor: '#065DAB' }}>
    <Header showBackButton={false} />

    {/* For You Section */}
    <View style={styles.forYouContainer}>
        <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>For You</Text>
        <TouchableOpacity onPress={() => router.push('/categories')}>
            <Text style={styles.seeMore}>See More &gt;</Text>
        </TouchableOpacity>

        </View>

        <FlatList
        data={forYouItems}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => (
            <View style={styles.forYouCard}>
            <Text style={styles.forYouTitle}>{item.title}</Text>
            <Text style={styles.forYouDesc}>{item.desc}</Text>
            <View style={styles.tagContainer}>
                <Text style={styles.tagText}>{item.category}</Text>
            </View>
            <Text style={styles.dateText}>{item.date}</Text>
            </View>
        )}
        />
    </View>

    {/* Events Section */}
    <View style={styles.container2}>
        <Text style={styles.upcomingTitle}>Upcoming Events</Text>
        {/* Date Selector */}
        <View style={{ paddingHorizontal: 10, marginBottom: 10 }}>
        <FlatList
        data={weekDates}
        horizontal
        keyExtractor={(date) => date.toISOString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item: date }) => {
            const dateStr = formatDate(date);
            const isSelected = selectedDate === dateStr;
        
            return (
            <TouchableOpacity
                onPress={() => setSelectedDate(dateStr)}
                style={styles.dateContainer}
            >
                <Text style={styles.dateDay}>
                {date.toLocaleDateString('en-US', { weekday: 'short' })}
                </Text>
                <View style={[styles.dateNum, isSelected && styles.todayHighlight]}>
                <Text style={{ color: isSelected ? '#fff' : '#333', fontSize: 14, fontWeight: 'bold' }}>
                    {date.getDate()}
                </Text>
                </View>
            </TouchableOpacity>
            );
        }}
        
        />
        </View>
        {/* Selected Date Events */}
        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
        {eventsByDate[selectedDate] ? (
            Object.entries(eventsByDate[selectedDate]).map(([time, event], index) => (
                <View style={styles.eventContainer}>
                <Text key={index} style={styles.eventTimeText}>
                    {time}
                </Text>
                <Text key={index} style={styles.eventText}>
                    {event}
                </Text>
                </View>
            
            ))
        ) : (
            <Text style={styles.noEventText}>No events for this day</Text>
        )}
        </View>
        
    </View>
    
    </View>
    <CustomNavBar/>
    </>
);
}

const styles = StyleSheet.create({
forYouContainer: {
    marginTop: 10,
},
sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 5,
},
sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
},
seeMore: {
    color: '#fff',
    fontSize: 14,
},
forYouCard: {
    backgroundColor: '#fff',
    width: 260,
    borderRadius: 15,
    padding: 15,
    marginRight: 15,
},
forYouTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginVertical: 5,
},
forYouDesc: {
    fontSize: 13,
    color: '#555',
    marginBottom: 8,
},
tagContainer: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#065DAB',
    borderRadius: 12,
},
tagText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
},
dateText: {
    fontSize: 12,
    color: '#888',
},
container2: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 25,
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
    alignItems: 'center',
    paddingVertical: 4,
    width: 40,
    margin: 5,
    gap: 10
},
dateDay: {
    fontSize: 15,
    color: '#444',
    marginBottom: 2,
    textTransform: 'uppercase',
},
dateNum: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
},

todayHighlight: {
    backgroundColor: '#065DAB',
},

eventContainer: {
    borderBottomColor: '#E7E7E7',
    borderBottomWidth: 1,
    borderLeftColor: '#065DAB',
    borderLeftWidth: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    padding: 10,
    marginBottom: 8
},

eventText: {
    fontSize: 17,
    color: '#222',
    marginBottom: 5,
    fontWeight: 'bold',
},
eventTimeText: {
    fontSize: 14,
    color: '#222',
    marginBottom: 5,
},
noEventText: {
    fontSize: 17,
    fontStyle: 'italic',
    color: '#777',
    textAlign: 'center',
},
});
