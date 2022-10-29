import React from "react";
import Json from './data.json';
import FormBanner from "../../Atoms/FormBanner/FormBanner";
import CreateInputsContainer from "../../Molecules/CreateInputsContainer/CreateInputsContainer";

const CreateForm = () => {
    const data = Json;

    
    return (
        <div className="flex gap-5">
            {
                data.map((item) => {
                    return (
                        <div className="flex h-fit py-2 w-96">
                            <CreateInputsContainer fields={item.fields} selectFields={item.selectFields} background={{background:item.background}}/>
                            <FormBanner name={item.name} background={{background:item.background}}/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default CreateForm;
