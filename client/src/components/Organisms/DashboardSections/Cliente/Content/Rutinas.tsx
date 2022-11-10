import React from "react";
import CardRutinas from "../../../../Atoms/Card/CardRutinas";

const Rutinas = () => {
    const HardoceRutinas = [
        {
            title: "Rutina Full Body ",
            usuario: "Juan carlos Lopez.",
            descripcion:
                "A group of people interested in dogecoin, the currency and a bit of side for the meme and dof that we all know and love. These cases are perfectly simple and easy to distinguish.",
        },
        {
            title: "Rutina Full Body ",
            usuario: "Juan carlos Lopez.",
            descripcion:
                "A group of people interested in dogecoin, the currency and a bit of side for the meme and dof that we all know and love. These cases are perfectly simple and easy to distinguish.",
        },
        {
            title: "Rutina Full Body ",
            usuario: "Juan carlos Lopez.",
            descripcion: "",
        },
        {
            title: "Rutina Full Body ",
            usuario: "Juan carlos Lopez.",
            descripcion:
                "A group of people interested in dogecoin, the currency and a bit of side for the meme and dof that we all know and love. These cases are perfectly simple and easy to distinguish.",
        },
        {
            title: "Rutina Full Body ",
            usuario: "Juan carlos Lopez.",
            descripcion:
                "A group of people interested in dogecoin, the currency and a bit of side for the meme and dof that we all know and love. These cases are perfectly simple and easy to distinguish.",
        },
    ];
    return (
        <div className="w-full p-10">
            <div className="w-full flex flex-wrap gap-10">
                {HardoceRutinas.map((d) => (
                    <div className="xl:w-96 m-5  lg:w-full">
                        <CardRutinas
                            title={d.title}
                            descripcion={d.descripcion}
                            usuario={d.usuario}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Rutinas;
