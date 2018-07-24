
export const fetchTodos = () => new Promise(resolve => {
  setTimeout(() => {
    resolve([
      { id: 1, title: "one" },
      { id: 2, title: "two" },
      { id: 3, title: "three" },
    ])
  }, 5000);
});
