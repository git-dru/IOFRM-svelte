import { insertUser, getUserByEmail } from '../graphql/generated';

export interface Payload {
	email: string;
	password: string;
	name?: string;
}

export interface Fake {
    email: string;
    password: string;
    body: string;
}

export async function _submitToHasura(payload: Payload): Promise<any> { 
    if(payload.name) {
        const apiUrl = 'https://jsonplaceholder.typicode.com/comments';
        const fakeData: Array<Fake> = await fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                return data;
            })
            .catch(error => {
                return error;
            });
        
        if(fakeData.find(({ email }) => email === payload.email)) {
            alert('The user with same email already exists in other platform!');
            return;
        }

        insertUser({
            variables: {
                objects: [
                    payload
                ]
            }
        })
        .then(response => {
            alert('New user has successfully registered!')
        })
        .catch(error => {
            if(error) alert('The user with the same email already exists!');
        });
    }
}

export const prerender = true;
