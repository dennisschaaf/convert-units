var euros;

euros = {
  'EUR': {
    name: {
      singular: 'Euro'
      , plural: 'Euros'
    }
    , to_anchor: 1
  }
  ,
  'EURcent': {
    name: {
      singular: 'Cent'
      , plural: 'Cents'
    }
    , to_anchor: .01
  }
  , 'kEUR': {
    name: {
      singular: 'Thousand Euros'
      , plural: 'Thousand Euros'
    }
    , to_anchor: 1000
  }
  , 'MEUR': {
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
      unit: 'EUR'
      , ratio: 1
    }
  }
};
