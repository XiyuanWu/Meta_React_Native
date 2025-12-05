import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                Little Lemon
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F4CE14',
    },
    title: {
        padding: 10,
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginTop: 25,
    },
});