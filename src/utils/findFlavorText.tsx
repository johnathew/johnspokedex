import { FlavorTextEntry, SpeciesInfoTypes } from "@/types/pokemonActionTypes";

export const findFlavorText = (flavor_text: FlavorTextEntry[]) => {
    const englishTextEntries = flavor_text.filter(
        (flavor) => flavor.language.name === "en"
    );

  return englishTextEntries;
};
