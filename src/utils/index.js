export const reformatedDates = (key) => {
    const date = new Date(key);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}