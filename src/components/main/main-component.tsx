import React from 'react';
import { QueryRenderer } from 'react-relay';
import { useRelayEnvironment } from 'react-relay/hooks';
import { postsQuery } from '../../requests/posts';

const RenderMainComponent = ({ error, props }: any) => {
    if (error) {
        return <div>{error.message}</div>;
    } else if (props && props.posts) {
        if (props.posts.lenght) {
            const postsBlocks = [];
            for (let user of props.posts) {
                postsBlocks.push(<div>{user.content}</div>);
            }
    
            return postsBlocks;
        } else {
            return <div>Постов не найдено</div>
        }
    }

    return <div>Loading</div>;
}

export const Main = () => {
    const environment = useRelayEnvironment();

    return (
        <QueryRenderer
            environment={environment}
            query={postsQuery}
            variables={{}}
            render={RenderMainComponent}></QueryRenderer>
    );
}