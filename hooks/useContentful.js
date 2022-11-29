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
      const sanitizedAnimal = entries.items.map((item) => {
        const {
          name,
          scientificName,
          height,
          weight,
          image,
          curiosity,
          classification,
          description,
          slug,
        } = item.fields;

        const curiosities = curiosity?.fields;

        const classifications = classification?.fields;

        const images = image?.fields;

        const animal = {
          name,
          scientificName,
          height,
          weight,
          images,
          curiosities,
          classifications,
          description,
          slug,
        };

        return {
          animal,
          curiosities,
        };
      });

      return sanitizedAnimal;
      console.log(sanitizedAnimal);
    } catch (error) {
      console.log(`Error fetching content: ${error}`);
    }
  };

  return { getAnimals };
};

export default useContentful;
