import { Stack, useRouter } from "expo-router";
import { Button } from "react-native";

export default function RootStackLayout() {

    const router = useRouter();

    return (
        <Stack screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: '#062952', // Cor de fundo do cabeçalho
            },
            headerTintColor: '#fff', // Cor do texto do cabeçalho
            headerTitleAlign: 'center', // Alinhamento do texto do cabeçalho
        }}>
            <Stack.Screen name="inicio" options={{
                title: 'Home',
                headerRight: () => <Button title="Ir para Tabs" onPress={() => router.push("/(tabs)/contatos")} />
            }} />
            <Stack.Screen name="auth/login" options={{
                title: 'Tela de Login'
            }} />
        </Stack >
    );
}