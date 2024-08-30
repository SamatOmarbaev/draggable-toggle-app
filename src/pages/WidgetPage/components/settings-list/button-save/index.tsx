import { memo } from "react";
import { Button } from "antd";

type ButtonSaveProps = {
  saveChanges: () => void;
  isDisabled?: boolean;
};

export const ButtonSave = memo(({ saveChanges, isDisabled }: ButtonSaveProps) => (
  <>
    <Button
      onClick={saveChanges}
      disabled={isDisabled}
      type="primary"
    >
      Сохранить
    </Button>
  </>
));
