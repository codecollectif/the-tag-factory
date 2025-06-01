import type { RequestHandler, Response } from "express";

import elementRepository from "./elementRepository";

const clients = [] as Response[];

/* ************************************************************************ */

const browse: RequestHandler = async (_req, res) => {
  const items = await elementRepository.readAll();

  res.json(items);
};

/* ************************************************************************ */

const subscribe: RequestHandler = async (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  res.write("hello, world!");

  clients.push(res);

  req.on("close", () => {
    res.end();

    clients.splice(clients.indexOf(res), 1);
  });
};

/* ************************************************************************ */

const add: RequestHandler = async (req, res) => {
  const insertId = await elementRepository.create(req.body);

  for (const client of clients) {
    client.write("event: newElement\n");
    client.write(`data: ${JSON.stringify({ ...req.body, id: insertId })}\n\n`);
  }

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
  subscribe,
  add,
  destroy,
};
