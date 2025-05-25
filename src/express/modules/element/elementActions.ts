import type { RequestHandler } from "express";

import elementRepository from "./elementRepository";

/* ************************************************************************ */

const browse: RequestHandler = async (_req, res) => {
  const items = await elementRepository.readAll();

  res.json(items);
};

/* ************************************************************************ */

const add: RequestHandler = async (req, res) => {
  const insertId = await elementRepository.create(req.body);

  res.status(201).json({ insertId });
};

/* ************************************************************************ */

const destroy: RequestHandler = async (req, res) => {
  await elementRepository.softDelete(req.element.id);

  res.sendStatus(204);
};

/* ************************************************************************ */

export default {
  browse,
  add,
  destroy,
};
