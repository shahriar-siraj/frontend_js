const people = [
  {
    name: 'Fred',
    age: 27,
    interests: [
      'bowling',
      'golf',
    ],
  },
  {
    name: 'Wilma',
    age: 25,
    interests: [
      'running',
      'cinema',
    ],
  },
  {
    name: 'Barney',
    age: 28,
    interests: [
      'bowling',
      'running',
      'swimming',
    ],
  }
];

describe('getNamesOfPeopleOver', () => {
  const getNamesOfPeopleOver = limit => {
    // TODO: Complete this function to allow the test to pass

    // It filters people array based on the age
    const result = people.filter(person => person.age > limit);

    // By using map, it returns a new array with only people names
    return result.map(person => {
      return person.name;
    });
  };

  it('returns an array of the names of all people over the given age', () => {
    assert.deepEqual(getNamesOfPeopleOver(26), ['Fred', 'Barney']);
  });
});

describe('getSumOfAllAges', () => {
  const getSumOfAllAges = () => {
    // TODO: Complete this function to allow the test to pass

    // Function that returns the sum of 
    // the given key of the array of objects
    Array.prototype.sum = function (prop) {
      var total = 0;
      for (var i = 0; i < this.length; i++) {
        total += this[i][prop];
      }
      return total;
    }

    // It gets the sum of all ages
    return people.sum('age');
  };

  it('calculates the sum of all ages', () => {
    assert.equal(getSumOfAllAges(), 80);
  });
});

describe('getInterests', () => {
  const getInterests = () => {
    // TODO: Complete this function to allow the test to pass

    // Initializing an empty array
    var result = new Array();

    // Iterating over the people array
    for (var i = 0; i < people.length; i++) {
      
      // Iterating over the interests array of an individual people
      for (var j = 0; j < people[i].interests.length; j++) {
        
        // Push the interest to the result array
        // if the item does not exist already
        if (!result.includes(people[i].interests[j])) {
          result.push(people[i].interests[j]);
        }
      }
    }

    // Returns the result array by sorting the elements
    return result.sort();
  };

  it('returns a array of all interests, no duplicates, sorted', () => {
    assert.deepEqual(getInterests(), ['bowling', 'cinema', 'golf', 'running', 'swimming']);
  });
});

describe('getNamesAndInterests', () => {
  const getNamesAndInterests = () => {
    // TODO: Complete this function to allow the test to pass

    // Initializing an empty object
    var result = {};

    // Using map, it assigns people name as the key
    // and interests as the value of result object
    people.map(person => {
      result[person.name] = person.interests;
    });

    return result;
  };

  it('returns an object with the names as keys, and the interests as values', () => {
    const expected = {
      Fred: [
        'bowling',
        'golf',
      ],
      Wilma: [
        'running',
        'cinema',
      ],
      Barney: [
        'bowling',
        'running',
        'swimming',
      ],
    };

    assert.deepEqual(getNamesAndInterests(), expected);
  });
});
