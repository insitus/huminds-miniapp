import { Card, CardBody, Image } from "@nextui-org/react";
import { buttonHapticFeedback, getUserProgress, SectionID } from "../WebApp/useWebapp";
import { useEffect, useState } from "react";

interface Props {
    thumbnail: string;
    upperTitle: string;
    title: string;
    underTitle: string;
    sectionNumber: number;
    onSelect: (nro: number) => void;
}

const pendingClassName = 'border-gray-100 border-1 shadow-md dark:bg-default-100/20 mb-4';
const completedClassName = 'border-none shadow-none bg-gray-100 dark:bg-default-100/90 mb-4';

export function ModuleCard({ thumbnail, title, underTitle, upperTitle, sectionNumber, onSelect }: Props) {
    const [cardClassName, setCardClassName] = useState(pendingClassName);

    useEffect(() => {
        const secId = sectionNumber.toString() as SectionID;
        getUserProgress(secId, (isCompleted: boolean) => {
            // console.log('** getUserProgress:', isCompleted);
            setCardClassName(isCompleted ? completedClassName : pendingClassName);
        });
    }, []);

    const onClick = () => {
        onSelect(sectionNumber);
    };

    return (
        <Card
            isPressable
            fullWidth
            className={cardClassName}
            // shadow="none"
            onPressStart={buttonHapticFeedback}
            onClick={onClick}
        >
            <CardBody>
                <div className="grid grid-cols-4 items-center p-1">

                    <div className="flex flex-col col-span-3 items-start justify-start">
                        <h2 className="text-medium font-medium" style={{ color: 'orange' }}>{upperTitle}</h2>
                        {/* dark: <h1 className="text-large font-semibold mt-0" style={{ color: 'rgba(255, 255, 255, 0.87)' }}>{title}</h1> */}
                        <h1 className="text-large font-medium mr-1" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>{title}</h1>
                        <h3 className="text-small text-foreground/80 mt-2" style={{ color: '#7f7e80' }}>{underTitle}</h3>
                    </div>

                    <div className="flex items-center justify-end">
                        <Image
                            alt="module thumbnail"
                            height={200}
                            width={200}
                            src={thumbnail}
                        />
                    </div>

                </div>
            </CardBody>
        </Card>
    )
}