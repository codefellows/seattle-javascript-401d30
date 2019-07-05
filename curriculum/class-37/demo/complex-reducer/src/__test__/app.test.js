import React from 'react';
import ConnectedComponent from '../connected-component';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Enzyme from 'enzyme';
import {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({adapter: new Adapter()});

const partiallyFilledStore = {
  categories: [
    {id: 1, name: 'Stephen King'},
    {id: 2, name: 'George R R Martin'},
  ],
  cards: {
    1: [],
    2: [],
  },
};


describe('#ConnectedComponent', () => {
  test('Testing connection to the store', () => {
    const mockStore = configureStore([]);

    const mountedComponent = mount(
      <Provider store={mockStore(partiallyFilledStore)}>
        <ConnectedComponent/>
      </Provider>);

    expect(mountedComponent.contains('Stephen King')).toBeTruthy();
    expect(mountedComponent.contains('George R R Martin')).toBeTruthy();
  });
});