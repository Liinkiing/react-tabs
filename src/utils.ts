export const makeId = () => Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
