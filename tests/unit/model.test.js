const { TodoService } = require('../../js/model');

describe('TodoService Unit Tests', () => {
    let service;

    beforeEach(() => {
        // Create a new service instance for each test to ensure isolation
        service = new TodoService();
        // Reset danh sách todo
        service.todos = [];
    });

    test('should add a new todo', () => {
        // Thêm một todo mới
        service.addTodo('Learn Jest');

        // Kiểm tra
        expect(service.todos.length).toBe(1);
        expect(service.todos[0].text).toBe('Learn Jest');
    });

    test('should toggle the completed state of a todo', () => {
        // Thêm todo
        service.addTodo('Learn Jest');

        // Lấy id
        const id = service.todos[0].id;

        // Toggle lần 1
        service.toggleTodoComplete(id);
        expect(service.todos[0].completed).toBe(true);

        // Toggle lần 2
        service.toggleTodoComplete(id);
        expect(service.todos[0].completed).toBe(false);
    });

    test('should remove a todo', () => {
        // Thêm todo
        service.addTodo('Learn Jest');

        // Lấy id
        const id = service.todos[0].id;

        // Xóa todo
        service.removeTodo(id);

        // Kiểm tra
        expect(service.todos.length).toBe(0);
    });

    test('should not add a todo if text is empty', () => {
        // Thêm todo rỗng
        service.addTodo('');

        // Kiểm tra
        expect(service.todos.length).toBe(0);
    });
});