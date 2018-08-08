import Controller from '@ember/controller';
import { A } from '@ember/array';


const dataSets = [
  {
    label: "Marks",
    value: "5",
    data: [
      {
        label: "Electronics",
        value: 78
      },
      {
        label: "Electrical",
        value: 34
      },
      {
        label: "Log",
        value: 89
      },
    ]
  },{
    label: "Profit for 12 months",
    value: "12",
    data: [
      {
        label: "Jan",
        value: 78
      },
      {
        label: "Feb",
        value: 34
      },
      {
        label: "Mar",
        value: 89
      },
      {
        label: "April",
        value: 89
      },
      {
        label: "May",
        value: 89
      },{
        label: "June",
        value: 20
      },{
        label: "July",
        value: 30
      },{
        label: "Aug",
        value: 10
      },{
        label: "Sep",
        value: 2
      },{
        label: "Oct",
        value: 88
      },{
        label: "Nov",
        value: 50
      },{
        label: "Dec",
        value: 40
      }
    ]
  },
  {
    label: "Profit for this quarter",
    value: "3",
    data: [
      {
        label: "June",
        value: 80
      },
      {
        label: "July",
        value: 90
      },
      {
        label: "August",
        value: 20
      },
    ]
  },
];

export default Controller.extend({
  model: {},
  sampleDataSets: A(dataSets),

  init() {
    this._super(...arguments);

    this.set('model', {
      data: [
              {
                  label: 2011,
                  value: 520,
              },{
                  label: 2012,
                  value: 220,
              },{
                  label: 2013,
                  value: 320,
              }
            ],
      height: 600,
      width: 600,
      padding: 100,
      color: "#d3d3d3"
    })
  },

  actions: {
    setSelectedData(selectedValue) {
      let dataObj = this.get("sampleDataSets").findBy('value', selectedValue);
      this.set("model.data", dataObj.data);
    }
  }
});
