import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import AcademicWidget from './Applet';

class Dashboard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.widget}>
                    <Text>Welcome to Unifyed</Text>
                    <Text></Text>
                </View>
                <AcademicWidget />
                <View style={styles.widget}>                    
                    <Button 
                        title="Refresh Me"
                        accessibilityLabel="Refresh metadata for academic progress"
                    />
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'flex-start',
        backgroundColor: '#e3e3e3'
    },
    widget: {
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
        marginTop: 20
    }
});

export default Dashboard;