import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Welcome() {
    return (
        <>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
            <View style={styles.container}>
                <Text style={styles.title}>
                    Welcome to Little Lemon</Text>

                <Text style={styles.description}>
                    Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
                </Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        paddingHorizontal: 40,
        paddingBottom: 20,
        textAlign: "center",
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
    },
    description: {
        textAlign: "center",
        fontSize: 20,
        color: 'white',
        marginHorizontal: 40,
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 40,
    },
});