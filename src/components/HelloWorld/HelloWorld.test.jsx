import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HelloWorld from './HelloWorld';

configure({ adapter: new Adapter() });

describe('<HelloWorld />', () => {
  it('should correctly render the component', () => {
    const wrapper = shallow(<HelloWorld />);
    expect(wrapper.length).toBe(1);
    expect(wrapper.is('h1')).toBeTruthy();
  });
});

describe('<HelloWorld />', () => {
  const props = {
    text: 'World',
  };

  it('renders correctly with text Hello World!', () => {
    const wrapper = shallow(<HelloWorld {...props} />);
    expect(wrapper.text()).toBe('Hello ' + props.text + '!' );
  });
});

describe('Snapshots', () => {
  it('component matches snapshot', () => {
    const tree = renderer.create(<HelloWorld />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
