const { test, expect, _electron: electron } = require('@playwright/test');

test('End-to-end user workflow', async () => {
    const electronApp = await electron.launch({ args: ['.'] });
    const window = await electronApp.firstWindow();

    const taskText = 'My new E2E test task';

    await window.locator('#todo-input').fill(taskText);
    await window.locator('#add-button').click();

    const todoItem = window.locator('.todo-item').filter({
        hasText: taskText
    });

    await expect(todoItem).toContainText(taskText);

    const checkbox = todoItem.locator('input[type="checkbox"]');
    await checkbox.click();

    await expect(todoItem).toHaveClass(/completed/);

    const deleteButton = todoItem.locator('.delete-btn');
    await deleteButton.click();

    await expect(todoItem).toHaveCount(0);

    await electronApp.close();
});