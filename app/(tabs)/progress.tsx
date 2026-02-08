import { View, Text, StyleSheet } from 'react-native';

export default function Progress() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Progresso</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617', justifyContent: 'center', alignItems: 'center' },
  text: { color: 'white', fontSize: 22 }
});
