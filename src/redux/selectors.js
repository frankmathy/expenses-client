export const getExpenseList = store =>
  store && store.expenses ? store.expenses.allIds : [];

export const getExpenseById = (store, id) =>
  store && store.expenses && store.expenses.byIds
    ? { ...store.expenses.byIds[id], id }
    : {};

export const getExpenses = store =>
  getExpenseList(store).map(id => getExpenseById(store, id));
