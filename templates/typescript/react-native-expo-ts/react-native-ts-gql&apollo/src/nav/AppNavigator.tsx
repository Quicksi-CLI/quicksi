import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {Transition} from 'expo/build/Animated';
import * as React from 'react';
import AppSplash from '_modules/splash/AppSplash';
import {AppStack} from '_nav/app/AppStack';
import {AuthStack} from '_nav/auth/AuthStack';

export default createAppContainer(createAnimatedSwitchNavigator(
    {
        Splash: AppSplash,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'Splash',
        transition: (
            <Transition.Together>
                <Transition.Out
                    type='slide-bottom'
                    durationMs={400}
                    interpolation='easeIn'
                />
                <Transition.In type='fade' durationMs={500} />
            </Transition.Together>
        ),
    }
));
