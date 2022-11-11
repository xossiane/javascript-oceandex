
import GeneralCuriositiesPage from "./GeneralCuriosities";
import OceanButtons from "./OceanWorldwide/OceanButtons/OceanButtons";
import OceanCuriosities from "./OceanWorldwide/OceanCuriosities";
import OceanWorldwide from "./OceanWorldwide/OceanWorldwide";




export default function MainPage() {

  return (
    <>
    <OceanWorldwide></OceanWorldwide>
    <br/>
    <br/>
    <br/>
    
    <GeneralCuriositiesPage></GeneralCuriositiesPage>

    <OceanCuriosities></OceanCuriosities>
    </>
  );
}
