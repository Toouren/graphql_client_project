/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type postsByUserIdQueryVariables = {
    userId: string;
};
export type postsByUserIdQueryResponse = {
    readonly postsByUserId: ReadonlyArray<{
        readonly id: string;
        readonly title: string;
        readonly content: string;
    }>;
};
export type postsByUserIdQuery = {
    readonly response: postsByUserIdQueryResponse;
    readonly variables: postsByUserIdQueryVariables;
};



/*
query postsByUserIdQuery(
  $userId: String!
) {
  postsByUserId(userId: $userId) {
    id
    title
    content
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "Post",
    "kind": "LinkedField",
    "name": "postsByUserId",
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
        "name": "title",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "postsByUserIdQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "postsByUserIdQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "cbf377b650dd1307565839be2d9bf625",
    "id": null,
    "metadata": {},
    "name": "postsByUserIdQuery",
    "operationKind": "query",
    "text": "query postsByUserIdQuery(\n  $userId: String!\n) {\n  postsByUserId(userId: $userId) {\n    id\n    title\n    content\n  }\n}\n"
  }
};
})();
(node as any).hash = 'fa329b0a7a6d23dc4830a097819eb14c';
export default node;
