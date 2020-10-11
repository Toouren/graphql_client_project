/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type loginQueryVariables = {
    login: string;
    password: string;
};
export type loginQueryResponse = {
    readonly login: {
        readonly accessToken: string;
    };
};
export type loginQuery = {
    readonly response: loginQueryResponse;
    readonly variables: loginQueryVariables;
};



/*
query loginQuery(
  $login: String!
  $password: String!
) {
  login(login: $login, password: $password) {
    accessToken
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "login"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "login",
        "variableName": "login"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      }
    ],
    "concreteType": "LoginOutput",
    "kind": "LinkedField",
    "name": "login",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "accessToken",
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
    "name": "loginQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "loginQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "92640f68ab0b56544d88d3911e965f05",
    "id": null,
    "metadata": {},
    "name": "loginQuery",
    "operationKind": "query",
    "text": "query loginQuery(\n  $login: String!\n  $password: String!\n) {\n  login(login: $login, password: $password) {\n    accessToken\n  }\n}\n"
  }
};
})();
(node as any).hash = '1c1282b8222605b9bdeac80790f1fd56';
export default node;
