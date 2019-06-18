import React from 'react';
import Simple from '../../../components/simple/simple';
import rendeder from 'react-test-renderer'; // Vinicio - snapshot testing


describe("<Simple/>", () => {
  test('basic rendering', () => {
    const mountedSimple = shallow(<Simple/>);
    expect(mountedSimple.find('span')).toBeTruthy();
  });

  test('testing state changes', () => {
    const mountedSimple = mount(<Simple/>);
    const button = mountedSimple.find('button');

    button.simulate('click');
    expect(mountedSimple.state('value')).toBe(true);

    button.simulate('click');
    expect(mountedSimple.state('value')).toBe(false);

    expect(mountedSimple.find('span').text()).toContain('false');
  });

  test('rendering follows the snapshot', () => {
    const snapshot = rendeder.create(<Simple/>).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
