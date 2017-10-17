/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Colours');

Blockly.Colours = {
  // SVG colours: these must be specificed in #RRGGBB style
  // To add an opacity, this must be specified as a separate property (for SVG fill-opacity)
  "motion": {
    "primary": "#62d669",
    "secondary": "#45af4b",
    "tertiary": "#329838",
    "bg0": "url(../media/mxc-icon/motion_0.png)",
    "bg1": "url(../media/mxc-icon/motion_1.png)"
  },
  "looks": {
    "primary": "#21c0fa",
    "secondary": "#1b99c7",
    "tertiary": "#0785b3",
    "bg0": "url(../media/mxc-icon/looks_0.png)",
    "bg1": "url(../media/mxc-icon/looks_1.png)"
  },
  "sounds": {
    "primary": "#ab77e2",
    "secondary": "#884dc7",
    "tertiary": "#7b3fbb",
  },
  "control": {
    "primary": "#5ca3fb",
    "secondary": "#4280d7",
    "tertiary": "#2d6bc1"
  },
  "event": {
    "primary": "#00ceb8",
    "secondary": "#059d8d",
    "tertiary": "#038c7d"
  },
  "sensing": {
    "primary": "#db70c7",
    "secondary": "#ad4b9b",
    "tertiary": "#923481"
  },
  "pen": {
    "primary": "#fd7d70",
    "secondary": "#dd5e51",
    "tertiary": "#d35447"
  },
  "operators": {
    "primary": "#fbb13b",
    "secondary": "#d49127",
    "tertiary": "#bd7c13"
  },
  "data": {
    "primary": "#fb713b",
    "secondary": "#df5d2a",
    "tertiary": "#c54614"
  },
  "more": {
    "primary": "#FF6680",
    "secondary": "#FF4D6A",
    "tertiary": "#FF3355"
  },
  "text": "#575E75",
  "workspace": "#F9F9F9",
  "toolboxHover": "#4C97FF",
  "toolboxSelected": "#c7e7f9",
  "toolboxItem": "#e8f6fe",
  "toolboxText": "#686e83",
  "toolbox": "#FFFFFF",
  "flyout": "#F9F9F9",
  "scrollbar": "#CECDCE",
  "scrollbarHover": '#CECDCE',
  "textField": "#FFFFFF",
  "insertionMarker": "#000000",
  "insertionMarkerOpacity": 0.2,
  "dragShadowOpacity": 0.3,
  "stackGlow": "#FFF200",
  "stackGlowOpacity": 1,
  "replacementGlow": "#FFFFFF",
  "replacementGlowOpacity": 1,
  "colourPickerStroke": "#FFFFFF",
  // CSS colours: support RGBA
  "fieldShadow": "rgba(0,0,0,0.1)",
  "dropDownShadow": "rgba(0, 0, 0, .3)",
  "numPadBackground": "#FFFFFF",
  "numPadButtonBackground": "#d2bdfd",
  "numPadBorder": "#9c77e6",
  "numPadActiveBackground": "#9c77e6",
  "numPadText": "#FFFFFF",
  "valueReportBackground": "#FFFFFF",
  "valueReportBorder": "#AAAAAA"
};
