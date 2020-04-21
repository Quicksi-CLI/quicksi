import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import FacebookLoginButton from '_modules/hey/_components/FacebookLoginButton';
import PhoneLoginButton from '_modules/hey/_components/PhoneLoginButton';
import {HeyContainerProps} from '_modules/hey/_types/HeyContainerProps';
import {RouteKeys} from '_nav/RouteKeys';

export default function Hey(props: HeyContainerProps) {
    return (
        <View style={styles.container}>
            <FacebookLoginButton onPress={()=> props.navigation.navigate(RouteKeys.Todo)} />
            <PhoneLoginButton onPress={() => props.navigation.navigate(RouteKeys.Todo)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
