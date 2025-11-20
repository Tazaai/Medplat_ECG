import express from "express";
import cors from "cors";
import ecgRoutes from "./routes/ecg_api.mjs";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/ecg", ecgRoutes);

app.listen(8081, () => console.log("ECG backend running on port 8081"));
