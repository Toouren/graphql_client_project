import { graphql } from "react-relay";

export const postsQuery = graphql`
  query postsQuery {
    posts {
        id
        content
    }
  }
`