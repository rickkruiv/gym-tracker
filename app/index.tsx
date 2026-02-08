import { useRouter } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../assets/images/cbum-training.webp')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Make your body healthier{"\n"}
            and <Text style={styles.highlight}>stronger</Text>
          </Text>

          <Text style={styles.subtitle}>
            Sport is a form of physical activity that is usually competitive with the aim of improving physical abilities and skills.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace('/login')}
        >
          <Text style={styles.buttonText}>Get started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end'
  },

  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    height: '100%',
    justifyContent: 'flex-end'
  },

  textContainer: {
    marginBottom: 30
  },

  title: {
    color: 'white',
    fontSize: 58,
    fontWeight: 'bold'
  },

  highlight: {
    color: '#16a34a'
  },

  subtitle: {
    color: 'white',
    fontSize: 14,
    marginTop: 10
  },

  button: {
    backgroundColor: '#16a34a',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 60
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
})