import * as React from 'react';
import {Button} from 'react-native-ui-kitten';
import {FacebookLoginButtonProps} from '_modules/hey/_types/FacebookLoginButtonProps';

export default function FacebookLoginButton(props: FacebookLoginButtonProps) {
    return (
            <Button onPress={props.onPress}>Login with Facebook</Button>
    );
}
