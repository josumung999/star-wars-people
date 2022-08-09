import React from 'react'
import { gql, useQuery } from '@apollo/client';
import PersonDetails from '../components/PersonDetails';
import { QueryResult } from '../components/QueryResult';


export const GET_PERSON = gql`
  query Person($personId: String!) {
    person(id: $personId) {
      name
      mass
      height
      skin_color
      hair_color
      eye_color
      birth_year
      gender
      homeworld
    }
  }
`;

const Person = ({personId}) => {
  const {loading, error, data} = useQuery(GET_PERSON, { 
    variables: {personId} 
  });

  // const { personId } = useParams();


  return (
    <QueryResult error={error} loading={loading} data={data}>
      {/* this is where our component displaying the data will go */}
      <PersonDetails person={data} />
    </QueryResult>
  )
}

export default Person