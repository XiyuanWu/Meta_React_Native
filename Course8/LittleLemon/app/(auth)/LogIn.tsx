import { useRouter } from "expo-router";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView, Platform } from "react-native";

export default function LogInScreen() {
    const router = useRouter();

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={40}
        >
            <Text style={styles.title}>Sign Up/Log In</Text>
            <Text style={styles.subtitle}>If you have not signed up yet, the system will automatically sign you up.</Text>

            <TouchableOpacity style={styles.back_arrow} onPress={() => router.replace("/LoginPage")} accessibilityLabel="Go back">
                <Text style={{ fontSize: 60, fontWeight: "600" }}>‹</Text>
            </TouchableOpacity>

            <View style={styles.form}>
                <View style={styles.field}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.textInputBox} placeholderTextColor="black" />
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.textInputBox} placeholderTextColor="black" />
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>Phone</Text>
                    <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} style={styles.textInputBox} placeholderTextColor="black" />
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput placeholder="Password" value={password} onChangeText={setPassword} style={styles.textInputBox} placeholderTextColor="black" secureTextEntry />
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => { router.push("/(drawer)/about"); }}>
                <Text style={styles.buttonText}>Logn In</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        paddingHorizontal: 30,
        marginBottom: 30,
        alignItems: "center",
    },
    back_arrow: {
        position: "absolute",
        top: 5,
        left: 20,
        padding: 10,
        paddingTop: 30,
        zIndex: 1
    },
    form: {
        width: 400,
        alignSelf: "center",
    },
    field: {
        width: "100%",
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        paddingLeft: 40,
    },
    button: {
        marginTop: 25,
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "#f4ce14",
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        width: 170,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    textInputBox: {
        width: "80%",
        height: 40,
        borderWidth: 1,
        borderColor: "black",
        marginHorizontal: 40,
        marginTop: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        color: "black",
        padding: 14,
        alignContent: "center",
    },
});

