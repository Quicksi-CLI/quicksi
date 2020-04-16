import { gql } from 'apollo-server-express';

// eslint-disable-next-line import/prefer-default-export
export const TypeDefsCommon = gql(`
type MutationResponse {
    isSuccess: Boolean!,
    error: String,
    data: String
}
type Image {
    md: String,
    sm: String,
    lg: String,
    mobile: String,
}
scalar Date
scalar Upload
`);
