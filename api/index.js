// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
import axios from "axios";

const url = "http://localhost:3001/"; // Add the protocol (http://) here

const api = axios.create({
  baseURL: url,
});

export default api;
