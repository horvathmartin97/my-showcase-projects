import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import listDocs from "./List/listDocs.json";
import itemDocs from "./Item/itemDocs.json";
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Shopping List API",
      version: "1.0.0",
      description: "Shopping List backend API docs",
    },
    paths: { ...listDocs.paths, ...itemDocs.paths },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./**/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

export default function setupSwagger(app: Express): void {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
