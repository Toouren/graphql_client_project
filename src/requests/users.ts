import { graphql } from "react-relay";

export const usersQuery = graphql`
  query usersQuery {
    users {
        login
    }
  }
`