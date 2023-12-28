/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { Checkbox } from "primereact/checkbox";
import { Accordion, AccordionTab } from 'primereact/accordion';
function Filters({ options, onFilterSelection }) {
    const [ingredients, setIngredients] = useState([]);
    const onIngredientsChange = (e) => {
        console.log(e)
        let _ingredients = [...ingredients]
        if (e.checked)
            _ingredients.push(e.value);
        else
            _ingredients.splice(_ingredients.indexOf(e.value), 1);

        setIngredients(_ingredients);
        onFilterSelection(e)
    }

    useEffect(() => {
        console.log(ingredients)
    })

    return (
        <div className="filter__wrapper">
            {
                options && Object.keys(options).map((option, idx) =>
                    <Accordion activeIndex={idx} key={idx}>
                        <AccordionTab header={option}>
                            <div className='filter__container'>
                                {options[option].map((val, idx) =>
                                    <div key={idx} className="filter__options">
                                        <Checkbox inputId={idx} name={option} value={val} onChange={onIngredientsChange} checked={ingredients.includes(val)} />
                                        <label className="mr-2">{val}</label>
                                    </div>
                                )}
                            </div>
                        </AccordionTab>

                    </Accordion>
                )
            }
        </div>
    )
}

export default Filters