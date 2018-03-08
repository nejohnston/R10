import React, { Component } from "react";
import PropTypes from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  LayoutAnimation
} from "react-native";
import {
  addIcon,
  subtractIcon
} from "../../config/iconHelpers";
import Icon from "react-native-vector-icons/Ionicons";

import { styles } from "./styles";

class Panel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Step 3
      expanded: false
    };
    this._onPress = this._onPress.bind(this);
  }

  _onPress = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState({
      expanded: !this.state.expanded
    });
  };

  render() {
    const { description, title } = this.props;
    //Step 5
    return (
      <TouchableOpacity onPress={this._onPress}>
        <Animated.Text
          style={styles.descriptionTitle}
        >
          <Icon
            name={
              this.state.expanded
                ? addIcon
                : subtractIcon
            }
            size={20}
            style={styles.icon}
          />
          {title}
        </Animated.Text>

        {this.state.expanded && (
          <Text style={styles.bodyText}>
            {description}
          </Text>
        )}
      </TouchableOpacity>
    );
  }
}

Panel.propTypes = {
  // title: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired
};

export default Panel;
