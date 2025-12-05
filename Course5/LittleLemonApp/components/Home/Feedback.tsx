import * as React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Feedback() {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSubmit = () => {
        console.log(firstName, lastName, message);
    };

    return (
        <View>
            <Text style={{ fontSize: 30, textAlign: "center", color: "white", marginTop: 20, fontWeight: "semibold" }}>Feedback</Text>
            <Text style={{ fontSize: 20, textAlign: "center", color: "white", marginHorizontal: 40, marginTop: 20 }}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.
                We would love to hear your experience with us!
            </Text>

            <TextInput placeholder="First Name" value={firstName} onChangeText={setFirstName} style={styles.textInputBox} placeholderTextColor="white" />
            <TextInput placeholder="Last Name" value={lastName} onChangeText={setLastName} style={styles.textInputBox} placeholderTextColor="white" />
            <TextInput placeholder="Message" value={message} onChangeText={setMessage} style={styles.textInputBox} placeholderTextColor="white" multiline={true} />

            <View style={styles.button}>
                <Button title="Submit" onPress={handleSubmit} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textInputBox: {
        height: 40,
        borderWidth: 1,
        borderColor: 'white',
        marginHorizontal: 40,
        marginTop: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
        color: 'white',
    },
    button: {
        marginTop: 25,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
});