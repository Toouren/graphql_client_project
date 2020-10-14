/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserInput = {
    login: string;
    name?: string | null;
    password: string;
};
export type userCreateMutationVariables = {
    data: UserInput;
};
export type userCreateMutationResponse = {
    readonly createUser: {
        readonly id: string;
    };
};
export type userCreateMutation = {
    readonly response: userCreateMutationResponse;
    readonly variables: userCreateMutationVariables;
};



/*
mutation userCreateMutation(
  $data: UserInput!
) {
  createUser(data: $data) {
    id
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "data",
        "variableName": "data"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "createUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
    "name": "userCreateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "userCreateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "eb0c6663ca1038ae6d0bdcb3c7e0dd3e",
    "id": null,
    "metadata": {},
    "name": "userCreateMutation",
    "operationKind": "mutation",
    "text": "mutation userCreateMutation(\n  $data: UserInput!\n) {\n  createUser(data: $data) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b36472a1e404d68e6b43f52300bcc2b6';
export default node;
