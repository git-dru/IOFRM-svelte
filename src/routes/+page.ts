import { insertUser, getUserByEmail } from '../graphql/generated';

export interface Payload {
	email: string;
	password: string;
	fullName?: string;
}

export async function _submitToHasura(payload: Payload): Promise<any> { 
    if(payload.fullName) {
        const userByEmailStore = getUserByEmail({
            variables: {
              email: { _eq: payload.email }
            }
          });
          
          let users: any;
          userByEmailStore.subscribe(result => {
            users = result.data?.users; // Adjust as needed
          });

          if(users.length === 0) {
            insertUser({
                variables: {
                  objects: [
                    {
                      name: "John Doe",
                      email: "john.doe@example.com",
                      password: "hashed_password_here"
                    }
                  ]
                }
              })
              .then(response => {
                  alert('New user has successfully registered!')
                })
                .catch(error => {
                  console.log("Error:", error);
              });
          } else {
            alert('The user with same email already exists!');
          }
    }
}

export const prerender = true;
