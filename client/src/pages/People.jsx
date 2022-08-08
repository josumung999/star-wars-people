import { Grid, Container, Pagination } from "@nextui-org/react";
import { people } from "../constants/data";
import PeopleItem from '../components/PeopleItem';

export default function Product() {
  return (
    <Container>
      <Grid.Container gap={2} justify="center">
        {people.map((person) => (
          <PeopleItem key={person.id} person={person} />
        ))}
      </Grid.Container>
      <Pagination total={9} initialPage={1} />;
    </Container>
  );
}