const { TodoService } = require('../../js/model');
const { Controller } = require('../../js/controller');

const mockView = {
    update: jest.fn(),
    bindAddTodo: jest.fn(),
    bindToggleTodo: jest.fn(),
    bindRemoveTodo: jest.fn(),
};

describe('Controller-Service Integration Tests', () => {
    let service;
    let controller;

    beforeEach(() => {
        service = new TodoService();
        service.todos = []; 
        controller = new Controller(service, mockView);
    });

    test('handleAddTodo should call service.addTodo and update the model', () => {
        controller.handleAddTodo('Learn Jest');

        expect(service.todos.length).toBe(1);
        expect(service.todos[0].text).toBe('Learn Jest');
    });

    test('handleRemoveTodo should call service.removeTodo and update the model', () => {
        service.addTodo('Learn Jest');

        const id = service.todos[0].id;

        controller.handleRemoveTodo(id);

        expect(service.todos.length).toBe(0);
    });
});