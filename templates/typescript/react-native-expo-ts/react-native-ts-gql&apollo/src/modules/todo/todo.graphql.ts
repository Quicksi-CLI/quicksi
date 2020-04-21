import gql from 'graphql-tag';

export const DUMMY_TODOS = gql`
    query {
        todos {
            id
            title
            completed
        }
    }
`;
