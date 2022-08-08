import React from 'react'
import {
  Grid,
  Card,
  Text,
  Row,
  Button,
  Link,
} from "@nextui-org/react";

const PeopleItem = ({ person }) => {
  return (
    <Grid xs='4'>
      <Card color='black'>
        <Card.Body>
          <Row justify="center" align="center">
            <Text h4 size={20} css={{ m: 0 }}>
              {person.name}
            </Text>
          </Row>
          <Row justify="center" align="center">
            <Link href={`person/${person.id}`}>
              <Button css={{ mt: 10 }}>View</Button>
            </Link>
          </Row>
        </Card.Body>
      </Card>
    </Grid>
  )
}

export default PeopleItem