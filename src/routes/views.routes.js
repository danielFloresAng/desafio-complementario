import { Router } from "express";

import data from "../data.js";
import config from "../config.js";

const router = new Router()

router.get('/',async(req,res)=>{
  try{
    res.status(200).send({status: 'ok', origin: config.SERVER, playload:data})
  }
  catch{
    res.status(500).send({status: 'error', origin: config.SERVER, error:'error'})
  }
})
export default router