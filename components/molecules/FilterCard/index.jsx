import Text from "@atoms/Text";
import AnimalsCard from "@molecules/AnimalsCard";
import useFecthInput from "../../../store/useFetchInput";

//console.log(animal);
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

  const likeAnimal = (item) => {
    let array = localStorage.getItem('oceandex')
      if(array === null){
        array = []
        array.push(item)
        let animal = JSON.stringify(array)
        localStorage.setItem('oceandex',animal)
      }else{
        array = JSON.parse(array)
        let findItem = array.findIndex(itemArray => itemArray.id === item.id)
        if(findItem === -1){
          array.push(item)
          let animal = JSON.stringify(array)
          localStorage.setItem('oceandex',animal)
        }
      }
  }

  if (filteredAnimals.length === 0 && search !== "") {
    return <Text weight="bold">No results Found</Text>;
  } else {
    return filteredAnimals.map((item) => {
      return (
        <AnimalsCard
          href={`oceandex/${item.name}`}
          onClick={()=>likeAnimal(item)}
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
