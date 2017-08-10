var euros;

euros = {
  '€': {
    name: {
      singular: 'Euro'
      , plural: 'Euros'
    }
    , to_anchor: 1
  }
  ,
  '€c': {
    name: {
      singular: 'Cent'
      , plural: 'Cents'
    }
    , to_anchor: .01
  }
  , 'k€': {
    name: {
      singular: 'Thousand Euros'
      , plural: 'Thousand Euros'
    }
    , to_anchor: 1000
  }
  , 'M€': {
    name: {
      singular: 'Mil. Euros'
      , plural: 'Mil. Euros'
    }
    , to_anchor: 1000000
  }
};

module.exports = {
  metric: euros
  , _anchors: {
    metric: {
      unit: '€'
      , ratio: 1
    }
  }
};
