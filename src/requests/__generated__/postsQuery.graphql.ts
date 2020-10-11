/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type postsQueryVariables = {};
export type postsQueryResponse = {
    readonly posts: ReadonlyArray<{
        readonly id: string;
        readonly content: string;
    }>;
};
export type postsQuery = {
    readonly response: postsQueryResponse;
    readonly variables: postsQueryVariables;
};



/*
query postsQuery {
  posts {
    id
    content
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Post",
    "kind": "LinkedField",
    "name": "posts",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "content",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "postsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "postsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "866ac465088653e945d7ea97ebda7b9c",
    "id": null,
    "metadata": {},
    "name": "postsQuery",
    "operationKind": "query",
    "text": "query postsQuery {\n  posts {\n    id\n    content\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c32557f41bcb79f52478d45bb29c543d';
export default node;
