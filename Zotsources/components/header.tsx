import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { useRouter } from 'expo-router';

import headerImage from '../assets/images/header_logo.png';
import back from '../assets/images/backIcon.png';

type HeaderProps = {
showBackButton?: boolean;  // optional, default true
onBackPress?: () => void;  // optional custom back handler
};

export default function Header({ showBackButton = true, onBackPress }: HeaderProps) {
const router = useRouter();

const handleBackPress = () => {
    if (onBackPress) {
    onBackPress();
    } else {
    router.back();
    }
};

return (
    <View style={styles.header}>
    <View style={styles.headerRow}>
        {showBackButton ? (
        <TouchableOpacity onPress={handleBackPress}>
            <Image source={back} style={styles.backImage} resizeMode="contain" />
        </TouchableOpacity>
        ) : (
        <View style={styles.placeholder} />
        )}

        <Image source={headerImage} style={styles.image} resizeMode="contain" />

        <View style={styles.placeholder} />
    </View>
    </View>
);
}

const styles = StyleSheet.create({
header: {
    height: 70,
    width: '100%',
    backgroundColor: '#065DAB',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 8,
},
headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
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
image: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
},
});
