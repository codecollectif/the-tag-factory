import type { RequestHandler } from "express";
import { type ZodError, z } from "zod";

const itemDTOSchema = z.object({
  id: z.number().optional(),
  text: z.string().max(255),
});

const validate: RequestHandler = (req, res, next) => {
  try {
    req.body = itemDTOSchema.parse({
      ...req.body,
    });

    next();
  } catch (err) {
    res.status(400).json((err as ZodError).issues);
  }
};

export default { validate };
