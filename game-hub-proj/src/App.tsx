import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import usePlatforms from './hooks/usePlatforms'
import { Platform } from './hooks/useGames'

function App() {

  const [selectedGrenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)
  

  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}
  templateColumns={{
    base: '1fr',
    lg: '200px 1fr'

  }}
  >
    <GridItem area={'nav'}>
      <Navbar />
    </GridItem>
    <Show above='lg'>
      <GridItem area={'aside'} paddingX={5}>
        <GenreList selectedGenre={selectedGrenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
      </GridItem>
    </Show>

    <GridItem area={'main'} >
      <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)}/>
      <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGrenre} />
    </GridItem>
  </Grid>
}

export default App
