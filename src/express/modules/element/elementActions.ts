import type { RequestHandler, Response } from "express";

import elementRepository from "./elementRepository";

const subscribers = [] as Response[];

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

  res.write("data: hello, world!\n\n");

  subscribers.push(res);

  req.on("close", () => {
    res.end();

    subscribers.splice(subscribers.indexOf(res), 1);
  });
};

/* ************************************************************************ */

const add: RequestHandler = async (req, res) => {
  const insertId = await elementRepository.create(req.body);

  for (const subscriber of subscribers) {
    subscriber.write("event: newElement\n");
    subscriber.write(
      `data: ${JSON.stringify({ ...req.body, id: insertId })}\n\n`,
    );
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
