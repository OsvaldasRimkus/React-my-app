import * as React from 'react';
import Counter from '../../Counter';
import {shallow} from 'enzyme';
// import {mount} from 'enzyme';
// import {render} from 'enzyme';
import * as renderer from 'react-test-renderer';


// this is this not take from setup.tsx ?
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

describe('Counter component', () => {
    test('starts with a count of 0', () => {
        const wrapper = shallow (<Counter/>)
        const text = wrapper.find('span').text()
        expect(text).toEqual('Current count: 0')
        // const countState = wrapper.state().count
        // expect(countState).toEqual(0)
    })

    test('can increment the count when the button is clicked', () => {
        const wrapper = shallow(<Counter />)
        const incrementButton = wrapper.find('button.increment')
        incrementButton.simulate('click');
        const text = wrapper.find('span').text()
        expect(text).toEqual('Current count: 1')
    })

    test('can decrement the count when the button is clicked', () => {
        const wrapper = shallow(<Counter />)
        const decrementButton = wrapper.find('button.decrement')
        decrementButton.simulate('click');
        const text = wrapper.find('span').text()
        expect(text).toEqual('Current count: -1')
        console.log("Great success!!!");
    })

    // bad
    // test('should shallow correctly', () => {
    //     expect(shallow(<Counter />)).toMatchSnapshot()
    // })

    // test('should mount correctly', () => {
    //     expect(mount(<Counter />)).toMatchSnapshot()
    // })

    // test('should render correctly', () => {
    //     expect(render(<Counter />)).toMatchSnapshot()
    // })

    // good 
    test('matches the best snapshot', () => {
        const tree = renderer.create(<Counter />).toJSON()
        expect(tree).toMatchSnapshot();
        // expect(tree).toMatchInlineSnapshot();
    })

})

// testing with ENZYME
// ENZYME tests React component functionality
// https://javascriptplayground.com/introduction-to-react-tests-enzyme/

// run with: npm run test