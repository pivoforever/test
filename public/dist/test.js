"use strict";

var _require = require("underscore"),
    object = _require.object;

// средство es6: блок "левых"  объявлений


var sentences = [{ subject: "JavaScript", verb: "is", object: "great" }, { subject: "Dogs", verb: "are", object: "crazy" }];
// средство es6: деструктуризация объекта
function say(_ref) {
  var subject = _ref.subject,
      verb = _ref.verb,
      object = _ref.object;

  // средство es6: строки шаблона
  console.log(subject + " " + verb + " " + object);
}
// средство es6: for..of
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = sentences[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var s = _step.value;

    say(s);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}