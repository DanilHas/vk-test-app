import { CustomSelect, FormItem } from "@vkontakte/vkui";

function AvatarFilter() {
  return (
    <FormItem top="Цвет аватарки группы">
      <CustomSelect
        placeholder="Не выбран"
        options={[{ label: "all", value: "all" }]}
      />
    </FormItem>
  );
}

export default AvatarFilter;
