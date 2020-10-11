import { Environment, Network, RecordSource, RequestParameters, Store, Variables } from "relay-runtime";
import { JWT_AUTH_TOKEN_KEY } from "../constants/constants";

export function fetchQuery(operation: RequestParameters, variables: Variables): any {
    const jwtToken = localStorage.getItem(JWT_AUTH_TOKEN_KEY);
    const headers: Headers = new Headers({
        "Content-Type": "application/json"
    });
    if (jwtToken) {
        headers.set("Authorization", jwtToken);
    };

    return fetch("http://localhost:8080/api", {
        method: "POST",
        headers,
        body: JSON.stringify({
            query: operation.text,
            variables
        })
    }).then(response => {
        return response.json();
    });
}

export const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource())
});