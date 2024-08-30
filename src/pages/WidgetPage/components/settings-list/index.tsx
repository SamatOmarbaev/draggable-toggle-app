import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Reorder } from "framer-motion";

import { Setting } from "./setting";
import { SETTINGS_LIST } from "./constants";
import { ButtonSave } from "./button-save";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { selectTogglesState } from "../../../../store/toggles/selectors";
import { TogglesState } from "../../../../store/toggles/types";
import { setOrder, setToggles } from "../../../../store/toggles/toggles";

import styles from "./styles.module.css";

export const SettingsList = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const initToggles = useAppSelector(selectTogglesState);

  const [isSaveButtonActive, setIsSaveButtonActive] = useState(true);
  const [localToggles, setLocalToggles] = useState<TogglesState>(initToggles);

  const handleToggleChange = useCallback((id: keyof TogglesState) => {
    setLocalToggles((prev) => ({ ...prev, [id]: !prev[id] }));
    setIsSaveButtonActive(false);
  }, []);

  const handleSaveSettings = useCallback(() => {
    dispatch(setToggles(localToggles));
    dispatch(setOrder(localToggles.order));
    setIsSaveButtonActive(true);
    navigate("/");
  }, [dispatch, localToggles, navigate]);

  const handleReorder = (newOrder: string[]) => {
    setLocalToggles((prev) => ({
      ...prev,
      order: newOrder
    }));
    setIsSaveButtonActive(false);
  };

  const findTitle = (id: string) => SETTINGS_LIST.find(setting => setting.id === id)?.title ?? '';

  return (
    <>
      <Reorder.Group values={localToggles.order} onReorder={handleReorder} className={styles.card}>
        {localToggles.order.map((id) => (
          <Reorder.Item value={id} key={id}>
            <Setting
              id={id}
              title={findTitle(id)}
              isChecked={localToggles[id as keyof Omit<TogglesState, 'order'>]}
              onToggleChange={() => handleToggleChange(id as keyof TogglesState)}
            />
          </Reorder.Item>
        ))}
      </Reorder.Group>
      <ButtonSave
        saveChanges={handleSaveSettings}
        isDisabled={isSaveButtonActive}
      />
    </>
  );
};
