import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SplashScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/anteater.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>UCI Resource Hub</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
        <Text style={styles.buttonText}>Begin</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005BBB', // UCI Blue
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 30,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#FFD200', // UCI Gold
    backgroundColor: '#d9e7f7', // soft blue background
    padding: 10,
  },
  title: {
    fontSize: 24,
    color: '#FFD200', // UCI Gold
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#003DA5',
    fontSize: 16,
    fontWeight: '600',
  },
});