import React, { useState } from 'react';
import {
StyleSheet,
Text,
TouchableOpacity,
View,
FlatList,
Image,
Linking
} from 'react-native';
import Header from '@/components/header';
import CustomNavBar from '@/components/NavBar';
import { useRouter } from 'expo-router';
import { Inter_400Regular, useFonts } from '@expo-google-fonts/inter';
import saved from '../../assets/images/saved1.png';
import share from '../../assets/images/share.png';
import peterIcon from '../../assets/images/peterIcon.png';
import sort from '../../assets/images/sort.png';

export default function ResourcePage() {
    const [fontsLoaded] = useFonts({
    Inter_400Regular,
    'FamiljenGrotesk-Regular': require('../../assets/fonts/FamiljenGrotesk-Regular.ttf'),
    'FamiljenGrotesk-Bold': require('../../assets/fonts/FamiljenGrotesk-Bold.ttf'),
    'FamiljenGrotesk-Medium': require('../../assets/fonts/FamiljenGrotesk-Medium.ttf'),
    'FamiljenGrotesk-Italic': require('../../assets/fonts/FamiljenGrotesk-Italic.ttf'),
    });

    if (!fontsLoaded) {
    return null; // or a loading indicator
    }

    return (
        <>
        
    <View>
        <Header />
        <View style={styles.titleRow}>
        <Text style={styles.sectionTitle}>LARC Tutoring Program</Text>
        <View style={styles.iconRow}>
            <Image source={saved} style={styles.logoImage} />
            <Image source={share} style={styles.logoImage} />
        </View>
        </View>
        <View style={styles.descriptionSection}>
        <Text style={styles.descriptionText}>
            Description
        </Text>
        <Text>
        Struggling with a tough class or want to improve your study habits? 
        The LARC Tutoring Program offers affordable, peer-led tutoring sessions 
        in a collaborative small group format. Our tutors will help explain concepts, 
        and keep you on track all quarter long.
        </Text>
        </View>
        <View style={styles.container_3}>
        <Text style={styles.descriptionText}>
            Date & Location
        </Text>
            <View style={styles.dateLocation}>
                <Text style={{ color: '#fff' }}>
                    Friday, May 18 @ 12:00 PM - 3:00 PM
                </Text>
            </View>
            <View style={styles.dateLocation}>
                <Text style={{ color: '#fff' }}>
                    Science Library - LARC Center
                </Text>
            </View>
        </View>
    
        <TouchableOpacity
        style={styles.officalWebsiteButton}
        onPress={() => Linking.openURL('https://larc.uci.edu/')}>
        <Text style={styles.websiteText}>Official Website</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.centerDetailsSection}>
        <Text>
            Center Details
        </Text>
        <View style={styles.row}>
            <Image source={peterIcon} style={styles.peterLogoImage} />
            <Text>
            LARC: Learning and Academic Resource Center
            </Text>
        </View>
    </View>
    <View style={styles.relatedSection}>
        <View style={styles.row}>
            <Text>
                Related Resources
            </Text>
            <Image source={sort} style={styles.logoImageBigger} />
        </View>
    
    </View>
    <View style={styles.relatedSection}>
    <View style={styles.row}>
    <Text>
        FAFSA
    Application Due
    </Text>
    <Text>
    Occasional visits from trained therapy dogs providing 
    comfort and stress relief to students.
    </Text>
    </View>
    </View>
    <View style={styles.navWrapper}>
        <CustomNavBar />
    </View>
    </>
    );
}



const styles = StyleSheet.create({
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        borderColor: '#E7E7E7',
        borderWidth: 2,
        padding: 20
    },

    centerDetailsSection: {
        backgroundColor: '#F8F8F8',
        borderColor: '#E7E7E7',
        borderWidth: 2,
        padding: 20
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        marginTop: 10
    },

    relatedSection: {
        borderBottomColor: '#E7E7E7',
        borderBottomWidth: 2,
        padding: 20
    },

    sectionTitle: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'FamiljenGrotesk-Regular',
    },
    
    iconRow: {
        flexDirection: 'row',
        gap: 10, // add space between icons (React Native >= 0.71+)
    },
    
    logoImage: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },
    logoImageBigger: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    peterLogoImage: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
        borderRadius: 10
    },

    descriptionSection: {
        padding: 20,
        backgroundColor: '#fff',
        alignContent: 'center',
        textAlign: 'center',
        marginBottom: 10
    },

    descriptionText: {
        fontFamily: 'FamiljenGrotesk-Regular',
        fontSize: 17,
    },

    descriptionSectionText: {
        fontFamily: 'Inter',
        fontSize: 15
    },

    dateLocation: {
        backgroundColor: '#065DAB',
        fontFamily: 'Inter',
        fontSize: 12,
        borderRadius: 15,
        padding: 10,
        width: '80%'
    },
    
    container_3: {
        marginRight: 10,
        marginLeft: 15,
        gap: 5
    },

    officalWebsiteButton: {
        backgroundColor: '#EBAD00',
        padding: 12,
        margin: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    websiteText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'FamiljenGrotesk-Medium',
    },
    navWrapper: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    
    });
    