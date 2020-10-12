import { graphql } from "react-relay";

export const loginQuery = graphql`
    query loginQuery($login: String!, $password: String!) {
        login(login: $login, password: $password) {
            accessToken
        }
    }
`;
