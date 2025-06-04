    import { useState } from 'react';
    import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

    const CATEGORIES = [
    {
        label: 'Academics & Studies',
        icon: require('../../assets/images/books.png'),
    },
    {
        label: 'Campus Events & Involvement',
        icon: require('../../assets/images/party-popper.png'),
    },
    {
        label: 'Career & Professional',
        icon: require('../../assets/images/briefcase.png'),
    },
    {
        label: 'Health & Wellness',
        icon: require('../../assets/images/health-heart.png'),
    },
    {
        label: 'Freebies & Discounts',
        icon: require('../../assets/images/money.png'),
    },
    {
        label: 'Food, Housing & Financial',
        icon: require('../../assets/images/house.png'),
    },
    {
        label: 'Technology & Campus Tools',
        icon: require('../../assets/images/uci-pc.png'),
    },
    {
        label: 'Diversity & Identity',
        icon: require('../../assets/images/puzzle.png'),
    },
    ];

    export default function Categories() {
    const [search, setSearch] = useState('');

    const filteredCategories = CATEGORIES.filter(cat =>
        cat.label.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Categories</Text>
        </View>

        <View style={styles.searchRow}>
            <TextInput
            style={styles.searchInput}
            placeholder="Which resource are you looking for?"
            value={search}
            onChangeText={setSearch}
            placeholderTextColor="#B0B0B0"
            />
        </View>

        <Text style={styles.catTitle}>Categories</Text>
        <FlatList
            data={filteredCategories}
            keyExtractor={item => item.label}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            contentContainerStyle={{ paddingHorizontal: 18, paddingBottom: 8 }}
            renderItem={({ item }) => (
            <TouchableOpacity style={styles.catCard}>
                <Text style={styles.catLabel}>{item.label}</Text>
                <Image source={item.icon} style={styles.catIcon} />
            </TouchableOpacity>
            )}
        />

        <View style={styles.bottomCardsRow}>
            {/* Student Resources Card */}
            <View style={[styles.resourceCard, styles.blueCard]}>
            <View style={styles.resourceHeader}>
                <Text style={styles.resourceCardTitle}>Explore All UCI Student Resources</Text>
                <Image source={require('../../assets/images/student-resources.png')} style={styles.resourceCardIcons} />
            </View>
            <TouchableOpacity style={styles.resourceBtn}>
                <Text style={styles.resourceBtnText}>See All Resources</Text>
            </TouchableOpacity>
            </View>

            {/* Resource Centers Card */}
            <View style={[styles.resourceCard, styles.goldCard]}>
            <View style={styles.resourceHeader}>
                <Text style={styles.resourceCardTitle}>Explore All UCI Resource Centers</Text>
                <Image source={require('../../assets/images/resource-center.png')} style={styles.resourceCardIcons} />
            </View>
            <TouchableOpacity style={styles.resourceBtn}>
                <Text style={styles.resourceBtnTextGold}>See All Centers</Text>
            </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    );
    }

    const styles = StyleSheet.create({
    header: {
        backgroundColor: '#065DAB',
        paddingVertical: 22,
        alignItems: 'center',
        marginBottom: 8,
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 18,
        marginTop: 12,
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        marginBottom: 5,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        backgroundColor: '#fff',
    },
    catTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal: 22,
        marginTop: 16,
        marginBottom: 10,
    },
    catCard: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 15,
        paddingVertical: 16,
        paddingHorizontal: 14,
        marginBottom: 16,
        flex: 1,
        marginHorizontal: 7,
        minHeight: 68,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 2,
        maxWidth: 180,
    },
    catIcon: {
        width: 70,
        height: 70,
        marginLeft: 8,
    },
    catLabel: {
        fontSize: 14,
        color: '#222',
        fontWeight: '600',
        textAlign: 'left',
        flexShrink: 1,
        maxWidth: 105,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 18,
        marginTop: 8,
        marginBottom: 12,
        gap: 12,
    },
    goldButton: {
        backgroundColor: '#FFD44F',
        borderRadius: 12,
        padding: 14,
        flex: 1,
        alignItems: 'center',
        marginRight: 5,
    },
    whiteButton: {
        backgroundColor: '#fff',
        borderColor: '#FFD44F',
        borderWidth: 2,
        borderRadius: 12,
        padding: 14,
        flex: 1,
        alignItems: 'center',
        marginLeft: 5,
    },
    btnText: {
        color: '#065DAB',
        fontWeight: 'bold',
        fontSize: 13,
        textAlign: 'center',
    },
    btnTextGold: {
        color: '#FFD44F',
        fontWeight: 'bold',
        fontSize: 13,
        textAlign: 'center',
    },
    bottomCardsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 18,
        marginTop: 14,
        marginBottom: 22,
        gap: 12,
    },
    resourceCard: {
        flex: 1,
        borderRadius: 16,
        padding: 18,
        marginHorizontal: 3,
        justifyContent: 'space-between',
        minHeight: 135,
        elevation: 2,
        overflow: 'hidden',
        paddingRight: 18,
    },
    blueCard: {
        backgroundColor: '#0856B2',
    },
    goldCard: {
        backgroundColor: '#FFD44F',
    },
    resourceHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 12,
        width: '100%',
        gap: 2,
    },
    resourceCardTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
        flex: 1,
        flexWrap: 'wrap',
        marginRight: 2,
        lineHeight: 22,
        maxWidth: 110,
    },
    resourceCardIcons: {
        width: 100,
        height: 38,
        resizeMode: 'contain',
        alignSelf: 'flex-start',
        marginTop: 0,
        marginRight: 8,
        marginLeft: -6,
    },
    resourceBtn: {
        backgroundColor: '#fff',
        borderRadius: 24,
        alignItems: 'center',
        paddingVertical: 9,
        paddingHorizontal: 0,
        marginTop: 6,
    },
    resourceBtnText: {
        color: '#222',
        fontWeight: 'bold',
        fontSize: 15,
    },
    resourceBtnTextGold: {
        color: '#222',
        fontWeight: 'bold',
        fontSize: 15,
    },
    });