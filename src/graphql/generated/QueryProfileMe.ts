/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryProfileMe
// ====================================================

export interface QueryProfileMe_user {
  __typename: "UsersPermissionsUser";
  id: string;
  username: string;
  email: string;
}

export interface QueryProfileMe {
  user: QueryProfileMe_user | null;
}

export interface QueryProfileMeVariables {
  identifier: string;
}
