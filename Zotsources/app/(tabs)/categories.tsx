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

const recentIcon = require('../../assets/images/recent.png');
const searchIcon = require('../../assets/images/search.png');

export default function Categories() {
const [search, setSearch] = useState('');
const [searchActive, setSearchActive] = useState(false);
const [recentSearches, setRecentSearches] = useState([
  "Mental health",
  "Social events",
  "Food resources"
]);
const suggestedSearches = [
  "Graduate school workshop",
  "Financial aid assistance",
  "LARC tutoring"
];

const filteredCategories = CATEGORIES.filter(cat =>
    cat.label.toLowerCase().includes(search.toLowerCase())
);

return (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
    <View style={styles.header}>
        <Text style={styles.headerText}>Categories</Text>
    </View>

    <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 16,
        paddingHorizontal: 10,
        height: 40
      }}>
        <TextInput
          placeholder="Which resource are you looking for?"
          value={search}
          style={{ flex: 1 }}
          onFocus={() => setSearchActive(true)}
          onChangeText={setSearch}
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
    {searchActive && (
      <View style={{
        position: 'absolute',
        top:75,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff',
        zIndex: 999,
        paddingTop: 66
      }}>
        {/* Sticky search bar inside overlay */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingBottom: 8,
          backgroundColor: '#fff',
          borderBottomWidth: 1,
          borderColor: '#eee',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          height: 66
        }}>
          <TouchableOpacity onPress={() => setSearchActive(false)}>
            <Text style={{fontSize: 22, color: '#065DAB', marginRight: 10}}>←</Text>
          </TouchableOpacity>
          <TextInput
            autoFocus
            value={search}
            onChangeText={setSearch}
            placeholder="Search"
            style={{
              flex: 1,
              marginLeft: 8,
              fontSize: 16
            }}
            onSubmitEditing={() => setSearchActive(false)}
          />
        </View>
        {/* Scrollable recent/suggested below */}
        <FlatList
          style={{ marginTop: 0 }}
          ListHeaderComponent={
            <>
              {/* Recent Searches */}
              <Text style={{marginTop: 20, marginLeft: 20, fontWeight: '600'}}>Recent Searches</Text>
              {recentSearches.length === 0 && (
                <Text style={{marginLeft: 20, color: '#aaa'}}>No recent searches</Text>
              )}
              {recentSearches.map((item, idx) => (
                <View key={idx} style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginTop: 13}}>
                  <Image source={recentIcon} style={{ width: 18, height: 18, marginRight: 8, tintColor: '#888' }} />
                  <TouchableOpacity onPress={() => setSearch(item)} style={{flex: 1}}>
                    <Text style={{fontSize: 15, color: '#333'}}>{item}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setRecentSearches(recentSearches.filter((_, i) => i !== idx))}
                  >
                    <Text style={{fontSize: 19, color: '#888', marginLeft: 10}}>×</Text>
                  </TouchableOpacity>
                </View>
              ))}

              {/* Suggested Searches */}
              <Text style={{marginTop: 28, marginLeft: 20, fontWeight: '600'}}>Suggested Searches</Text>
              <View style={{
                backgroundColor: '#F6F6F6',
                marginHorizontal: 14,
                borderRadius: 13,
                paddingVertical: 7,
                marginTop: 7,
              }}>
                {suggestedSearches.map((item, idx) => (
                  <View key={idx} style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 8, marginVertical: 7}}>
                    <Image source={searchIcon} style={{ width: 18, height: 18, marginRight: 8, tintColor: '#888' }} />
                    <TouchableOpacity onPress={() => setSearch(item)} style={{flex: 1}}>
                      <Text style={{fontSize: 15, color: '#333'}}>{item}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </>
          }
          data={[]}
          renderItem={null}
          keyboardShouldPersistTaps="handled"
        />
      </View>
    )}
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