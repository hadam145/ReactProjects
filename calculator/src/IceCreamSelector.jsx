import Select from 'react-select';
import { useState } from 'react';

const flavors = [
    { value: 'chocolate', label: 'Čokoládová' },
    { value: 'vanilla', label: 'Vanilková' }
];

function IceCreamSelector() {
    const [flavor, setFlavor] = useState(flavors[0]);
    return (
       <div>
     <Select 
         options={flavors}
         value={flavor}
         onChange={setFlavor}
     />
     Vybráno: {flavor.value}
 </div>
    );
}
export default IceCreamSelector;