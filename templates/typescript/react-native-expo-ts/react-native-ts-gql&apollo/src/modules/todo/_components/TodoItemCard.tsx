import {TodoItem} from '_modules/todo/_types/TodoItem';
import * as React from 'react';
import {CheckBox, ListItem} from 'react-native-ui-kitten';

export default class TodoItemCard extends React.Component<TodoItem, TodoItemCardState> {
    constructor(props: TodoItem){
        super(props);
        this.state = {
            checked: this.props.completed
        }
    }

    private updateChecked = (checked: boolean): void => {
        this.setState({
            checked
        })
    };

    private accessory = (): React.ReactElement<TodoItemCardState> => {
        return (
            <CheckBox checked={this.state.checked} onChange={this.updateChecked}/>
        );
    };

    render() {
        return (
            <ListItem
                title={this.props.title}
                description={this.props.id}
                accessory={this.accessory}
            />
        )
    }
}
