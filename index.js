var getColorName = (function () {
  'use strict';

  var variables = {
  	"#ffffff": "$color-text1-6",
  	"#000000": "$color-transparent",
  	"#0080ff": "$color-brand1-1",
  	"#0044ff": "$color-text1-7",
  	"#0000ff": "$color-link-5",
  	"#ffece4": "$color-error-1",
  	"#ffc8b2": "$color-error-2",
  	"#ff3000": "$color-error-3",
  	"#e72b00": "$color-error-4",
  	"#fafafa": "$color-fill1-1",
  	"#f8f8f8": "$color-fill1-2",
  	"#f3f3f3": "$color-fill1-6",
  	"#f4f6fa": "$color-fill1-4",
  	"#e3fff8": "$color-help-1",
  	"#c0ece2": "$color-help-2",
  	"#01c1b2": "$color-help-3",
  	"#01a79a": "$color-help-4",
  	"#eeeeee": "$color-line1-1",
  	"#f5f5f5": "$color-line1-2",
  	"#dddddd": "$color-line1-3",
  	"#cccccc": "$color-text1-1",
  	"#666666": "$color-text1-4",
  	"#dfe9fd": "$color-notice-1",
  	"#2879eb": "$color-notice-3",
  	"#206dd9": "$color-notice-4",
  	"#daeeff": "$color-other-1",
  	"#0089fd": "$color-other-2",
  	"#306ac9": "$color-other-3",
  	"#e4fdda": "$color-success-1",
  	"#cdf2be": "$color-success-2",
  	"#46bc15": "$color-success-3",
  	"#41a716": "$color-success-4",
  	"#999999": "$color-text1-2",
  	"#333333": "$color-text1-3",
  	"#fff3e0": "$color-warning-1",
  	"#ffe6bd": "$color-warning-2",
  	"#ff9300": "$color-warning-3",
  	"#eb7e10": "$color-warning-4",
  	"#00d8ff": "$color-brand2-1",
  	"#ff2924": "$color-text1-5",
  	"#212121": "$color-fill1-5",
  	"#daedff": "$color-brand1-2",
  	"#c8c8c8": "$color-text1-8",
  	"#1390dc": "$color-text1-9",
  	"#ebebeb": "$color-line1-5",
  	"#feece4": "$color-fill1-7"
  };

  function getColorName (value) {
    value = (value.split(' ')[0] || '').toLowerCase();
    if (value.length === 4) {
        value = value + value.slice(1);
    }
    return variables[value] || value
  }

  return getColorName;

}());
