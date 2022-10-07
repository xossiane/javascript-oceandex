import Arrow from "../components/atoms/Arrow/Arrow";
import Like from "../components/atoms/Like/Like"
import Text from "../components/atoms/Text/Text"


export default function mainpage(){
    return <><Arrow white={false}/>
    <div class="like"><Like liked={false} size={"10"}/>
    <Text/>
    </div>
   
    </>
}