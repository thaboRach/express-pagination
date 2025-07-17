import express from "express";
import cors from "cors";
import { productRouter } from "./routes";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/product", productRouter);

app.listen(port, () => {
  console.log(`🚀 Server ready at: http://localhost:${port}`);
});
