import Image from "next/image";
import { useEffect, useState } from "react";

const BreakingNewsBar = () => {
  const [message,setMessage]=useState('')
  useEffect(() => {
    const socket = new WebSocket("ws://vps97897.serveur-vps.net/ws/urgent/");

    socket.addEventListener("open", (event) => {
      console.log("Connected to the server.", { event });
    });

    socket.addEventListener("message", (event) => {
      let parsed =JSON.parse(event.data)

      console.log(`Received message from server:`,parsed);
      setMessage(parsed?.message)
    });
  }, []);

  return (
    <>
    {message &&  <div
      className="alert alert-bar text-white bg-red text-white fade show position-absolute w-100 rounded-0 z-1"
      role="alert"
    >
      <div className="container d-flex justify-content-between align-items-center">
        <p> عاجل : {message}</p>
        <Image
          src="/images/icons/close_icon.svg"
          width={30}
          height={30}
          alt="close"
          data-bs-dismiss="alert"
          aria-label="Close"
        />
      </div>
    </div>}
    
    </>
   
  );
};

export default BreakingNewsBar;
