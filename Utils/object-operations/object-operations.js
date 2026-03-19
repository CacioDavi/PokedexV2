export const sumValues = (obj) => {
    return Object.values(obj).reduce((prev, curr) => prev + curr, 0);
}
