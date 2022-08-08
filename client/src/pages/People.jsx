import { Grid, Container, Pagination } from "@nextui-org/react";
import { gql, useQuery } from "@apollo/client";
import PeopleItem from '../components/PeopleItem';


const PEOPLE = gql`
  query AllPeople {
    allPeople {
      id
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

  if (loading) return 'Loading ...';

  if (error) return `Error! ${error.message}`;
  return (
    <Container>
      <Grid.Container gap={2} justify="center">
        {data?.allPeople?.map((person) => (
          <PeopleItem key={person.id} person={person} />
        ))}
      </Grid.Container>
      <Pagination total={9} initialPage={1} />;
    </Container>
  );
}