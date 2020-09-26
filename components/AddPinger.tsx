import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Pinger } from "../interfaces";
import { PingerService } from "../pages/api/pingers";
import { LinearProgress } from "@material-ui/core";

export const PingerInput = (props: any) => {
  return (
    <input
      {...props}
      placeholder={props.placeholder}
      className={"pinger-input"}
    />
  );
};

export const AddPinger = () => {
  const [pingers, setPingers]: [Pinger[], any] = useState([]);
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [isOnline, setIsOnline] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const addPinger = async () => {
    let storedPinger;
    const pinger = {
      url, 
      name, 
      isOnline, 
      isActive
    } 
    try {
      setIsLoading(true);
      storedPinger = await PingerService.create(pinger);
      clean();
      console.log(storedPinger);
    }catch(e) {
      console.error(e);
    }finally {
      setIsLoading(false);
    }
  };

  const clean = () => {
    setIsActive(true);
    setIsOnline(true);
    setName('');
    setUrl('');
  }

  const handleInputChange = (ev: any) => {
    switch (ev.target.name) {
      case "name":
        setName(ev.target.value);
        break;
      case "url":
        setUrl(ev.target.value);
        break;
      case "online":
        setIsOnline(ev.target.value);
        break;
    }
  };

  const Loading = () => {
    return isLoading? <LinearProgress />: null
  }

  return (
    <>
    <Loading />
    <form className={"column content"}>
      <h1>Let's start pinging your website or API</h1>
      <PingerInput
        name={"name"}
        placeholder={"Pinger Name"}
        value={name}
        onChange={handleInputChange}
      />
      <PingerInput
        name={"url"}
        placeholder={"Url"}
        value={url}
        onChange={handleInputChange}
      />

      <div className={"row"} style={{ justifyContent: "center" }}>
        <Button
          variant={"contained"}
          color={"primary"}
          onClick={addPinger}
          style={{ marginTop: 5, width: "33%" }}
        >
          Ping
        </Button>
      </div>
    </form>
    </>

  );
};
