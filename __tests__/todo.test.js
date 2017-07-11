import Todo from '../app/todo';
import React from 'react';
import { mount } from 'enzyme';//用于渲染组件
//import renderer from 'react-test-renderer';

test('Todo component renders the text of the todo', () => {
    const todo = { id: 1, done: false, name: 'Buy Milk' };//定义测试数据
    const wrapper = mount(<Todo todo={todo} />);//渲染reactDom
    const p = wrapper.find('.toggle-todo');//获取测试节点
    expect(p.text()).toBe('Buy Milk');//断言节点文本内容
});

test('Todo calls doneChange when todo is clicked', () => {
    const todo = { id: 1, done: false, name: 'Buy Milk' };
    const doneChange = jest.fn();
    const wrapper = mount(
        <Todo todo={todo} doneChange={doneChange} />
    );
    const p = wrapper.find('.toggle-todo');//获取测试节点
    p.simulate('click');
    expect(doneChange).toBeCalledWith(1);
});

// describe('Todo component renders the todo correctly', () => {
//     it('renders correctly', () => {
//         const todo = { id: 1, done: false, name: 'Buy Milk' };
//         const rendered = renderer.create(
//             <Todo todo={todo} />
//         );
//         expect(rendered.toJSON()).toMatchSnapshot();
//     });
// });