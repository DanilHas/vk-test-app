import { CustomSelect, FormItem } from "@vkontakte/vkui";
import { SelectOptions } from "../types/Group";

function PrivateFilter() {
  const selectOptions: SelectOptions[] = [
    { label: "Все", value: "Все" },
    { label: "Открытые", value: "Открытые" },
    { label: "Закрытые", value: "Закрытые" },
  ];
  return (
    <FormItem top="Приватность групп">
      <CustomSelect placeholder="Не выбрана" options={selectOptions} />
    </FormItem>
  );
}

export default PrivateFilter;
