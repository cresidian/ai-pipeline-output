import { describe, it, expect } from 'vitest';
import { parseTodos, addTodo, toggleTodo, deleteTodo, countRemaining } from './app-logic.js';

describe('Todo App', () => {
  it('parses empty todos from localStorage', () => {
    expect(parseTodos(null)).toEqual([]);
    expect(parseTodos('[]')).toEqual([]);
  });

  it('adds a todo item', () => {
    const result = addTodo([], 'Buy milk');
    expect(result).toHaveLength(1);
    expect(result[0].text).toBe('Buy milk');
    expect(result[0].done).toBe(false);
  });

  it('ignores empty or whitespace-only input', () => {
    expect(addTodo([], '')).toHaveLength(0);
    expect(addTodo([], '   ')).toHaveLength(0);
  });

  it('marks a todo as complete', () => {
    const todos = [{ text: 'Buy milk', done: false }];
    const result = toggleTodo(todos, 0);
    expect(result[0].done).toBe(true);
  });

  it('toggles a completed todo back to incomplete', () => {
    const todos = [{ text: 'Buy milk', done: true }];
    const result = toggleTodo(todos, 0);
    expect(result[0].done).toBe(false);
  });

  it('deletes a todo item', () => {
    const todos = [{ text: 'A', done: false }, { text: 'B', done: false }];
    const result = deleteTodo(todos, 0);
    expect(result).toHaveLength(1);
    expect(result[0].text).toBe('B');
  });

  it('counts remaining incomplete items', () => {
    const todos = [
      { text: 'A', done: false },
      { text: 'B', done: true },
      { text: 'C', done: false }
    ];
    expect(countRemaining(todos)).toBe(2);
  });

  it('count is zero when all todos are done', () => {
    const todos = [{ text: 'A', done: true }];
    expect(countRemaining(todos)).toBe(0);
  });
});
