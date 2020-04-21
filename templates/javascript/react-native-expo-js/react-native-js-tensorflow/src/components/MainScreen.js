import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Avatar, Button, Card } from "react-native-paper";
import MobileNet from "./MobileNet";

const styles = StyleSheet.create({
  cardActions: { justifyContent: "space-around" },
});

const sampleImage = require("../../assets/images/sample.jpg");

export default class MainScreen extends Component {
  state = {
    imageURI: null,
    data: null,
  };

  async componentDidMount() {
    await this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Camera roll permission is required for selecting images.");
      }
    }
  };

  pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (!result.cancelled) {
      this.setState({ imageURI: result.uri });
    }
  };

  render() {
    const { imageURI } = this.state;
    const source = imageURI ? { uri: imageURI } : sampleImage;
    return (
      <Card>
        <Card.Title
          title="Predictions"
          left={props => <Avatar.Icon {...props} icon="computer" />}
        />
        <Card.Cover source={source} />
        <Card.Content>
          <MobileNet source={source} />
        </Card.Content>
        <Card.Actions style={styles.cardActions}>
          <Button icon="camera" mode="outlined" onPress={this.pickImage}>
            Select
          </Button>
        </Card.Actions>
      </Card>
    );
  }
}
