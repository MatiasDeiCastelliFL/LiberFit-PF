import React from "react";
import AddButton from "../../Atoms/Inputs/AddButton/AddButton";
import SelectInput from "../../Atoms/Inputs/SelectInput/SelectInput";
import CreateInput from "../../Atoms/Inputs/CreateInput/CreateInput";
import ImageInput from "../../Atoms/Inputs/ImageInput/ImageInput";
import DescriptionInput from "../../Atoms/Inputs/DescriptionInput/DescriptionInput";
import logo from "../../../assets/IMG/LIBERFIT_2.png";

interface Props {
    fields:{
        type: string,
        placeholder: string,
    }[],
    selectFields:{
        options: string[],
    }[],
    background: React.CSSProperties
    
}



const CreateInputsContainer = ({fields, selectFields, background}:Props) => {

    return (
        <div className="flex flex-col items-center w-2/3 border rounded-l-custom_1 p-4 gap-3">
            <img src={logo} alt="logo" className="h-10" />
            {
                fields.map((field, index) => {
                    return <CreateInput placeholder={field.placeholder} type={field.type} key={index} />
                })
            }
            {
                selectFields.map((selectField, index) => {
                    return <SelectInput options={selectField.options} key={index} />
                })
            }
            <ImageInput />
            <DescriptionInput />
            <AddButton background={background} />
        </div>
    );
};

export default CreateInputsContainer;