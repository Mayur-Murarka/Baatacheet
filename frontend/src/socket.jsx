import { createContext, useMemo, useContext } from "react";
import io from "socket.io-client";
import { server } from "./constants/config";

const SocketContext = createContext();

const getSocket = () => useContext(SocketContext);

const SocketProvider = ({ children }) => {
  const socket = useMemo(() => {
    const socketUrl =
      server || (typeof window !== "undefined" ? window.location.origin : undefined);
    return io(socketUrl, {
      withCredentials: true,
      reconnectionAttempts: 5,
      timeout: 10000,
    });
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export { SocketProvider, getSocket };
