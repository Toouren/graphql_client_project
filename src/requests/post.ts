import { graphql } from "react-relay";

export const postQuery = graphql`
    query postQuery($id: String!) {
        post(id: $id) {
            id
            content
            title
            author {
                login
            }
        }
    }
`;

export const postsQuery = graphql`
    query postsQuery {
        posts {
            id
            content
            title
            author {
                login
            }
        }
    }
`;

export const postsByUserIdQuery = graphql`
    query postsByUserIdQuery($userId: String!) {
        postsByUserId(userId: $userId) {
            id
            title
            content
        }
    }
`;

export const postCreateMutation = graphql`
    mutation postCreateMutation($data: PostInput!) {
        createPost(data: $data) {
            id
            title
			content
			author {
                login
            }
        }
    }
`;
