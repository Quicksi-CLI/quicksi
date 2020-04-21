import * as React from 'react';
import {Button} from 'react-native-ui-kitten';
import {PhoneLoginButtonProps} from '_modules/hey/_types/PhoneLoginButtonProps';

export default function PhoneLoginButton(props: PhoneLoginButtonProps) {
    return (
        <Button onPress={props.onPress}>Login with Phone</Button>
    );
}
