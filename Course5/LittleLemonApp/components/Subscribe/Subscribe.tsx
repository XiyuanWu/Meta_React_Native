import * as React from 'react';
import { Image, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { isEmail } from 'validator';

export default function Subscribe() {
    const [email, setEmail] = React.useState('');

    const handleSubmit = () => {
        // verify if email is valid
        if (isEmail(email)) {
            console.log('Subscribed with email:', email);
            alert('Thank you for subscribing!');
            setEmail('');
        } else {
            alert('Please enter a valid email address.');
        }
    }

    return (
        <>
            <Image source={require('../../assets/images/little-lemon-logo.png')} style={styles.logo} resizeMode='contain' />
            <View style={styles.container}>
                <Text style={styles.title}>Subscribe to our newsletters for our lastest news!</Text>
                <TextInput placeholder="Enter your email" value={email} onChangeText={setEmail} style={styles.textInputBox} placeholderTextColor="gray" keyboardType="email-address" />
                <View style={styles.button}>
                    <Button title="Subscribe" onPress={handleSubmit} />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 60,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        paddingTop: 30,
        paddingHorizontal: 40,
        fontWeight: 'semibold',
        justifyContent: 'center',
    },
    textInputBox: {
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginHorizontal: 40,
        marginTop: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
        color: 'black',
    },
    button: {
        marginTop: 25,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
});