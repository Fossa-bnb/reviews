import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Lets you use Enzyme functions in all test files w/o import statements
global.shallow = shallow;
global.render = render;
global.mount = mount;
