import * as React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function About() {

    const router = useRouter();

    return (
        <>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Image source={require("../../assets/images/about/about-us.jpg")} style={styles.image} />
                <View>
                    <Text style={styles.title}>
                        Little Lemon Restaurant
                    </Text>
                    <Text style={styles.subtitle}>
                        A Mediterranean Escape in Chicago
                    </Text>
                    <Text style={styles.text}>
                        Welcome to Little Lemon, a family-owned Mediterranean restaurant located in the heart of Chicago, Illinois.
                        We take pride in serving traditional recipes with a modern twist, inspired by the rich culinary heritage of Italy, Greece, and Turkey.
                    </Text>
                    <Text style={styles.text}>
                        Founded by Italian brothers Mario and Adrian, Little Lemon offers a warm and inviting atmosphere where you can enjoy a carefully crafted menu
                        that changes seasonally. Whether you&apos;re here for a quick bite or a leisurely meal, we promise an unforgettable dining experience.
                    </Text>
                    <Text style={styles.text}>
                        Join us for a taste of the Mediterranean right here in Chicago. We look forward to welcoming you to Little Lemon!
                    </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button, { marginRight: 10, flex: 1 }]} onPress={() => router.push("/menu")}>
                        <Text style={styles.buttonText}>Book Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { marginLeft: 10, flex: 1 }]} onPress={() => router.push("/reserve")}>
                        <Text style={styles.buttonText}>Reserve a Table</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white",
        alignContent: "center",
    },
    contentContainer: {
        justifyContent: "center",
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
        alignSelf: "center",
        paddingTop: 20,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
        fontWeight: "600",
        alignSelf: "center",
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 15,
        paddingHorizontal: 40,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15,
        paddingHorizontal: 20,
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