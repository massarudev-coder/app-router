import { Tabs } from "expo-router";

export default function RootTabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen 
            name="index"
            options={{title: "Início"}}/>
            <Tabs.Screen name="contatos"
            options={{title: "Contatos"}}/>
        </Tabs>
    )
}