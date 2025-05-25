import { Router } from "express";

const router = Router();

/* ************************************************************************ */

import elementActions from "./elementActions";
import elementParamConverter from "./elementParamConverter";
import elementValidator from "./elementValidator";

import authActions from "../auth/authActions";

/* ************************************************************************ */

const BASE_PATH = "/api/elements";
const ELEMENT_PATH = "/api/elements/:itemId";

router.param("itemId", elementParamConverter.convert);

/* ************************************************************************ */

router.get(BASE_PATH, elementActions.browse);
router.post(BASE_PATH, elementValidator.validate, elementActions.add);

/* ************************************************************************ */

router.use(BASE_PATH, authActions.verifyAccessToken); // Authentication Wall

/* ************************************************************************ */

router.route(ELEMENT_PATH).delete(elementActions.destroy);

/* ************************************************************************ */

export default router;
