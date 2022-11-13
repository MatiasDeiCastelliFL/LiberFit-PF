const {
    Clients,
    Employees,
    Exercises,
    Gyms,
    Locacions,
    Machines,
    Owners,
    Products,
    Rols,
    Rutines,
    Subscriptions,
    Trainings,
    Payments,
} = require("../db");
const api = require("../controllers/gym.json");

function generateRandomElement(element, start = 0, end = 1) {
    const generators = {
        date: new Date(
            +new Date("2022-08-25") +
                Math.random() * (new Date(start) - new Date(end))
        ),
        boolean: Math.round(0 + Math.random() * (1 - 0)) ? true : false,
        number: Math.round(start + Math.random() * (end - start)),
    };
    return generators[element];
}

// agregamos los datos que no necesitan datos previos para ser creadas
const crearDesdeJsonAPaymentsDb = async () => {
    const subscriptions = api[0].payment.map((pay) => {
        return {
            id: pay.id,
            name: pay.name || "",
            amount: pay.amount, // tiene que ser double
            active: pay.active, // tiene que se boolean
        };
    });

    await Payments.bulkCreate(subscriptions, {
        ignoreDuplicates: true,
    });
};

const crearDesdeJsonAMachinesDb = async () => {
    try {
        const machines = api[0].locations
            .map((location) => location.machines)
            .flat(Infinity)
            .filter(
                (val, index, self) =>
                    index === self.findIndex((ele) => ele.name === val.name)
            )
            .map((machine) => {
                return {
                    id: machine.id,
                    name: machine.name,
                    image: machine.image,
                    muscle: machine.muscle || "brazos",
                };
            });
        await Machines.bulkCreate(machines, {
            ignoreDuplicates: true,
        });
    } catch (error) {
        console.error(error);
    }
};

const crearDesdeJsonAProductsDb = async () => {
    const products = api[0].locations
        .map((location) => location.products)
        .flat(Infinity)
        .filter(
            (val, index, self) =>
                index === self.findIndex((ele) => ele.name === val.name)
        )
        .map((product) => {
            return {
                name: product.name,
                price: product.price,
                stock: product.stock || Math.ceil(Math.random()) * 100,
                code: product.code || "12312",
                active: product.active || true,
                image: product.image,
                description:
                    product.description || "Esto es ".concat(product.name),
                size: product.size || "10",
                brand: product.brand || "LiberFit",
                active: product.active || false,
            };
        });
    await Products.bulkCreate(products, {
        ignoreDuplicates: true,
    });
};

const crearDesdeJsonATrainingsDb = async () => {
    const trainings = api[0].locations
        .map((location) => location.trainings)
        .flat(Infinity)
        .filter(
            (val, index, self) =>
                index === self.findIndex((ele) => ele.name === val.name)
        )
        .map((train) => {
            return {
                name: train.name,
                image: train.image,
                timeSlot: train.timeSlot,
            };
        });
    await Trainings.bulkCreate(trainings, {
        ignoreDuplicates: true,
    });
};
const crearDesdeJsonAExerciseDb = async () => {
    const exercises = api[0].exercises.map((e) => {
        return {
            id: e.id,
            name: e.name,
            repetition: e.repetition,
            series: e.series,
            video: e.video,
            image: e.image,
            muscle: e.muscle,
        };
    });
    await Exercises.bulkCreate(exercises, {
        ignoreDuplicates: true,
    });
};

const crearDesdeJsonARutinesDb = async () => {
    const dataJsonRutines = api[0].rutines.map((rutine) => {
        return {
            id: rutine.id,
            name: rutine.name,
        };
    });
    await Rutines.bulkCreate(dataJsonRutines, {
        ignoreDuplicates: true,
    });
};

const crearDesdeJsonASubscriptionsDb = async () => {
    const subscriptions = api[0].subscriptions.map((sub) => {
        return {
            id: sub.id,
            name: sub.name,
            price: sub.price || "$0.00",
            description: sub.description || "No Suscripto",
        };
    });

    await Subscriptions.bulkCreate(subscriptions, {
        ignoreDuplicates: true,
    });
};

const crearDesdeJsonARolsDb = async () => {
    const rols = api[0].roles.map((e) => {
        return { id: e.id, name: e.name };
    });
    await Rols.bulkCreate(rols, {
        ignoreDuplicates: true,
    });
};
// agregamos los datos de las tablas que tienen  relaciones con las tablas que ya contienen datos

const crearDesdeJsonALocacionsDb = async () => {
    api[0].locations.forEach(async (loc) => {
        const location = await Locacions.create({
            id: loc.id,
            name: loc.name,
            phone: loc.phone,
            address: loc.adress,
        });

        loc.products.forEach(async (prod) => {
            const aux = await Products.findOne({ where: { name: prod.name } });
            await location.addProducts(aux);
        });

        loc.machines.forEach(async (machine) => {
            const aux = await Machines.findOne({
                where: { name: machine.name },
            });
            await location.addMachines(aux);
        });
        loc.trainings.forEach(async (train) => {
            const aux = await Trainings.findOne({
                where: { name: train.name },
            });
            await location.addTrainings(aux);
        });

        const subscriptions = await Subscriptions.findAll();
        await location.addSubscriptions(subscriptions);
    });
};

