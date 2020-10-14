import React from 'react';

import { commitMutation } from 'react-relay';
import { useRelayEnvironment } from 'react-relay/hooks';
import { useHistory } from 'react-router-dom';

import { postCreateMutation as PostCreateMutationType } from '../../requests/__generated__/postCreateMutation.graphql';
import { postCreateMutation } from '../../requests/post';

import './styles/new-post-form-styles.scss';

const NewPostCreatedSuccessComponent: React.FunctionComponent = () => {
	return <div className="global-form-wrapper">
		<div className="post-success">
			<div>Пост успешно создан.</div>
			<div>Вскоре вы будете перенаправлены на главную страницу!</div>
		</div>
	</div>
}

export const NewPostFormComponent = () => {
	const [content, setContent] = React.useState<string>('');
	const [title, setTitle] = React.useState<string>('');

	const [success, setSuccess] = React.useState<boolean>(false);
	const [error, setError] = React.useState<boolean>(false);

	const history = useHistory();

	const environment = useRelayEnvironment();

	const submitButtonDisabled = !content || !title;

	const handleChangeSuccess = React.useCallback((event: boolean) => {
		setSuccess(event);
	}, []);

	const handleChangeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContent(event.target.value);
		setError(false);
	};

	const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
		setError(false);
	};

	const handleOnclickSubmitButton = () => {
		commitMutation<PostCreateMutationType>(
			environment,
			{
				mutation: postCreateMutation,
				variables: {
					data: {
						content: content,
						title: title,
					}
				},
				onCompleted: () => {
					handleChangeSuccess(true);
					setTimeout(() => history.replace('/main'), 2000);
				},
				onError: (error) => {
					setError(true);
					console.error(error);
				},
				updater: (store) => {
					const newPostNode = store.getRootField('createPost');
					const prevPosts = store.getRoot().getLinkedRecords('posts');
					if (prevPosts) {
						prevPosts.push(newPostNode);
						store.getRoot().setLinkedRecords(prevPosts, 'posts');
					};
				}
			}
		);
	};

	if (success) {
		return <NewPostCreatedSuccessComponent />
	} else {
		return (
			<div className="global-form-wrapper">
				<div className="post-form">
					<h2>{title || "Новый пост"}</h2>
					<input className="post-form__title-input" placeholder="Заголовок поста" value={title} onChange={handleChangeTitle} />
					<textarea className="post-form__content-area" placeholder="Введите сюда текст поста" value={content} onChange={handleChangeContent} />
					<button className="post-form__submit-button" disabled={submitButtonDisabled} onClick={handleOnclickSubmitButton}>Отправить комментарий</button>
					{error ? <div>Произошла ошибка создания поста</div> : null}
				</div>
			</div>
		);
	}
}