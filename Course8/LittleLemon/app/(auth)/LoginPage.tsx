import * as React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { useRouter } from "expo-router";

export default function LoginPage() {
    const router = useRouter();

    return (
        <ImageBackground source={require("../../assets/images/landing.jpg")} style={styles.backgroundImage} imageStyle={{ opacity: 0.2 }}>
            <View style={styles.container}>
                <Image style={styles.logo} source={require("../../assets/images/logo/asset20.png")} />
                <Text style={styles.text1}>
                    Welcome to Little Lemon!
                </Text>
                <Text style={styles.text2}>
                    Please log in to continue.
                </Text>
                <TouchableOpacity style={[styles.button]} onPress={() => { router.push("/LogIn"); }} >
                    <Text style={styles.buttonText}>Sign Up/Log In</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({

    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        width: "100%",
        height: "100%",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        backgroundColor: "rgba(110, 94, 94, 0.3)",
        backdropFilter: "blur(4px)",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 10,
        resizeMode: "contain",
    },
    text1: {
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        padding: 5,
    },
    text2: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: "center",
    },
    button: {
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "#f4ce14",
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        width: 200,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
    },
});