import { graphql } from "react-relay";

export const commentsQuery = graphql`
    query commentsQuery {
        comments {
            id
            content
        }
    }
`;

export const commentsByPostIdQuery = graphql`
    query commentsByPostIdQuery($postId: String!) {
        commentsByPostId(postId: $postId) {
            id
			content
			author {
				login
			}
        }
    }
`;

export const commentCreateMutation = graphql`
	mutation commentCreateMutation($data: CommentInput!) {
		createComment(data: $data) {
			id
			content
			author {
				login
			}
		}
	}
`;