const crearDesdeJsonAClientsDb = async () => {
    const oneRol = await Rols.findOne({ where: { name: "Cliente" } });
    const oneSubscriptions = await Subscriptions.findOne();
    const oneRutines = await Rutines.findOne();
    const onePayments = await Payments.findOne();
    const oneLocacion = await Locacions.findOne();

    api[0].clients.forEach(async (client, i) => {
        const clientByName = await Clients.create({
            id: client.id,
            name: client.name,
            phone: client.phone,
            email: client.email,
            password: client.password,
            active: generateRandomElement("boolean"),
            createdAt:
                client.createdAt ||
                generateRandomElement("date", "2022-08-25", "2022-11-04"),
            image: client.image,
        });
        // console.log('clientByName', oneLocacion.__proto__)
        await oneLocacion.createLocacionReview({
            locacionId: api[0].reviews[i]?.locacionId,
            clientId: api[0].reviews[i]?.clientId,
            comment: api[0].reviews[i]?.comment,
            rate: api[0].reviews[i]?.rate,
        });

        await oneRol.addClient(clientByName);
        await clientByName.addRutine(oneRutines);
        await oneSubscriptions.addClient(clientByName);
        await clientByName.addPayment(onePayments);
        await clientByName.addLocacions(oneLocacion);
    });
};
const crearDesdeJsonAEmployeesDb = async () => {
    api[0].employees.forEach(async (employee, i) => {
        const EmployeeByName = await Employees.create({
            id: employee.id,
            name: employee.name,
            phone: employee.phone,
            email: employee.email,
            password: employee.password,
            active: typeof employee.active === "boolean" || false,
            image: employee.image,
        });
        // TODO cambiar location id por un metodo mas escalable usando la tabla de relaciones
        const rol = api[0].employees[i].RolId;
        const oneRutines = await Rutines.findOne();
        const oneRol = await Rols.findOne({ where: { id: rol } });
        const oneLocation = await Locacions.findOne({
            // where: { id: employee.idLocation },
        });
        await EmployeeByName.addRutine(oneRutines);
        await EmployeeByName.addLocacion(oneLocation);
        await oneRol.addEmployee(EmployeeByName);
    });
};
const crearDesdeJsonAOwnersDb = async () => {
    const owners = api[0].owners.map((owner) => {
        return {
            name: owner.name,
            email: owner.email,
            password: owner.password,
            phone: owner.phone,
            avatar: owner.avatar,
        };
    });

    await Owners.bulkCreate(owners, {
        ignoreDuplicates: true,
    });
};

const crearDesdeJsonAGymsDb = async () => {
    await Gyms.create({
        id: api[0].id,
        name: api[0].name,
        email: api[0].email,
        phone: api[0].phone,
        image: api[0].image,
    });
};

const createDBonfromatOfJSON = async () => {
    // get from adta base
    const clients = await Clients.findAll();
    const employees = await Employees.findAll();
    const exercises = await Exercises.findAll();
    const gyms = await Gyms.findAll();
    const owners = await Owners.findAll();
    const roles = await Rols.findAll();
    const rutines = await Rutines.findAll();
    const subscriptions = await Subscriptions.findAll();
    const payment = await Payments.findAll();
    const products = await Products.findAll();

    const loc = await Locacions.findAll();
    const locations = loc.map(async (e) => {
        const loc = await Locacions.findOne({
            where: { name: e.name },
        });
        const prod = await loc.getProducts();
        const train = await loc.getTrainings();
        const machines = await loc.getMachines();
        return {
            id: e.id,
            name: e.name,
            phone: e.phone,
            adress: e.adress,

            trainings: train,
            products: prod,
            machines,
        };
    });
    return {
        name: "hola desde initail",
    };

    return [
        {
            id: gyms.id,
            name: gyms.name,
            phone: gyms.phone,
            email: gyms.email,
            image: gyms.image,
            owners,
            subscriptions,
            locations,
            employees,
            roles,
            rutines,
            exercises,
            payment,
            clients,
            reviews: [
                {
                    id: 1,
                    idEmployee: 1,
                    idClient: 2,
                    value: 4.8,
                },
                {
                    id: 2,
                    idEmployee: 2,
                    idClient: 2,
                    value: 5,
                },
                {
                    id: 3,
                    idEmployee: 1,
                    idClient: 2,
                    value: 4.5,
                },
            ],
        },
    ];
};

module.exports = {
    crearDesdeJsonAPaymentsDb,
    crearDesdeJsonAMachinesDb,
    crearDesdeJsonAProductsDb,
    crearDesdeJsonATrainingsDb,
    crearDesdeJsonARutinesDb,
    crearDesdeJsonAExerciseDb,
    crearDesdeJsonARolsDb,
    crearDesdeJsonASubscriptionsDb,
    crearDesdeJsonAClientsDb,
    crearDesdeJsonALocacionsDb,
    crearDesdeJsonAEmployeesDb,
    crearDesdeJsonAOwnersDb,
    crearDesdeJsonAGymsDb,
    createDBonfromatOfJSON,
};
