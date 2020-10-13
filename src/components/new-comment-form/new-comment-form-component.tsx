import React from 'react';

import './styles/new-comment-form-styles.scss'
import { commitMutation } from 'react-relay';
import { useRelayEnvironment } from 'react-relay/hooks';

import { commentCreateMutation as CommentCreateMutationType } from '../../requests/__generated__/commentCreateMutation.graphql';
import { commentCreateMutation } from '../../requests/comment';

interface INewCommentFormComponentProps {
	postId: string;
}

export const NewCommentFormComponent = (props: INewCommentFormComponentProps) => {
	const [comment, setComment] = React.useState<string>('');
	const [error, setError] = React.useState<boolean>(false);

	const environment = useRelayEnvironment();

	const submitButtonDisabled = !comment;

	const handleChangeComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setComment(event.target.value);
		setError(false);
	};

	const handleOnclickSubmitButton = () => {
		commitMutation<CommentCreateMutationType>(
			environment,
			{
				mutation: commentCreateMutation,
				variables: {
					data: {
						content: comment,
						postId: props.postId
					}
				},
				onCompleted: () => setComment(''),
				onError: (error) => {
					setError(true);
					console.error(error);
				},
				updater: (store) => {
					const newCommentNode = store.getRootField('createComment');
					const prevComments = store.getRoot().getLinkedRecords('commentsByPostId', { postId: props.postId });
					if (prevComments) {
						prevComments.push(newCommentNode);
						store.getRoot().setLinkedRecords(prevComments, 'commentsByPostId', { postId: props.postId });
					};
				}
			}
		);
	};

	return (
		<div className="comment-form">
			<textarea className="comment-form__comment-area" placeholder="Поле для комментария" value={comment} onChange={handleChangeComment} />
			<button className="comment-form__submit-button" disabled={submitButtonDisabled} onClick={handleOnclickSubmitButton}>Отправить комментарий</button>
			{error ? <div>Произошла ошибка отправки комментария</div> : null}
		</div>
	);
}