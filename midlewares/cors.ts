// // middlewares/cors.ts
// import { NextApiResponse, NextApiRequest } from "next";

// type CorsMiddleware = (
//   req: NextApiRequest,
//   res: NextApiResponse<any>,
//   next: () => void
// ) => void;

// const corsMiddleware: CorsMiddleware = (req, res, next) => {
//   // Set the appropriate CORS headers to allow requests from any origin (*)
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

//   // Allow preflight requests (OPTION) without caching the result
//   if (req.method === "OPTIONS") {
//     res.status(200).end();
//     return;
//   }

//   // Continue processing the request
//   next();
// };

// export default corsMiddleware;
