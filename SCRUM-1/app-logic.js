// Extracted app logic for unit testing
export function parseTodos(jsonStr) {
  try { return JSON.parse(jsonStr || '[]'); } catch { return []; }
}

export function addTodo(todos, text) {
  const trimmed = text.trim();
  if (!trimmed) return todos;
  return [...todos, { text: trimmed, done: false }];
}

export function toggleTodo(todos, index) {
  return todos.map((t, i) => i === index ? { ...t, done: !t.done } : t);
}

export function deleteTodo(todos, index) {
  return todos.filter((_, i) => i !== index);
}

export function countRemaining(todos) {
  return todos.filter(t => !t.done).length;
}
