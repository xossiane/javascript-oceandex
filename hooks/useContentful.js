import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE,
    accessToken: process.env.NEXT_PUBLIC_ACCESSTOKEN,
    host: "preview.contentful.com",
  });

  const getAnimals = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "animal",
        select: "fields",
        "fields.teste": "true",
      });
      const animals = [];
      const sanitizedAnimal = entries.items.map((item) => {
        const {
          id,
          name,
          scientificName,
          height,
          weight,
          image,
          curiosity,
          classification,
          description,
          slug,
          location,
        } = item.fields;

        const curiosities = curiosity?.fields;

        const classifications = classification?.fields;

        const images = image?.fields;

        const animal = {
          id,
          name,
          scientificName,
          height,
          weight,
          images,
          curiosities,
          classifications,
          description,
          slug,
          location,
        };

        animals.push(animal);
        return {
          animal,
        };
      });

      return animals;
    } catch (error) {
      console.log(`Error fetching content: ${error}`);
    }
  };

  const getAnimal = async (animal) => {
    try {
      const animals = await getAnimals();
      const newAnimal = animals.find((a) => {
        return (
          a.name === animal ||
          a.classifications.order === animal ||
          a.classifications.phylum === animal
        );
      });
      return [newAnimal];
    } catch (error) {
      console.log(`Error fetching content: ${error}`);
    }
  };

  return { getAnimals, getAnimal };
};

export default useContentful;
