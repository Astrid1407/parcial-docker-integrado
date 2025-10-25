import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.json({
    estudiante: {
      nombre: "Dalila Astrid Murcia Medina",
      expediente: "25759",
      codigo: "MM22-I04-001"
    }
  });
});

app.get("/health", (_req, res) => res.json({ status: "OK" }));

app.listen(PORT, () => console.log(`API escuchando en puerto ${PORT}`));
