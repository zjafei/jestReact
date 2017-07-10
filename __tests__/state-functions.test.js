import { toggleDone, deleteTodo } from '../app/state-functions';
/**
 * describe 描述
 * expect 期待
 * toEqual 等于
 */
describe('Addition', () => {
    it('knows that 2 and 2 make 4', () => {
        expect(2 + 2).toBe(4);
    });
});

/**
 export function toggleDone(state, id) {
    const todos = state.todos.map((todo) => {
        if (todo.id === id) {
            todo.done = !todo.done;
        }

        return todo;
    });

    return { todos: todos };
}
 分析源码的意思
 map state.todos 如果 当前 todo 的 id 与设定相等那么 该 todo 的 done 取反
 */
test('toggleDone completes an incomplete todo', () => {
    const finState = toggleDone(//执行被测试函数
        { todos: [{ id: 1, done: false, name: 'Buy Milk' }] }, 1//给予测试用例
    );

    expect(finState.todos).toEqual([//测试用例结果值与与预期值进行比较
        { id: 1, done: true, name: 'Buy Milk' }//预期值
    ]);
});

test('toggleDone test 2', () => {
    const finState = toggleDone(//执行被测试函数
        { todos: [{ id: 1, done: true, name: 'Buy Milk' }] }, 0//给予测试用例
    );

    expect(finState).toEqual({
        todos: [//测试用例结果值与与预期值进行比较
            { id: 1, done: true, name: 'Buy Milk' }//预期值
        ]
    });
});

test('deleteTodo test', () => {
    const finState = deleteTodo(//执行被测试函数
        { todos: [{ id: 1, done: true, name: 'Buy Milk' }] }, 1//给予测试用例
    );
    expect(finState).toEqual({ todos: [] });
});