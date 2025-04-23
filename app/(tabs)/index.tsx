import { Image, StyleSheet, Platform , FlatList, Text,} from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ActivityItem from '@/components/ui/ActivityItem';
import { mockActivities } from '../../components/models/activity';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Activity History</ThemedText>
      console.log("mockActivities", mockActivities);

      <FlatList
  data={mockActivities}
  renderItem={({ item }) => <ActivityItem item={item} />}
  keyExtractor={(item) => item.sessionId.toString()}
  style={styles.list}
  contentContainerStyle={[styles.listContent, { flexGrow: 1 }]}
  ListEmptyComponent={
    <Text style={{ textAlign: 'center', marginTop: 20 }}>
      No activities found
    </Text>
  }
/>
    </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Crucial - ensures the container takes full height
  },
  title: {
    padding: 16,
    fontSize: 20,
    fontWeight: 'bold',
  },
  list: {
    flex: 1, // Crucial - allows FlatList to expand
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});

const styles1 = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
