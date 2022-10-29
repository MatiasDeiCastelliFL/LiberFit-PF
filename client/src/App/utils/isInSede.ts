export default function isInSede(name: any, sedes: any[], category: any) {
    let isIn = false;
    let sedesList: string[] = [];
    sedes.forEach((sede) => {
        if (category === 'products') {
            sede.products.forEach((product: { name: string; }) => {
                if (product.name.toLowerCase().includes(name.toLowerCase())) {
                    isIn = true;
                    sedesList.push("Sede "+sede.name.split(" ")[sede.name.split(" ").length-1])
                }
            });
        } else if (category === 'machines') {
            sede.machines.forEach((machine: { name: string; }) => {
                if (machine.name.toLowerCase().includes(name.toLowerCase())) {
                    isIn = true;
                    sedesList.push("Sede "+sede.name.split(" ")[sede.name.split(" ").length-1]);
                }
            })
        }else if (category === 'trainings') {
            sede.trainings.forEach((training: { name: string; }) => {
                if (training.name.toLowerCase().includes(name.toLowerCase())) {
                    isIn = true;
                    sedesList.push("Sede "+sede.name.split(" ")[sede.name.split(" ").length-1]);
                }
            })
        }
    })
    console.log(sedesList)
    return sedesList
}