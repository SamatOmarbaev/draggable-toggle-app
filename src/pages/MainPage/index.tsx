import { useNavigate } from "react-router-dom";
import { Button } from "antd";

import { MyCard } from "../../components/Card";
import { useAppSelector } from "../../hooks/useAppSelector";
import { selectTogglesState } from "../../store/toggles/selectors";
import { TogglesState } from "../../store/toggles/types";
import { SETTINGS_LIST } from "../WidgetPage/components/settings-list/constants";

export const MainPage = () => {
  const toggles = useAppSelector(selectTogglesState);
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/widgets')
  }

  return (
    <>
      {toggles.order.map((id) => {
        if (toggles[id as keyof TogglesState]) {
          return (
            <MyCard
              text={SETTINGS_LIST.find(setting => setting.id === id)?.title ?? ''}
              key={id}
            />
          );
        }
        return null;
      })}
      <Button
        onClick={handleClick}
        type="dashed"
      >
        Настроить виджеты
      </Button>
    </>
  );
};
