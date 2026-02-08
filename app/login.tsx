import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.input}
                placeholder="email"
                placeholderTextColor="#9ca3af"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#9ca3af"
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.replace('/(tabs)/home')}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/register')}>
                <Text style={styles.infotext}>Don't Have an Account? <Text style={styles.link}>Create One</Text></Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#020617',
        padding: 20,
        justifyContent: 'center',
    },

    title: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    input: {
        backgroundColor: '#111827',
        padding: 14,
        borderRadius: 10,
        color: 'white',
        marginBottom: 12,
    },

    button: {
        backgroundColor: '#22c55e',
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },

    buttonText: {
        color: '#022c22',
        fontWeight: 'bold',
    },
    
    infotext: {
        color: 'white',
        textAlign: 'center',
        marginTop: 15
    },

    link: {
        color: '#22c55e',
        marginTop: 15,
        textAlign: 'center',
    },
})