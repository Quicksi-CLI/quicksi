import React, { Component } from "react";
import { Image, View } from "react-native";
import * as tf from "@tensorflow/tfjs";
import { fetch as tfFetch } from "@tensorflow/tfjs-react-native";
import * as mobilenet from "@tensorflow-models/mobilenet";
import { ActivityIndicator, DataTable } from "react-native-paper";
import {
  base64ImageToTensor,
  imageToTensor,
  resizeImage,
} from "../utils/image-utils";
import { formatPercentage } from "../utils/number-utils";

const LoadingRow = () => (
  <DataTable.Row key="loading">
    <ActivityIndicator animating />
  </DataTable.Row>
);

const EmptyRow = () => (
  <DataTable.Row key="empty">
    <DataTable.Cell>N/A</DataTable.Cell>
    <DataTable.Cell numeric>-</DataTable.Cell>
  </DataTable.Row>
);

export default class MobileNet extends Component {
  state = {
    isLoading: true,
    predictions: [],
  };

  async componentDidMount() {
    // Load and warm-up MobileNet
    this.model = await mobilenet.load();
    await this.model.classify(tf.zeros([1, 224, 224, 3]));
    const predictions = await this.updatePredictions();
    this.setState({ predictions, isLoading: false });
  }

  componentDidUpdate(prevProps) {
    if (this.props.source !== prevProps.source) {
      this.setState({ isLoading: true });
      this.updatePredictions().then(predictions => {
        this.setState({ predictions, isLoading: false });
      });
    }
  }

  updatePredictions = async () => {
    const { source } = this.props;
    if (this.model) {
      let imageTensor = null;
      if (Number.isInteger(source)) {
        const imageAssetPath = Image.resolveAssetSource(source);
        const response = await tfFetch(
          imageAssetPath.uri,
          {},
          { isBinary: true }
        );
        const rawImageData = await response.arrayBuffer();
        imageTensor = imageToTensor(rawImageData);
      } else {
        const { base64 } = await resizeImage(source.uri);
        imageTensor = base64ImageToTensor(base64);
      }
      const predictions = await this.model.classify(imageTensor);
      tf.dispose([imageTensor]);
      return predictions;
    }
  };

  renderTableRows = () => {
    const { predictions, isLoading } = this.state;
    const isEmpty = predictions.length === 0;
    if (isLoading) return <LoadingRow />;
    if (isEmpty) return <EmptyRow />;
    return predictions.map(({ className, probability }) => (
      <DataTable.Row key={className}>
        <DataTable.Cell>{className}</DataTable.Cell>
        <DataTable.Cell numeric>{formatPercentage(probability)}</DataTable.Cell>
      </DataTable.Row>
    ));
  };

  render() {
    return (
      <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Class</DataTable.Title>
            <DataTable.Title numeric>Probability</DataTable.Title>
          </DataTable.Header>
          {this.renderTableRows()}
        </DataTable>
      </View>
    );
  }
}
