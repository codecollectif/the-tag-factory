import type { RequestHandler } from "express";

import elementRepository from "./elementRepository";

declare global {
  namespace Express {
    interface Request {
      element: MyElement;
    }
  }
}

const convert: RequestHandler = async (req, res, next) => {
  const element = await elementRepository.read(+req.params.elementId);

  if (element == null) {
    res.sendStatus(req.method === "DELETE" ? 204 : 404);
  } else {
    req.element = element;

    next();
  }
};

export default { convert };
