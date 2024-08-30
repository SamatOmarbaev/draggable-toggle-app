import { memo } from "react";
import { Switch } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import { SettingProps, ToggleProps } from "../types";

import styles from "./styles.module.css";

export const Setting = memo(
  ({
    title,
    isChecked,
    onToggleChange,
  }: SettingProps & ToggleProps) => (
    <div
      className={styles.setting}
    >
      <MenuOutlined />
      <span>{title}</span>
      <Switch checked={isChecked} onChange={onToggleChange} />
    </div>
  )
);
