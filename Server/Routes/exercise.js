import express from "express";
import { getInfos, getInfo, addInfo, deleteInfo } from "../database.js";
import Controller from "./exercise.js";
const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    res.send(await getInfos());
  })
  .post(async (req, res) => {
    const { name, age } = req.body;
    const post = await addInfo(name, age);
    res.send(await getInfo(name, age));
  });

router
  .route("/:id")
  .get(async (req, res) => {
    res.send(await getInfo(+req.params.id));
  })
  .delete(async (req, res) => {
    await deleteInfo(+req.params.id);
    res.json(await getInfo());
  });
//   .patch(async (req, res) => {
//     const [Info] = await getInfo(+req.body.id);
//     let { name, age } = req / body;
//     name ? (name = name) : ({ name } = Info);
//     age ? (age = age) : ({ age } = age);
//     console.log(Info(1));
//     await updateInfo(name, age, +req.params.id);
//     res.json(await getInfos(1));
//   });

export default router;
