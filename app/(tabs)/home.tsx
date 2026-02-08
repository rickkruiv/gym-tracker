import { View, Text, StyleSheet } from 'react-native';
import { Fire, Star, Barbell, Lightning } from 'phosphor-react-native';
import { FloatingMenu } from '@/components/ui/floatingMenu'

export default function Home() {
  const week = [
    { day: 'Sun', trained: false, rest: true },
    { day: 'Mon', trained: true, rest: false },
    { day: 'Tue', trained: true, rest: false },
    { day: 'Wed', trained: false, rest: true },
    { day: 'Thu', trained: false, rest: false },
    { day: 'Fri', trained: true, rest: false },
    { day: 'Sat', trained: true, rest: false },
  ];


  const workoutDays = [1, 2, 4, 5, 6];

  const calculateStreak = () => {
    let streak = 0;

    for (let i = week.length - 1; i >= 0; i--) {
      const isWorkoutDay = workoutDays.includes(i);
      if (isWorkoutDay && !week[i].trained) break;
      if (week[i].trained) streak++;
    }

    return streak;
  };

  const streak = calculateStreak();

  const totalWorkoutDays = workoutDays.length;
  const trainedDays = week.filter((d, i) => workoutDays.includes(i) && d.trained).length;
  const consistency = Math.round((trainedDays / totalWorkoutDays) * 100);

  const todayIndex = new Date().getDay();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Training Streak</Text>

      <View style={styles.streakGrid}>
        <View style={styles.gridRow}>
          <View style={styles.smallCard}>
            <Text style={styles.metricNumber}>{streak}</Text>
            <Text style={styles.metricLabel}>Streak Days</Text>
            <Fire size={100} weight="fill" color="#ff6a00" style={styles.bgIcon} />
          </View>

          <View style={styles.smallCard}>
            <Text style={styles.metricNumber}>{trainedDays}</Text>
            <Text style={styles.metricLabel}>Days Trained</Text>
            <Barbell size={100} weight="fill" color="#ff0ff0" style={styles.bgIcon} />
          </View>
        </View>

        <View style={styles.gridRow}>
          <View style={styles.smallCard}>
            <Text style={styles.metricNumber}>12</Text>
            <Text style={styles.metricLabel}>Best Streak</Text>
            <Lightning size={100} weight="fill" color="#00eeff" style={styles.bgIcon} />
          </View>

          <View style={styles.smallCard}>
            <Text style={styles.metricNumber}>{consistency}%</Text>
            <Text style={styles.metricLabel}>Consistency</Text>
            <Star size={100} weight="fill" color="#fffb00" style={styles.bgIcon} />
          </View>
        </View>

        <View style={styles.bigCard}>
          <Text style={styles.subtitle}>Weekly Activity</Text>
          <View style={styles.weekRow}>
            {week.map((d, i) => (
              <View key={i} style={styles.dayContainer}>
                {/* <View style={[styles.dot, d.trained ? styles.green : d.rest ? styles.gray : styles.red]} /> */}
                <View
                  style={[
                    styles.dot,
                    d.trained ? styles.green : d.rest ? styles.gray : styles.red,
                    i === todayIndex && styles.dotToday,
                  ]}
                />

                <Text style={styles.dayText}>{d.day}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

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
          {
            label: "Create routine",
            icon: "restaurant",
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

  subtitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  streakGrid: {
    width: '100%',
    display: 'flex',
  },

  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dayContainer: {
    alignItems: 'center',
  },

  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginBottom: 6,
  },

  green: {
    backgroundColor: '#22c55e',
  },

  gray: {
    backgroundColor: '#374151',
  },

  red: {
    backgroundColor: '#ef4444'
  },

  dayText: {
    color: '#9ca3af',
    fontSize: 12,
  },

  gridRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },

  smallCard: {
    width: '48%',
    backgroundColor: '#111827',
    padding: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },

  bigCard: {
    backgroundColor: '#111827',
    padding: 16,
    borderRadius: 12,
    marginTop: 4,
  },

  metricNumber: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: 40,
  },

  metricLabel: {
    color: '#9ca3af',
    fontSize: 12,
    marginTop: 2,
  },

  bgIcon: {
    position: 'absolute',
    right: -27,
    bottom: -22,
    opacity: 0.35,
  },

  dotToday: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#fff'
  },
});
