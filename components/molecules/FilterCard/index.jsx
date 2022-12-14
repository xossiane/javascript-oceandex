import Text from "@atoms/Text";
import AnimalsCard from "@molecules/AnimalsCard";
import useFecthInput from "../../../store/useFetchInput";

function FilterCard({ animals }) {
  const search = useFecthInput((state) => state.search);
  const filteredAnimals = animals.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.classification.class.toLowerCase().includes(search.toLowerCase()) ||
      item.classification.order.toLowerCase().includes(search.toLowerCase()) ||
      item.classification.kingdom
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.classification.phylum.toLowerCase().includes(search.toLowerCase())
  );

  if (filteredAnimals.length === 0 && search !== "") {
    return <Text weight="bold">No results Found</Text>;
  } else {
    return filteredAnimals.map((item) => {
      return (
        <AnimalsCard
          href={`oceandex/${item.name}`}
          key={item.id}
          name={item.name}
          order={item.classification.order}
          phylum={item.classification.phylum}
          Class={item.classification.class}
          kingdom={item.classification.kingdom}
          src={item.image}
        />
      );
    });
  }
}

export default FilterCard;
