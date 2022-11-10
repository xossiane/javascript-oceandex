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
        //order: "fields.description",
        //"fields.teste": "true",
      });
      console.log(entries);
      const sanitizedEntries = entries.items.map((item) => {
        const ocean = item.fields.ocean.fields; //Está dentro de um array
        const image = item.fields.image.fields;
        const curiosity = item.fields.curiosity.fields;
        const classification = item.fields.classification.fields;

        return {
          ...item.fields,
          //ocean,
          classification,
          curiosity,
          image,
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching content: ${error}`);
    }
  };

  const getAnimalCuriosities = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "animalCuriosities",
        select: "fields",
        //order: "fields.description",
        //"fields.teste": "false",
      });
      //console.log(entries);
      const sanitizedEntries = entries.items.map((item) => {
        //const curiosity = item.fields.ocean.fields; //Está dentro de um array

        return {
          ...item.fields,

          curiosity,
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching content: ${error}`);
    }
  };

  return { getAnimals, getAnimalCuriosities };
};

export default useContentful;
