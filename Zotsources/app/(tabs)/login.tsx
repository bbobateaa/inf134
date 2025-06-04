import { useRouter } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import GroupImage from '../../assets/images/Group_127.png';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import Header from '@/components/header';

export default function Login() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Header/>
      <View style={styles.container}>
        <Image source={GroupImage} style={styles.image} resizeMode="contain" />
        <Text style={styles.title}>Welcome Anteater!</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <View style={styles.row}>
          <Text style={styles.bodyText}>Remember Me</Text>
          <Text style={styles.bodyText}>Forget Password</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/onboarding')}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 100,
    width: '95%',
    marginBottom: 10
  },
  image: {
    width: '80%',
    height: 200,
  },
  title: { fontSize: 24, marginBottom: 20 },
  bodyText: {
    fontSize: 15, marginBottom: 10, color: '#065DAB'
  },
  input: { backgroundColor: '#eee', marginBottom: 15, padding: 10, borderRadius: 6, width: '100%' },
  button: { backgroundColor: '#EBAD00', padding: 12, borderRadius: 20, alignItems: 'center', width: '90%' },
  buttonText: { color: '#fff' },
});
