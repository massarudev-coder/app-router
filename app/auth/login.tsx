import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text>Tela de Login</Text>

            <Text onPress={() => router.back()}>Voltar para Tabs</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})