# ember-simple-bar-chart

Simple bar chart using d3.js and ember.js.

## Installation

* `ember install ember-simple-bar-chart`

## Usage
In your handlebars template add the below snippet:

`{{ember-bar-chart height=HEIGHT width=WIDTH data=ARRAY  barColor=HEX}}`

`HEIGHT` - {INTEGER} Height of the chart.
`WIDTH` -  {INEGER} Width of the chart
`ARRAY` - {ARRAY} Array of objects consit of `label` and `value`.
`HEX` - {HEX} Color code for the bars.

##Example
`{{ember-bar-chart height=500 width=500 data=list  barColor=#d3d3d3}}`
