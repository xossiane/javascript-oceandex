import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE,
    accessToken: process.env.NEXT_PUBLIC_ACCESSTOKEN,
    //host: "preview.contentful.com",
    host: "https://cdn.contentful.com",
  });

  const getAnimals = async () => {
    try {
      const animalsList = client.getEntries({
        content_type: "animal",
        select: "fields",
        include: 6,
        order: "fields.name",
        //limit: 5,
        "fields.completeAnimal": "true",
      });
      const sanitizedList = (await animalsList).items.map((item) => {
        const classification = item.fields.classification.fields;
        const image = item.fields.image.fields.file.url;
        const dietList = item.fields.dietList?.fields.dietList.map((i) => {
          return {
            id: i.fields.id || "",
            name: i.fields.name || "",
            image: i.fields.image.fields.file.url,
            completeAnimal: i.fields.completeAnimal || "",
          };
        });
        //const curiosity = item.fields.curiosity.fields.description;
        const location = {
          oceanName: item.fields.location.content[0].content[0].value,
          oceanFile:
            item.fields.location.content[1].data.target.fields.file.url,
        };

        return { ...item.fields, classification, image, location, dietList };
      });

      return sanitizedList;
    } catch (error) {
      console.log(`Error fetching content: ${error}`);
    }
  };

  const getAuthors = async () => {
    try {
      const authors = client.getEntries({
        content_type: "authors",
        select: "fields",
        order: "fields.name",
      });
      const sanitizedList = (await authors).items.map((item) => {
        return { ...item.fields, photo: item.fields.photo.fields.file.url };
      });

      return sanitizedList;
    } catch (error) {
      console.log(`Error fetching content: ${error}`);
    }
  };

  const getCuriosities = async (curiosityType = "", oceanName = "") => {
    try {
      const curiosities = client.getEntries({
        content_type: "animalCuriosities",
        "fields.curiosityType": curiosityType,
        "fields.oceanName": oceanName,
        select: "fields",
        order: "fields.id",
      });
      const sanitizedList = (await curiosities).items.map((item) => {
        const curiosityType = item.fields.curiosityType;
        if (curiosityType === "ocean") {
          return {
            id: item.fields.id,
            curiosityType: curiosityType,
            oceanName: item.fields.oceanName,
            oceanTitle: item.fields.oceanTitle,
            description: item.fields.description,
            image: item.fields.image.fields.file.url,
          };
        } else {
          return {
            id: item.fields.id,
            curiosityType: curiosityType,
            animalName: item.fields.animalName,
            description: item.fields.description,
            orderAndPhylum: item.fields.orderAndPhylum,
            image: item.fields.image.fields.file.url,
          };
        }
      });

      return sanitizedList;
    } catch (error) {
      console.log(`Error fetching content: ${error}`);
    }
  };

  return { getAnimals, getAuthors, getCuriosities };
};

export default useContentful;
