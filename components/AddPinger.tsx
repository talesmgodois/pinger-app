import { useState } from "react";
import Button from "@material-ui/core/Button";
import { Pinger } from "../interfaces";

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
  const [online, setOnline] = useState(false);

  const addPinger = () => {
    console.log(pingers);
    setPingers((state: Pinger[]) => {
      return [
        ...state,
        {
          url,
          name,
          online,
        },
      ];
    });
  };

  const handleInputChange = (ev: any) => {
    switch (ev.target.name) {
      case "name":
        setName(ev.target.value);
        break;
      case "url":
        setUrl(ev.target.value);
        break;
      case "online":
        setOnline(ev.target.value);
        break;
    }
  };
  return (
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
  );
};
