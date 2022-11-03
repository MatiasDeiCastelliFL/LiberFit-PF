export default function isInSede(name: any, sedes: any[], category: any) {
    let isIn = false;
    let sedesList: string[] = [];
    sedes.forEach((sede: {products:any, name:string, machines:any, trainings:any }) => {
        if (category === 'products') {
            if (sede.products && sede.products.length > 0) {
                sede.products.forEach((product: any) => {
                    if (product.name === name) {
                        isIn = true;
                        sedesList.push(sede.name);
                    }
                });
            }
        } else if (category === 'machines') {
            if (sede.machines && sede.machines.length > 0) {
                sede.machines.forEach((machine: any) => {
                    if (machine.name === name) {
                        isIn = true;
                        sedesList.push(sede.name);
                    }
                });
            }
        } else if (category === 'trainings') {
            if (sede.trainings && sede.trainings.length > 0) {
                sede.trainings.forEach((training: any) => {
                    if (training.name === name) {
                        isIn = true;
                        sedesList.push(sede.name);
                    }
                });
            }
        }
    });
            
    return sedesList
}