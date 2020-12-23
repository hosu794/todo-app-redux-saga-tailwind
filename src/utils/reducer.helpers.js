export function reverseComplete(item) {
    return {
        ...item, 
        completed: !item.completed
    }
}