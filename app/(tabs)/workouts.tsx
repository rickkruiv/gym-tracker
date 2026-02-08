import { View, Text, StyleSheet } from 'react-native';
import { FloatingMenu } from '@/components/ui/floatingMenu'

export default function Workouts() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workouts</Text>

      <FloatingMenu
        actions={[
          {
            label: "Quick workout",
            icon: "barbell",
            onPress: () => { },
          },
          {
            label: "Create routine",
            icon: "document-text",
            onPress: () => { },
          },
        ]}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 24,
    paddingTop: 64,
  },

  title: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },

});
