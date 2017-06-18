'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = require('prop-types');

var PropTypes = _interopRequireWildcard(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

var CloseButton = function (_React$Component) {
  (0, _inherits3['default'])(CloseButton, _React$Component);

  function CloseButton() {
    (0, _classCallCheck3['default'])(this, CloseButton);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  CloseButton.prototype.render = function render() {
    var _props = this.props,
        label = _props.label,
        onClick = _props.onClick;

    return _react2['default'].createElement(
      'button',
      {
        type: 'button',
        className: 'close',
        onClick: onClick
      },
      _react2['default'].createElement(
        'span',
        { 'aria-hidden': 'true' },
        '\xD7'
      ),
      _react2['default'].createElement(
        'span',
        { className: 'sr-only' },
        label
      )
    );
  };

  return CloseButton;
}(_react2['default'].Component);

CloseButton.propTypes = propTypes;

exports['default'] = CloseButton;
module.exports = exports['default'];