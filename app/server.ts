// // server.ts
// import express, { Request, Response } from "express";
// import next from "next";
// import corsMiddleware, { CorsMiddleware } from "@/midlewares/cors";

// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();

//   // Apply the custom CORS middleware to all routes
//   server.use(corsMiddleware as CorsMiddleware);

//   // Handle all other Next.js routes
//   server.all("*", (req: Request, res: Response) => {
//     return handle(req, res);
//   });

//   server.listen(3000, (err: any) => {
//     if (err) throw err;
//     console.log("> Ready on http://localhost:3000");
//   });
// });
