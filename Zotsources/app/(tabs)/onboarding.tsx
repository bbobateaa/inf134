import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import logo from '../../assets/images/logo.png';
import { useFonts } from '@expo-google-fonts/inter';
import Header from '../../components/header';


export default function onBoarding() {
const router = useRouter();
const [fontsLoaded] = useFonts({
    'FamiljenGrotesk-Regular': require('../../assets/fonts/FamiljenGrotesk-Regular.ttf'),
    'FamiljenGrotesk-Bold': require('../../assets/fonts/FamiljenGrotesk-Bold.ttf'),
    'FamiljenGrotesk-Medium': require('../../assets/fonts/FamiljenGrotesk-Medium.ttf'),
    'FamiljenGrotesk-Italic': require('../../assets/fonts/FamiljenGrotesk-Italic.ttf'),
});

const options = ['Academic & Career', 'Wellbeing & Basic Needs', 'Community & Engagement', 'Financial & Savings', 'Most Popular'];

const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

const toggleOption = (option: string) => {
    setSelectedOptions((prev) =>
    prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
};

if (!fontsLoaded) {
    return null; // or <AppLoading />
}
return (
    <View style={styles.container}>
    <Header />
    <View style={styles.container_2}>
        <Text style={{ fontFamily: 'FamiljenGrotesk-Regular', fontSize: 25, color: '#fff' }}>
        Hello, Taylor! Let’s curate your Resource dashboard.
        </Text>
        <Text style={styles.bodyText}>
        You can update these later in settings.
        </Text>
    </View>
    <Image source={logo} style={styles.logoImage} />
    <View style={styles.container_3}>
        <Text style={styles.title}>What are you interested in?</Text>
        <Text style={styles.bodyText2}>I want to find resources about...</Text>

        <View style={styles.optionsContainer}>
        {options.map((option) => {
            const isSelected = selectedOptions.includes(option);
            return (
            <TouchableOpacity
                key={option}
                onPress={() => toggleOption(option)}
                style={[
                styles.option,
                isSelected && styles.optionSelected,
                ]}
            >
                <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
                {option}
                </Text>
            </TouchableOpacity>
            );
        })}
        </View>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/landing')}>
            <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
    </View>
    </View>
);
}

const styles = StyleSheet.create({
background: {
    height: '100%',
    width: '100%',
    backgroundColor: '#065DAB',
},
header: {
    height: 70,
    width: '100%',
    backgroundColor: '#065DAB',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 8,
},
headerText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Inter_400Regular',
},
container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#065DAB',
    paddingHorizontal: 0,
    paddingTop: 20,
},
container_2: {
    margin: 30,
    textAlign: 'left',
    gap: 5,
},
container_3: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '100%',
    height: '100%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
    marginTop: 30,
    paddingHorizontal: 20,
},
row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 100,
    width: '95%',
    marginBottom: 10,
},
headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
},
image: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
},
logoImage: {
    position: 'absolute',
    top: 220,
    right: 260,
    alignSelf: 'center',
    width: 100,
    height: 100,
    zIndex: 10,
},
backImage: {
    width: 20,
    height: 20,
},
placeholder: {
    width: 20,
    height: 20,
    opacity: 0,
},
title: { fontSize: 24, marginBottom: 20 },
bodyText: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'FamiljenGrotesk-Italic',
},
bodyText2: {
    fontSize: 15,
    color: '#232323',
    fontFamily: 'FamiljenGrotesk-Italic',
},
input: { backgroundColor: '#eee', marginBottom: 15, padding: 10, borderRadius: 6, width: '100%' },
button: { backgroundColor: '#065DAB', padding: 12, borderRadius: 20, alignItems: 'center', width: '90%', marginTop: 15 },
buttonText: { color: '#fff' },

optionsContainer: {
    flexDirection: 'column',
    gap: 5,
    width: '100%',
    marginTop: 10,
    justifyContent: 'center',
},
option: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderColor: '#065DAB',
    borderWidth: 2,
    margin: 5,
},
optionSelected: {
    backgroundColor: '#065DAB',
},
optionText: {
    color: '#065DAB',
    fontSize: 16,
},
optionTextSelected: {
    color: '#fff',
},
});
