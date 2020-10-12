/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type commentsQueryVariables = {};
export type commentsQueryResponse = {
    readonly comments: ReadonlyArray<{
        readonly id: string;
        readonly content: string;
    }>;
};
export type commentsQuery = {
    readonly response: commentsQueryResponse;
    readonly variables: commentsQueryVariables;
};



/*
query commentsQuery {
  comments {
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
    "concreteType": "Comment",
    "kind": "LinkedField",
    "name": "comments",
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
    "name": "commentsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "commentsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a14bd9118c51a0af61e5660d0a81b444",
    "id": null,
    "metadata": {},
    "name": "commentsQuery",
    "operationKind": "query",
    "text": "query commentsQuery {\n  comments {\n    id\n    content\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c910ef4f65e65c8f7ea5c4d5f06f15bd';
export default node;
