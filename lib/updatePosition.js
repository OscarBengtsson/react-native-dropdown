const ReactNative = require('react-native');

const {
  NativeModules: {
    UIManager
  }
} = ReactNative;

module.exports = function (ancestorTag, ref, debug) {
  const handle = ReactNative.findNodeHandle(ref);
  const ancestor = ReactNative.findNodeHandle(ancestorTag);
  setTimeout(() => {
    UIManager.measureLayout(handle, ancestor, () => {}, (x, y, w, h) => {
      if (debug) {
        console.log(x, y, width, height, pageX, pageY);
      }
      ref._currentPosition(x, y);
    });
  }, 0);
};
