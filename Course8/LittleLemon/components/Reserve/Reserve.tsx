import * as React from "react";
import { View, Text, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";

export default function Reserve() {
    const [name, setName] = React.useState("");
    const [date, setDate] = React.useState("");
    const [time, setTime] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [notes, setNote] = React.useState("");

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={40}
        >
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Image source={require("../../assets/images/reserve/reserve.jpg")} style={styles.image} />
                <View>
                    <Text style={styles.title}>
                        RESERVE A TABLE NOW!
                    </Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.field}>
                        <Text style={styles.label}>Full Name</Text>
                        <TextInput placeholder="Full Name" value={name} onChangeText={setName} style={styles.textInputBox} placeholderTextColor="black" />
                    </View>

                    <View style={styles.row}>
                        <View style={styles.rowField}>
                            <Text style={styles.rowLabel}>Date</Text>
                            <TextInput placeholder="Date" value={date} onChangeText={setDate} style={styles.rowInputBox} placeholderTextColor="black" />
                        </View>
                        <View style={[styles.rowField, { marginLeft: 10 }]}>
                            <Text style={styles.rowLabel}>Time</Text>
                            <TextInput placeholder="Time" value={time} onChangeText={setTime} style={styles.rowInputBox} placeholderTextColor="black" />
                        </View>
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Phone</Text>
                        <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} style={styles.textInputBox} placeholderTextColor="black" />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.textInputBox} placeholderTextColor="black" />
                    </View>

                    <View style={styles.field}>
                        <Text style={styles.label}>Notes</Text>
                        <TextInput placeholder="Any comments?" value={notes} onChangeText={setNote} style={[styles.textInputBox, {height: 80}]} placeholderTextColor="black" multiline={true} />
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => { alert("Reserve table sucessfully!"); }}>
                    <Text style={styles.buttonText}>Reserve</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
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
        fontSize: 23,
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: 40,
        marginLeft: 46,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 15,
        paddingHorizontal: 40,
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
    rowLabel: {
        fontSize: 16,
        fontWeight: "bold",
    },
    row: {
        flexDirection: "row",
        marginBottom: 15,
        paddingHorizontal: 40,
    },
    rowField: {
        flex: 1,
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
    rowInputBox: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderColor: "black",
        marginTop: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        color: "black",
        padding: 14,
        alignContent: "center",
    },
    button: {
        marginTop: 25,
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "#f4ce14",
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        width: 200,
        alignSelf: "center",
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
    },
});