import { GroupType } from "../types/Group";
import AvatarFilter from "./AvatarFilter";
import PrivateFilter from "./PrivateFilter";

interface FiltersProps {
  groupsData: GroupType[] | undefined;
}

function Filters({ groupsData }: FiltersProps) {
  return (
    <>
      <PrivateFilter />
      <AvatarFilter groupsData={groupsData} />
    </>
  );
}

export default Filters;
