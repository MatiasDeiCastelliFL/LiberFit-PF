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
// agregamos los datos que no necesitan datos previos para ser creadas
const crearDesdeJsonAPaymentsDb = async () => {
    const subscriptions = api[0].payment.map((pay) => {
        return {
            amount: pay.amount, // tiene que ser double
            active: pay.active, // tiene que se boolean
        };
    });

    await Payments.bulkCreate(subscriptions);
};

const crearDesdeJsonAMachinesDb = async () => {
    const machines = api[0].locations
        .map((location) => location.machines)
        .flat(Infinity)
        .filter(
            (val, index, self) =>
                index === self.findIndex((ele) => ele.name === val.name)
        )
        .map((machine) => {
            return {
                name: machine.name,
                image: machine.image,
                muscle: machine.muscle || "brazos",
            };
        });
    await Machines.bulkCreate(machines);
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
                stock: product.stock || "",
                code: product.code || "",
                image: product.image,
                description: product.description || "",
                size: product.size || "",
                brand: product.brand || "",
            };
        });
    await Products.bulkCreate(products);
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
                timeSlot: "hoy",
            };
        });
    await Trainings.bulkCreate(trainings);
};
const crearDesdeJsonAExerciseDb = async () => {
    const exercises = api[0].exercises.map((e) => {
        return {
            name: e.name,
            repetition: e.repetition,
            series: e.series,
            video: e.video,
            image: e.image,
            muscle: e.muscle,
        };
    });
    await Exercises.bulkCreate(exercises);
};

const crearDesdeJsonARutinesDb = async () => {
    const dataJsonRutines = api[0].rutines.map((rutine) => {
        return {
            name: rutine.name,
        };
    });
    await Rutines.bulkCreate(dataJsonRutines);
};

const crearDesdeJsonASubscriptionsDb = async () => {
    const subscriptions = api[0].subscriptions.map((sub) => {
        return {
            name: sub.name,
            price: sub.price || "$0.00",
            description: sub.description || "No Suscripto",
        };
    });

    await Subscriptions.bulkCreate(subscriptions);
};

const crearDesdeJsonARolsDb = async () => {
    const rols = api[0].employees
        .map((employee) => employee.rol)
        .filter(
            (val, index, self) => index === self.findIndex((ele) => ele === val)
        )
        .map((rol) => {
            return {
                name: rol,
            };
        });
    if (!rols.find((e) => e.name === "Cliente")) rols.push({ name: "Cliente" });
    await Rols.bulkCreate(rols);
};
// agregamos los datos de las tablas que tienen  relaciones con las tablas que ya contienen datos

const crearDesdeJsonALocacionsDb = async () => {
    api[0].locations.forEach(async (loc) => {
        const location = await Locacions.create({
            name: loc.name,
            phone: loc.phone,
            address: loc.address,
        });
        // const location = await Locacions.create({
        //     name: "AbsoluteFit - Sede Bernal",
        //     phone: "+23 17485278",
        //     address: "Primera Junta 512",
        // });

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
            name: client.name,
            phone: client.phone,
            email: client.email,
            password: client.password,
            active: client.active,
            image: client.image,
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
            name: employee.name,
            phone: employee.phone,
            email: employee.email,
            password: employee.password,
            active: typeof employee.active === "boolean" || true,
            image: employee.image,
        });

        const rol = api[0].employees[i].rol;
        const oneRutines = await Rutines.findOne();
        const oneRol = await Rols.findOne({ where: { name: rol } });
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

    await Owners.bulkCreate(owners);
};

const crearDesdeJsonAGymsDb = async () => {
    const gym = {
        name: api[0].name,
        email: api[0].email,
        phone: api[0].phone,
        image: api[0].image,
    };

    await Gyms.bulkCreate(gym);
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
};
