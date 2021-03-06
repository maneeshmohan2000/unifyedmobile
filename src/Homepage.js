import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import codePush from "react-native-code-push";

import AcademicWidget from './Applet';

class Dashboard extends Component {

    onButtonPress = () => {
        codePush.sync({
          updateDialog: true,
          installMode: codePush.InstallMode.IMMEDIATE
        });
      }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.widget}>
                    <Text>Welcome to Unifyed</Text>
                    <Text>Demo app</Text>
                </View>
                <AcademicWidget />
                <View style={styles.widget}>                    
                    <Text>Version 1.0</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={this.onButtonPress}>
                        <Text>Check for updates</Text>
                    </TouchableOpacity>
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