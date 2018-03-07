import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Animated
} from "react-native";
import { addIcon, subtractIcon } from "../../config/iconHelpers";

import { styles } from "./styles";

class Panel extends Component {
  constructor(props) {
    super(props);

    this.icons = {
      //Step 2
      add: { addIcon },
      subtract: { subtractIcon }
    };

    this.state = {
      //Step 3
      title: props.title,
      expanded: true
    };
  }

  toggle() {}

  render() {
    let icon = this.icons.subtract;

    if (this.state.expanded) {
      icon = this.icons.subtract; //Step 4
    }

    //Step 5
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{this.state.title}</Text>
          <TouchableHighlight
            style={styles.button}
            onPress={this.toggle.bind(this)}
            underlayColor="#f1f1f1"
          >
            <Image style={styles.buttonImage} source={icon} />
          </TouchableHighlight>
        </View>

        <View style={styles.body}>{this.props.children}</View>
      </View>
    );
  }
}

export default Panel;
