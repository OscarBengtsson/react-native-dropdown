import React, { Component, } from 'react';
const ReactNative = require('react-native');

const {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text
} = ReactNative;

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollView: {
    width: 198 //TODO: this needs to be dynamic
  },
  container: {
    backgroundColor: '#f1f1f1',
    position: 'absolute',
    borderColor: '#BDBDC1',
    borderWidth: 2 / window.scale,
  }
});

class Items extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items, positionX, positionY, show, onPress, width, height } = this.props;

    if (!show) {
      return null;
    }

    const renderedItems = React.Children.map(items, (item) => {

      return (
        <TouchableOpacity onPress={() => onPress(item.props.children, item.props.type) } key={item.props.type.description}>
          <View>
            {item}
          </View>
        </TouchableOpacity>
      );
    });

    return (
      <View style={[styles.container, { top: positionY, left: positionX }]}>
        <ScrollView
          style={{ width: width - 2, height: height * 3 + 9 }}
          automaticallyAdjustContentInsets={false}
          bounces={false}>
          {renderedItems}
        </ScrollView>
      </View>
    );
  }
}

Items.propTypes = {
  positionX: React.PropTypes.number,
  positionY: React.PropTypes.number,
  show: React.PropTypes.bool,
  onPress: React.PropTypes.func
};

Items.defaultProps = {
  width: 0,
  height: 0,
  positionX: 0,
  positionY: 0,
  show: false,
  onPress: () => {}
};

module.exports = Items;
