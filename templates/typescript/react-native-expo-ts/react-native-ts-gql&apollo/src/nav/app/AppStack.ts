import {createStackNavigator, StackNavigatorConfig} from 'react-navigation';
import TodoListContainer from '_modules/todo/TodoListContainer';
import {AppRouteKeys} from '_nav/app/AppRouteKeys';

export const AppStack: StackNavigatorConfig = createStackNavigator({
    [AppRouteKeys.Todo]: TodoListContainer
}, {
    initialRouteName: AppRouteKeys.Todo
});
