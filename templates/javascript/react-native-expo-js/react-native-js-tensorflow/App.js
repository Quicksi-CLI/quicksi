import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { AppLoading } from "expo";
import { Appbar } from "react-native-paper";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import MainScreen from "./src/components/MainScreen";

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { textAlign: "center" },
  cardActions: { justifyContent: "space-around" },
});

export default class App extends Component {
  state = {
    isTfReady: false,
  };

  prepApp = async () => await tf.ready();

  setAppReady = () => this.setState({ isTfReady: true });

  render() {
    if (!this.state.isTfReady) {
      return (
        <AppLoading
          startAsync={this.prepApp}
          onFinish={this.setAppReady}
          onError={console.warn}
        />
      );
    }
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="Quicksi" titleStyle={styles.title} />
        </Appbar.Header>
        <KeyboardAwareScrollView>
          <MainScreen />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
