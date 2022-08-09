import { Card, Grid, Text } from '@nextui-org/react'
import React from 'react'

const PersonDetails = ({data}) => {
  return (
    <Card css={{ px: "2rem", py: "2rem"}}>
      <Card.Header>
        <Text h2 css={{ lineHeight: "$xs" }}>
          {data.person.name}
        </Text>
      </Card.Header>
      <Card.Body>
        <Grid.Container gap={2} justify="center">
          <Grid xs={6}>
            <ul css={{ listStyle: "none", p: "0" }}>
              <li>
                <Text b css={{ color: "$accents8" }}>
                  Mass: {data.person.mass} KG
                </Text>
              </li>
              <li>
                <Text b css={{ color: "$accents8" }}>
                  Height: {data.person.height} CM
                </Text>
              </li>
              <li>
                <Text b css={{ color: "$accents8" }}>
                  Birth Year: {data.person.birth_year}
                </Text>
              </li>
            </ul>
          </Grid>
          <Grid xs={6}>
            <ul css={{ listStyle: "none", p: "0" }}>
              <li>
                <Text b css={{ color: "$accents8" }}>
                  Skin Color: {data.person.skin_color}
                </Text>
              </li>
              <li>
                <Text b css={{ color: "$accents8" }}>
                  Eye Color: {data.person.eye_color}
                </Text>
              </li>
              <li>
                <Text b css={{ color: "$accents8" }}>
                  Hair Color: {data.person.hair_color}
                </Text>
              </li>
              <li>
                <Text b css={{ color: "$accents8" }}>
                  Gender: {data.person.gender}
                </Text>
              </li>
            </ul>
          </Grid>
        </Grid.Container>
      </Card.Body>
    </Card>
  )
}

export default PersonDetails