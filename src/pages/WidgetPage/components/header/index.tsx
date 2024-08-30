import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

export const Header = () => {
  const navigate = useNavigate();

  const handleClickBackButton = () => {
    navigate("/");
  };

  return (
    <header style={{ display: 'flex', alignItems: 'center' }}>
      <ArrowLeftOutlined onClick={handleClickBackButton} />
      <span style={{ flex: 1, textAlign: 'center' }}>Настроить виджеты</span>
    </header>
  );
};
