import {createStackNavigator, StackNavigatorConfig} from 'react-navigation';
import Hey from '_modules/hey/Hey';
import {AuthRouteKeys} from '_nav/auth/AuthRouteKeys';


export const AuthStack: StackNavigatorConfig = createStackNavigator({
    [AuthRouteKeys.Hey]: Hey,
}, {
    initialRouteName: AuthRouteKeys.Hey
});
