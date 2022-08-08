import { Grid, Container, Pagination } from "@nextui-org/react";
import { gql, useQuery } from "@apollo/client";
import PeopleItem from '../components/PeopleItem';
import { QueryResult } from "../components/QueryResult";


const PEOPLE = gql`
  query GetPeople {
    allPeople {
      name
      height
      mass
      hair_color
      skin_color
      eye_color
      birth_year
      gender
      homeworld
    }
  }
`;

export default function People() {
  const { loading, error, data } = useQuery(PEOPLE);

  return (
    <Container>
      <Grid.Container gap={2} justify="center">
        <QueryResult error={error} loading={loading} data={data}>
          {data?.allPeople?.map((person, index) => (
            <PeopleItem index={index} key={index} person={person} />
          ))}
        </QueryResult>
      </Grid.Container>
      <Pagination total={9} initialPage={1} />;
    </Container>
  );
}