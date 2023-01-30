import { useCallback } from 'react';
import { GraphQLClient } from 'graphql-request';

const useGraphqlRequest = (query: string) => {

    const getGraphQlData = useCallback(async () => {

        const endpoint = process.env.REACT_APP_API_URL! + process.env.REACT_APP_SPACE_ID!;
        const token = `Bearer ${process.env.REACT_APP_API_KEY}`;

        const graphQLClient = new GraphQLClient(endpoint, {
            headers: {
                authorization: token,
            },
        })

        const data = await graphQLClient.request(query);
        return data;

    }, [query]);

    return { getGraphQlData };
};

export default useGraphqlRequest;
