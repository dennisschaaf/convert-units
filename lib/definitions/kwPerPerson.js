var kwhPerPerson;

kwhPerPerson = {
  'kWh/Person': {
    name: {
      singular: 'kWh/Person'
      , plural: 'kWh/Person'
    }
    , to_anchor: 1
  }
};

module.exports = {
  metric: kwhPerPerson
  , _anchors: {
    metric: {
      unit: 'kWh/Person'
      , ratio: 1
    }
  }
};
