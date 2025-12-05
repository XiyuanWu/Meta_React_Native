import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>
                All rights reserved by Little Lemon, 2023
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#F4CE14',
    },
    text: {
        padding: 5,
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
    },
});