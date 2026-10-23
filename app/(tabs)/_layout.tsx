import { Tabs } from "expo-router";

export default function RootTabsLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveBackgroundColor: '#0105fe',
            tabBarActiveTintColor: '#ffffff',

            tabBarInactiveBackgroundColor: '#342298fe',
            tabBarInactiveTintColor: '#c69aff',

            tabBarStyle: {
                height: 65,
                },
                tabBarLabelStyle:{
                    fontSize: 15,
                }
            
        }}>
            <Tabs.Screen name="index" options={{ title: "Início" }} />
            <Tabs.Screen name="contatos" options={{ title: "Contatos" }} />
        </Tabs>
    )
}