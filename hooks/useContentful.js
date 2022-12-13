import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE,
    accessToken: process.env.NEXT_PUBLIC_ACCESSTOKEN,
    host: "preview.contentful.com",
  });

  const getAnimals = async () => {
    try {
      const animalsList = client.getEntries({
        content_type: "animal",
        select: "fields",
        "fields.id": "1",
      });
      const sanitizedList = (await animalsList).items.map((item) => {
        const classification = item.fields.classification.fields;
        const image = item.fields.image.fields.file.url;
        //const curiosity = item.fields.curiosity.fields.description;
        const location = {
          oceanName: item.fields.location.content[0].content[0].value,
          oceanFile:
            item.fields.location.content[1].data.target.fields.file.url,
        };

        return { ...item.fields, image, location, classification };
      });

      return sanitizedList;
    } catch (error) {
      console.log(`Error fetching content: ${error}`);
    }
  };
  /* const getAnimals = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "animal",
        select: "fields",
        //"fields.teste": "true",
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

  return { getAnimals, getAnimal }; */
  return { getAnimals };
};

export default useContentful;
