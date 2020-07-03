import Layout from '../components/Layout'
import { useQuery, gql } from '@apollo/client'
import { SpeciesPage } from '../types/graphql'

type SpeciesList = {
    species: SpeciesPage
}

const SPECIES = gql`
  query ListSpecies {
      species {
          data {
              name
              scientificName
              edible
              notes
          }
      }
  }
`

export default function Example() {
    const { loading, error, data } = useQuery<SpeciesList>(SPECIES)

    if (loading) return <Layout><p>Loading...</p></Layout>
    if (error) return <Layout><p>Error <pre>{error}</pre></p></Layout>
    return (
        <Layout>{
            data.species.data.map(
                ({ name, scientificName, edible, notes }) =>
                    <div key={scientificName}>
                        <p>
                            <b>Species:&nbsp;</b>
                            {name} ({scientificName})
                        </p>
                        <p>
                        <b>Edible:&nbsp;</b>
                        {edible ? 'Yes' : 'No'}
                        </p>
                        <p>
                            <b>Notes:&nbsp;</b>
                            {notes}
                        </p>
                    </div>
            )
        }</Layout>
    )
}