import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class AcademicWidget extends Component {
    state = {
        data: 'Version 1.0',
    }

    render() {
        return (
            <View style={styles.widget}>
                <Text>Dashboard:</Text>
                <Text>Academic Progress</Text>
                <Text>Degree Program</Text>
                <Text>GPA: 3.89</Text>
                <Text>Credits Earned: 75/100</Text>
                <Text>{this.state.data}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    widget: {
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
        marginTop: 20
    }
});

export default AcademicWidget;