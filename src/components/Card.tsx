import { Card } from 'antd';

interface CardProps {
    text: string;
}

export const MyCard = ({ text }: CardProps) => {
    return (
        <Card
            title={`Название блока - ${text}`}
            style={{ border: ' 1px solid #cecece' }}
        >
            {text}
        </Card>
    )
}
