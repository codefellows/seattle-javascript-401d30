// Vinicio - Enzyme is the default export
// Vinicio - everything in the object is a non-default import
import Enzyme, {shallow, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter()});

global.shallow = shallow;
global.render = render;
global.mount = mount;

global.rootDirectory = __dirname;
