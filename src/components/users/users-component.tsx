import React from 'react';
import { QueryRenderer } from 'react-relay';
import { useRelayEnvironment } from 'react-relay/hooks';
import { usersQuery } from '../../requests/users';

const RendereUsersComponent = ({ error, props }: any) => {
    if (error) {
        return <div>{error.message}</div>;
    } else if (props) {
        const usersBlocks = [];
        for (let user of props.users) {
            usersBlocks.push(<div>{user.login}</div>);
        }

        return usersBlocks;
    }
    return <div>Loading</div>;
}

export const Users = () => {
    const environment = useRelayEnvironment();

    return (
        <QueryRenderer
            environment={environment}
            query={usersQuery}
            variables={{}}
            render={RendereUsersComponent}></QueryRenderer>
    );
}