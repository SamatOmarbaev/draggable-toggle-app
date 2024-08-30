export interface SettingProps {
  id: string;
  title: string;
}

export type ToggleProps = {
  isChecked: boolean;
  onToggleChange: () => void;
};
