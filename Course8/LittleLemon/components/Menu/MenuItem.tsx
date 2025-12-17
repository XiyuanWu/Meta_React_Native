import * as React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function MenuItem(props: { name: string; description: string; price: string; image: string | number; category?: string }) {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{props.name}</Text>
                {/* Optionally display the category if passed in */}
                {props.category && (
                    <Text style={{ fontSize: 12, color: "#999", marginBottom: 4 }}>
                        {props.category}
                    </Text>
                )}
                <Text style={styles.description} numberOfLines={2}>{props.description}</Text>
                <Text style={styles.price}>${props.price}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={typeof props.image === "string" ? { uri: props.image } : props.image} style={styles.image} resizeMode="cover" />
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#f5f5f5",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#e0e0e0",
        marginHorizontal: 16,
        marginVertical: 8,
        padding: 15,
        overflow: "hidden",
    },
    textContainer: {
        flex: 2,
        marginRight: 12,
        justifyContent: "space-between",
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: "#666",
        marginBottom: 8,
        lineHeight: 20,
    },
    price: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
    },
    imageContainer: {
        flex: 1,
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: "100%",
        height: 120,
        borderRadius: 8,
        backgroundColor: "#fff",
    },
    addButton: {
        position: "absolute",
        bottom: 8,
        right: 8,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    addButtonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },
});