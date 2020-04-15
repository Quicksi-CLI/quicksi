import * as React from 'react';
import { IRootState } from '../store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../store/demo/actions';
import { DemoActions } from '../store/demo/types';
import { Input, Button, Col, Row } from 'antd';

const mapStateToProps = ({ demo }: IRootState) => {
    const { list } = demo;
    return { list };
}

const mapDispatcherToProps = (dispatch: Dispatch<DemoActions>) => {
    return {
        addItem: (item: string) => dispatch(actions.addItemToList(item))
    }
}

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

interface IState {
    text: string
}

class Home extends React.Component<ReduxType, IState> {
    public state: IState = {
        text: ''
    }

    private renderItem = (item: string) => {
        return (<div key={item}>{item}</div>)
    }

    private onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({text: event.target.value});
    }

    private onAdd = () => {
        this.props.addItem(this.state.text);
        this.setState({text: ''});
    }

    public render() {
        const {list} = this.props;
        const {text} = this.state;

        return (
            <div>
                <Row>
                    <Col>
                        <h2>Home</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{span: 8}}>
                        <Input value={text} onPressEnter={this.onAdd} onChange={this.onTextChange} autoFocus={true}/>    
                    </Col>
                    <Col xs={{span: 8}}>
                        <Button onClick={this.onAdd}>Add</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {list.map(this.renderItem)}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(Home);