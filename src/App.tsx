import { useEffect, useState } from "react";
import "./App.css";
import {
  AppRoot,
  SplitLayout,
  PanelHeader,
  usePlatform,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { GetGroupsResponse } from "./types/Group";
import GroupList from "./components/GroupList";
import Filters from "./components/Filters";

function App() {
  const [groupsData, setGroupsData] = useState<GetGroupsResponse | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/groups");
        const groups = await response.json();
        setGroupsData({ result: 1, data: groups });
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const platform = usePlatform();

  return (
    <AppRoot>
      <SplitLayout
        header={platform !== "vkcom" && <PanelHeader delimiter="none" />}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Filters groupsData={groupsData?.data} />
        <GroupList groupsData={groupsData?.data} />
      </SplitLayout>
    </AppRoot>
  );
}

export default App;
