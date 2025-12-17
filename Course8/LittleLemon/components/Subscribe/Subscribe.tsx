import * as React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";

export default function Subscribe() {
    const [email, setEmail] = React.useState("");

    return (
        <>
            <View style={styles.container}>
                <Image source={require("../../assets/images/logo/asset20.png")} style={styles.logo} resizeMode="contain" />
                <Text style={styles.title}>Subscribe to our newsletters for our lastest news!</Text>
                <TextInput placeholder="Enter your email" value={email} onChangeText={setEmail} style={styles.textInputBox} placeholderTextColor="gray" keyboardType="email-address" />
                <TouchableOpacity style={[styles.button]} onPress={() => alert("Subscribe successfully!")}>
                    <Text style={styles.buttonText}>Subscribe</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: "center",
        marginTop: 60,
    },
    title: {
        fontSize: 25,
        textAlign: "center",
        paddingTop: 30,
        paddingHorizontal: 40,
        fontWeight: "semibold",
        justifyContent: "center",
    },
    textInputBox: {
        width: "80%",
        height: 40,
        borderWidth: 1,
        borderColor: "gray",
        marginHorizontal: 40,
        marginTop: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
        color: "black",
    },
    button: {
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "#f4ce14",
        padding: 8,
        borderRadius: 10,
        marginVertical: 20,
        width: "50%",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "600",
        alignSelf: "center",
    },
});