import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import {List} from 'react-native-ui-kitten';
import TodoItemCard from '_modules/todo/_components/TodoItemCard';
import {TodoItem} from '_modules/todo/_types/TodoItem';
import {ReactElement} from 'react';
import {DUMMY_TODOS} from '_modules/todo/todo.graphql';

const _renderItem = ({item}: {item: TodoItem}): ReactElement => {
    return <TodoItemCard {...item} />
};

export default function TodoListContainer() {

    const { data, error, loading } = useQuery(DUMMY_TODOS);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    if (error) {
        return <Text>Error! {error.message}</Text>;
    }

    if (data.todos.length > 0) {
        return (
            <List data={data.todos} renderItem={_renderItem}/>
        );
    } else {
        return (
            <View style={styles.container}>
                <Text>sweet. looks like you dont have anything todo... or do you?</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
