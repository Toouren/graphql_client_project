/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type commentsByPostIdQueryVariables = {
    postId: string;
};
export type commentsByPostIdQueryResponse = {
    readonly commentsByPostId: ReadonlyArray<{
        readonly id: string;
        readonly content: string;
        readonly author: {
            readonly login: string;
        };
    }>;
};
export type commentsByPostIdQuery = {
    readonly response: commentsByPostIdQueryResponse;
    readonly variables: commentsByPostIdQueryVariables;
};



/*
query commentsByPostIdQuery(
  $postId: String!
) {
  commentsByPostId(postId: $postId) {
    id
    content
    author {
      login
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "postId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "postId",
    "variableName": "postId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "commentsByPostIdQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Comment",
        "kind": "LinkedField",
        "name": "commentsByPostId",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "author",
            "plural": false,
            "selections": [
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "commentsByPostIdQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Comment",
        "kind": "LinkedField",
        "name": "commentsByPostId",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "author",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "82fc69a8bb78567fc33996e32a02d846",
    "id": null,
    "metadata": {},
    "name": "commentsByPostIdQuery",
    "operationKind": "query",
    "text": "query commentsByPostIdQuery(\n  $postId: String!\n) {\n  commentsByPostId(postId: $postId) {\n    id\n    content\n    author {\n      login\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '5e297bae8d9e618090a1bcaca34ded96';
export default node;
