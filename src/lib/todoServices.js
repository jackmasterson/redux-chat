const baseURL = process.env.REACT_APP_BASE_URL;
export const getTodos = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const createTodo = (name) => {
    return fetch(baseURL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, isComplete: false }),
    })
    .then(res => res.json())
}

export const updateTodo = (todo) => {
    return fetch(`${baseURL}/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo),
    })
    .then(res => res.json())
}

export const destroyTodo = (id) => {
    return fetch(`${baseURL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
}