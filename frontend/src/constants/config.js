let serverUrl = import.meta.env.VITE_SERVER || "";

// In remote production environments, ignore localhost to prevent ERR_CONNECTION_REFUSED
if (
  typeof window !== "undefined" &&
  window.location.hostname !== "localhost" &&
  window.location.hostname !== "127.0.0.1" &&
  (serverUrl.includes("localhost") || serverUrl.includes("127.0.0.1"))
) {
  serverUrl = "";
}

export const server = serverUrl;
