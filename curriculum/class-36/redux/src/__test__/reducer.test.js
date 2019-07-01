import personReducer from '../redux/person-reducer';


describe("#person-reducer", () => {
  test('Initial State', () => {
    expect(personReducer(undefined, {type: 'NULL', payload: null})).toEqual({
      name: 'Jon Snow',
    });
  });

  test('Change Action', () => {
    expect(personReducer({name: 'Jon Snow'},
      {
        type: 'CHANGE',
        payload: 'Kali'
      }))
      .toEqual({name: 'Kali'});
  });

  test('Default Action', () => {
    expect(personReducer({name: 'Jon Snow'},
      {
        type: 'Kali chew on my internet cable',
        payload: 'Kali'
      }))
      .toEqual({name: 'Jon Snow'});
  });

  test('Reset Action', () => {
    expect(personReducer({name: 'Jon Stark'},
      {
        type: 'RESET',
        payload: null
      }))
      .toEqual({name: 'Jon Snow'});
  });

  test('Template Test', () => {
    const initialState = {name: 'Jon Stark'};
    const action = {
      type: 'RESET',
      payload: null
    };
    const expectedState = {name: 'Jon Snow'};

    expect(personReducer(initialState,action)).toEqual(expectedState);
  });

});