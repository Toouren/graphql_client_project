import { graphql } from "react-relay";

export const usersQuery = graphql`
    query usersQuery {
        users {
            login
        }
    }
`;

export const userQuery = graphql`
    query userQuery {
        user {
			login
			name
        }
    }
`;
