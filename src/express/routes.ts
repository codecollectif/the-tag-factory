import express, { Router } from "express";

const router = Router().use(express.json());

/* ************************************************************************ */

import authRoutes from "./modules/auth/authRoutes";

router.use(authRoutes);

/* ************************************************************************ */

import elementRoutes from "./modules/element/elementRoutes";

router.use(elementRoutes);

/* ************************************************************************ */

import userRoutes from "./modules/user/userRoutes";

router.use(userRoutes);

/* ************************************************************************ */

export default router;
