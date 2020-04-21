import * as React from 'react';
import { Image, View } from 'react-native';
import { SplashScreen } from 'expo';
import { Asset } from 'expo-asset';
import {CacheManager} from '_graph/ApolloCache';
import {RouteKeys} from '_nav/RouteKeys';
import {AppSplashState} from '_modules/splash/_types/AppSplashState';
import {AppSplashProps} from '_modules/splash/_types/AppSplashProps';

export default class AppSplash extends React.Component<AppSplashProps, AppSplashState> {

    constructor(props: any){
        super(props);
        this.state = {
            isReady: false,
        };
    }

    public componentDidMount() {
        SplashScreen.preventAutoHide();
    }

    public render() {
        if (!this.state.isReady) {
            return (
                <View style={{ flex: 1 }}>
                    <Image
                        source={require('../../../assets/splash.png')}
                        onLoad={this._cacheResourcesAsync}
                    />
                </View>
            );
        }

        return (
            <View style={{ flex: 1 }}>
                <Image source={require('../../../assets/icon.png')} />
            </View>
        );
    }

    // _cacheSplashResourcesAsync = async () => {
    //     const gif = require('./assets/images/splash.gif');
    //     return Asset.fromModule(gif).downloadAsync();
    // };

    _cacheResourcesAsync = async () => {
        await CacheManager.restore();
        SplashScreen.hide();
        const images = [
            require('../../../assets/icon.png'),
        ];

        const cacheImages = images.map(image => {
            return Asset.fromModule(image).downloadAsync();
        });

        await Promise.all(cacheImages);
        this.setState({ isReady: true });
        this.props.navigation.navigate(RouteKeys.Hey);
    };
}
