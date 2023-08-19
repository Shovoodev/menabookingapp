import express from "express";
import { createHotel, deleteHotel, getHotels, getallHotels, updateHotel } from "../../controllers/hotelcontroler.js";

const router = express.Router();

//create
router.post("/" ,createHotel)
//update
router.put("/:id" ,updateHotel)
//delete
router.delete("/:id" ,deleteHotel)
//get
router.get("/:id" ,getHotels)
//get all
router.get("/" ,getallHotels)

export default router;