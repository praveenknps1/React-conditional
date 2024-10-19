import Mens from "./mens";
import Women from "./womens";
import Jewels from "./jewel";
import Eles from "./elec";


let category ="womens"

let com=""

switch(category){
    case "mens":
        com=<Mens/>
    break;
        case "womens":
            com=<Women/>
            break;
            case "elec":
            com=<Eles/>
            break;
            case "jewel":
            com=<Jewels/>
            break;

}

function Condition(){
    return(
<>

{com}

</>

    )
}

export default Condition;
<br />