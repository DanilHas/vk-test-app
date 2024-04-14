import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";

async function enableMocking() {
  if (process.env.NODE_ENV === "development") {
    const { worker } = await import("./mocks/browser");

    return worker.start();
  }
}

const container = document.getElementById("root");
const root = createRoot(container!);

enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <ConfigProvider>
        <AdaptivityProvider>
          <App />
        </AdaptivityProvider>
      </ConfigProvider>
    </React.StrictMode>
  );
});
