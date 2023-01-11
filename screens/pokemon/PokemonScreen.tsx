import React from "react";
import { Button } from "react-native";
import { useGetPokemonByNameQuery } from "../../api/pokemonApi";
import { Box, FullWidthImage, ScreenContainer, Text } from "../../App.styles"

export const PokemonScreen = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery({name: 'pikachu'});

  if(error) {
    throw new Error("pokemon fetching error");
  }

  if(isLoading || !data) {
    return (
      <ScreenContainer>
        <Text>Loading ...</Text>
      </ScreenContainer>
    )
  }

  
  const { name, id, sprites } = data;
  
  console.log(sprites.front_default);

  const handlePress = () => {
    throw new Error("This is the test error")
  }

  return (
    <ScreenContainer>
      <FullWidthImage
        source={{
          uri: sprites.front_default,
        }}
        // style={{
        //   aspectRatio: "4/3"
        // }}
      />
      <Button title="Brake the app" onPress={handlePress} />
      <Text>{name}</Text>
      <Text>{id}</Text>
      <Box bgColor="gold" />
    </ScreenContainer>
  )
}