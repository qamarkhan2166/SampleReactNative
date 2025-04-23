// components/ActivityItem.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ActivityTrackerUiState } from '@/components/models/activity';

const ActivityItem = ({ item }: { item: ActivityTrackerUiState }) => {
    const formatTime = (ms: number) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        return `${minutes}m ${seconds}s`;
    };

    const formatDate = (isoString?: string) => {
        if (!isoString) return "Unknown date";
        return new Date(isoString).toLocaleString();
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.activityType}>{item.currentActivity}</Text>
            </View>

            <View style={styles.details}>
                <Text>Duration: {formatTime(item.activityDuration)}</Text>
                <Text>Distance: {item.totalDistance}m</Text>
            </View>

            <View style={styles.details}>
                <Text>Light: {item.currentLight} lux</Text>
                <Text>Pressure: {item.currentPressure} hPa</Text>
            </View>

            <Text style={styles.status}>
                {item.isActivityStarted ? "Completed" : "Not started"}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    activityType: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },
    timestamp: {
        fontSize: 12,
        color: '#000000',
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4,
    },
    status: {
        marginTop: 8,
        fontSize: 12,
        color: '#000000',
        textAlign: 'right',
    },
});

export default ActivityItem;