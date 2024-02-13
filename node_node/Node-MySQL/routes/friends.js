import express from "express";
import {
  getFriends,
  getFriend,
  addFriend,
  deleteFriend,
} from "../Controller/database.js";
import Controller from "../Controller/friends.js";
const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    res.send(await getFriends());
  })
  .post(async (req, res) => {
    const { name, age } = req.body;
    const post = await addFriend(name, age);
    res.send(await getFriend(name, age));
  });

router
  .route("/:id")
  .get(async (req, res) => {
    res.send(await getFriend(+req.params.id));
  })
  .delete(async (req, res) => {
    await deleteFriend(+req.params.id);
    res.json(await getFriend());
  })
  .patch(async (req, res) => {
    const [friend] = await getFriend(+req.body.id);
    let { name, age } = req / body;
    name ? (name = name) : ({ name } = friend);
    age ? (age = age) : ({ age } = age);
    console.log(friend(1));
    await updateFriend(name, age, +req.params.id);
    res.json(await getFriends(1));
  });

export default router;
