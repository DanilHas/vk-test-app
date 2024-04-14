import { Group, SimpleCell } from "@vkontakte/vkui";
import { User } from "../types/Group";

interface FriendProps {
  friend: User;
}

function Friend({ friend }: FriendProps) {
  return (
    <Group>
      <SimpleCell>
        {friend.first_name} {friend.last_name}
      </SimpleCell>
    </Group>
  );
}

export default Friend;
