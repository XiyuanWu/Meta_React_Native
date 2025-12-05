import { Tabs } from 'expo-router';
import React from 'react';


export default function TabLayout() {

  return (
    <Tabs screenOptions={{ headerShown: false, tabBarIconStyle: { display: 'none' }, tabBarLabelStyle: { fontSize: 20 }, tabBarStyle: { height: 40 } }}>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
      <Tabs.Screen name="subscribe" options={{ title: 'Subscribe' }} />
    </Tabs>
  );
}
