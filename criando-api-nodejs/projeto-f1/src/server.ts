import cors from "@fastify/Cors";
import fastify from "fastify";

const server = fastify({
  logger: true,
});

// server.register(cors, {
//   origin: ["www.dio.me", "www.luan.br.com"],
// });
server.register(cors, {
  origin: "*",
  methods: ["GET", "POST"]
});

const teams = [
  { id: 1, name: "McLaren", base: "Working, United Kingdom" },
  { id: 2, name: "Ferrari", base: "Maranello, Italy" },
  { id: 3, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 4, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
  { id: 5, name: "Alpine F1 Team", base: "Enstone, United Kingdom" },
];
const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Sergio Pérez", team: "Red Bull Racing" },
  { id: 3, name: "Charles Leclerc", team: "Ferrari" },
  { id: 4, name: "Carlos Sainz Jr.", team: "Ferrari" },
  { id: 5, name: "Lewis Hamilton", team: "Mercedes" },
  { id: 6, name: "George Russell", team: "Mercedes" },
  { id: 7, name: "Lando Norris", team: "McLaren" },
  { id: 8, name: "Oscar Piastri", team: "McLaren" },
  { id: 9, name: "Fernando Alonso", team: "Aston Martin" },
  { id: 10, name: "Lance Stroll", team: "Aston Martin" },
  { id: 11, name: "Pierre Gasly", team: "Alpine" },
  { id: 12, name: "Esteban Ocon", team: "Alpine" },
  { id: 13, name: "Alexander Albon", team: "Williams" },
  { id: 14, name: "Logan Sargeant", team: "Williams" },
];

server.get("/teams", async (request, response) => {
  response.type("application/json").code(200);

  return teams;
});

server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200);

  return drivers;
});

interface DriverParamsModel {
  id: string;
}
server.get<{ Params: DriverParamsModel }>(
  "/drivers/:id",
  async (request, response) => {
    const id = parseInt(request.params.id);
    const driverFind = drivers.find((value) => value.id == id);
    if (!driverFind) {
      response.type("application/json").code(404);
      return { message: "Driver not found" };
    } else {
      response.type("application/json").code(200);
      return driverFind;
    }
  }
);

server.listen({ port: 3333 }, () => {
  console.log(`rodando na porta 3333`);
});
