import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const homeIcon = require('../assets/images/home.png');
const forumIcon = require('../assets/images/fourm.png');
const searchIcon = require('../assets/images/search.png');
const savedIcon = require('../assets/images/saved.png');
const settingsIcon = require('../assets/images/settings.png');

export default function CustomNavBar() {
const [activeTab, setActiveTab] = useState('Home');


return (
    <View>

    <View style={styles.navBar}>
        {[
        { name: 'Home', icon: homeIcon },
        { name: 'Forum', icon: forumIcon },
        { name: 'Search', icon: searchIcon },
        { name: 'Saved', icon: savedIcon },
        { name: 'Settings', icon: settingsIcon },
        ].map((tab) => (
        <TouchableOpacity
            key={tab.name}
            onPress={() => setActiveTab(tab.name)}
            style={[
            styles.navItem,
            activeTab === tab.name && styles.activeNavItem,
            tab.name === 'Search' && styles.searchNavItem,
            ]}
        >
            <Image
            source={tab.icon}
            style={[
                styles.icon,
                activeTab === tab.name ? { tintColor: '#FFD200' } : { tintColor: 'white' },
                tab.name === 'Search' ? styles.searchIcon : {},
            ]}
            />
            {tab.name !== 'Search' && (
            <Text style={[styles.navText, activeTab === tab.name && styles.activeNavText]}>
                {tab.name}
            </Text>
            )}
        </TouchableOpacity>
        ))}
    </View>
    </View>
);
}

const styles = StyleSheet.create({
navBar: {
    height: 60,
    backgroundColor: '#005BBB',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
},
navItem: {
    flex: 1,
    alignItems: 'center',
},
activeNavItem: {},
navText: {
    color: 'white',
    fontSize: 12,
},
activeNavText: {
    color: '#FFD200',
},
icon: {
    width: 24,
    height: 24,
    marginBottom: 2,
    resizeMode: 'contain',
},
searchNavItem: {
    marginTop: -10,
},
searchIcon: {
    width: 30,
    height: 30,
},
});
