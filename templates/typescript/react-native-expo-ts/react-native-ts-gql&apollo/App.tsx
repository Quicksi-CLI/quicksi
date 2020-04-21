import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import {client} from './src/graph/Client';
import {ApplicationProvider, Layout} from 'react-native-ui-kitten';
import {mapping, light as lightTheme} from '@eva-design/eva';
import { useScreens } from 'react-native-screens';
import AppNavigator from './src/nav/AppNavigator';
useScreens();

export default function App() {
  return (
      <ApolloProvider client={client}>
          <ApplicationProvider
              mapping={mapping}
              theme={lightTheme}>
                      <Layout style={{
                          flex: 1
                      }}>
                      <AppNavigator />
                      </Layout>
              </ApplicationProvider>
      </ApolloProvider>
  );
}
