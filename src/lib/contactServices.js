const baseURL = process.env.REACT_APP_BASE_URL;

export const retrieveContacts = () => {
    fetch(baseURL)
        .then(function(res) {
            console.log(res);
            return res.json();
        })
        .then(function(resTwo) {
            console.log(resTwo);
        })
    return fetch(baseURL)
        .then(res => res.json());
}
export const createContact = (number, contact) => {
    return fetch(baseURL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( { number: number, contact: contact }),
    })
    .then(res => res.json());
}