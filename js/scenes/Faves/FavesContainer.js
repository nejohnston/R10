import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getRealmFaves } from "../../redux/modules/faves";
import { formatAndFilterFaves } from "../../config/helpers";
import Faves from "./Faves";
import HeaderGradient from "../../components/HeaderGradient";
import {
  colors,
  typography
} from "../../config/styles";

class FavesContainer extends Component {
  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      title: "Faves",
      tintColor: colors.white,
      renderBackground: HeaderGradient,
      titleStyle: {
        fontFamily: typography.fontMain
      }
    }
  };

  componentDidMount() {
    this.props.dispatch(
      getRealmFaves(this.props.data)
    );
  }

  render() {
    const { faves, data } = this.props;
    const faveSessions = formatAndFilterFaves(
      faves,
      data
    );

    return (
      <Faves faves={faves} data={faveSessions} />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.faves.isLoading,
  faves: state.faves.faves,
  data: state.schedule.data,
  error: state.faves.error
});

FavesContainer.propTypes = {
  dispatch: PropTypes.func,
  faves: PropTypes.array,
  data: PropTypes.array
};

export default connect(mapStateToProps)(
  FavesContainer
);
