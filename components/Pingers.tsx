import React, { useState, useEffect } from "react";
import {ListPingers} from '../components/ListPingers';
import { Pinger } from "../interfaces";
import { PingerService } from "../pages/api/pingers";

export const Pingers = () => {

  const [pingers, setPingers]:[Pinger[], any] = useState([]);
  console.log(pingers);
  useEffect(() => {
    const loadPingers = async () => {
      const items = await PingerService.list()  
      setPingers(items);
    }
    
    loadPingers();
  }, [])

  return (
    <>
      <ListPingers items={pingers} />
    </>
  )
}