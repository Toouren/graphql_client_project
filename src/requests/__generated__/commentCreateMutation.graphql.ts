/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CommentInput = {
    content: string;
    postId: string;
};
export type commentCreateMutationVariables = {
    data: CommentInput;
};
export type commentCreateMutationResponse = {
    readonly createComment: {
        readonly id: string;
        readonly content: string;
        readonly author: {
            readonly login: string;
        };
    };
};
export type commentCreateMutation = {
    readonly response: commentCreateMutationResponse;
    readonly variables: commentCreateMutationVariables;
};



/*
mutation commentCreateMutation(
  $data: CommentInput!
) {
  createComment(data: $data) {
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
    "name": "data"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "data",
    "variableName": "data"
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
    "name": "commentCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Comment",
        "kind": "LinkedField",
        "name": "createComment",
        "plural": false,
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "commentCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Comment",
        "kind": "LinkedField",
        "name": "createComment",
        "plural": false,
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
    "cacheID": "af671b42c173f6179cdbcad241e78708",
    "id": null,
    "metadata": {},
    "name": "commentCreateMutation",
    "operationKind": "mutation",
    "text": "mutation commentCreateMutation(\n  $data: CommentInput!\n) {\n  createComment(data: $data) {\n    id\n    content\n    author {\n      login\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'af77dad98053a95deca36c1f04d9327e';
export default node;
