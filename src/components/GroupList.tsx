import { GroupType } from "../types/Group";
import Squad from "./Squad";

interface GroupListProps {
  groupsData: GroupType[] | undefined;
}

function GroupList({ groupsData }: GroupListProps) {
  return (
    <>
      {groupsData?.map((group) => {
        return <Squad key={group.id} group={group} />;
      })}
    </>
  );
}

export default GroupList;
