// models/Activity.ts
export type ActivityType = "STATIONARY" | "WALKING" | "RUNNING" | "CYCLING";

export interface ActivityTrackerUiState {
  currentActivity: ActivityType;
  activityDuration: number;
  isActivityStarted: boolean;
  totalDistance: number;
  currentLight: number;
  currentPressure: number;
  sessionId: number;
  timestamp?: string;
}

export const mockActivities: ActivityTrackerUiState[] = [
  {
    sessionId: 1,
    currentActivity: "WALKING",
    activityDuration: 1200000,
    isActivityStarted: true,
    totalDistance: 1200,
    currentLight: 300,
    currentPressure: 1012,
    timestamp: "2023-11-15T09:30:00"
  },
  {
    sessionId: 2,
    currentActivity: "RUNNING",
    activityDuration: 1800000,
    isActivityStarted: true,
    totalDistance: 5000,
    currentLight: 500,
    currentPressure: 1010,
    timestamp: "2023-11-14T17:45:00"
  },
  {
    sessionId: 3,
    currentActivity: "RUNNING",
    activityDuration: 1800000,
    isActivityStarted: true,
    totalDistance: 5000,
    currentLight: 500,
    currentPressure: 1010,
    timestamp: "2023-11-14T17:45:00"
  },
  {
    sessionId: 4,
    currentActivity: "RUNNING",
    activityDuration: 1800000,
    isActivityStarted: true,
    totalDistance: 5000,
    currentLight: 500,
    currentPressure: 1010,
    timestamp: "2023-11-14T17:45:00"
  },
  {
    sessionId: 5,
    currentActivity: "RUNNING",
    activityDuration: 1800000,
    isActivityStarted: true,
    totalDistance: 5000,
    currentLight: 500,
    currentPressure: 1010,
    timestamp: "2023-11-14T17:45:00"
  },
  {
    sessionId: 6,
    currentActivity: "RUNNING",
    activityDuration: 1800000,
    isActivityStarted: true,
    totalDistance: 5000,
    currentLight: 500,
    currentPressure: 1010,
    timestamp: "2023-11-14T17:45:00"
  },
  {
    sessionId: 7,
    currentActivity: "RUNNING",
    activityDuration: 1800000,
    isActivityStarted: true,
    totalDistance: 5000,
    currentLight: 500,
    currentPressure: 1010,
    timestamp: "2023-11-14T17:45:00"
  },
];