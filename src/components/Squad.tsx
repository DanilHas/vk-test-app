import { SimpleCell, Group, Avatar } from "@vkontakte/vkui";
import { useState } from "react";
import { GroupType, User } from "../types/Group";
import Friend from "./Friend";

interface SquadProps {
  group: GroupType;
}

function Squad({ group }: SquadProps) {
  const [isFriendClicked, setFriendClicked] = useState(false);

  const handleClick = () => {
    setFriendClicked(!isFriendClicked);
  };

  return (
    <Group>
      <SimpleCell
        before={
          <Avatar size={100} style={{ backgroundColor: group.avatar_color }} />
        }
      >
        <SimpleCell>{group.name}</SimpleCell>
        <SimpleCell>
          {group.closed ? "Закрытая группа" : "Открытая группа"}
        </SimpleCell>
        <SimpleCell>{`Кол-во подписчиков: ${group.members_count}`}</SimpleCell>
        {group.friends && (
          <SimpleCell
            onClick={handleClick}
          >{`Кол-во друзей: ${group.friends.length}`}</SimpleCell>
        )}
        {isFriendClicked &&
          group.friends?.map((friend: User): JSX.Element => {
            return <Friend key={friend.first_name} friend={friend} />;
          })}
      </SimpleCell>
    </Group>
  );
}

export default Squad;
