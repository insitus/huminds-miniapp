import { Card, CardBody, Image } from "@nextui-org/react";

interface Props {
    thumbnail: string;
    upperTitle: string;
    title: string;
    underTitle: string;
    onSelect: () => void;
}
export function ModuleCard({ thumbnail, title, underTitle, upperTitle, onSelect }: Props) {
    return (
        <Card
            isPressable
            fullWidth
            className="border-none bg-background/60 dark:bg-default-100/50 mb-4"
            shadow="sm"
            onClick={onSelect}
        >
            <CardBody>
                <div className="grid grid-cols-4 items-center p-2">

                    <div className="flex flex-col col-span-3">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-0">
                                <h2 className="text-medium font-medium">{upperTitle}</h2>
                                <h1 className="text-large font-semibold mt-2">{title}</h1>
                                <h3 className="text-small text-foreground/80 mt-1">{underTitle}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center col-span-1">
                        <Image
                            alt=""
                            height={200}
                            width={200}
                            shadow="md"
                            src={thumbnail}
                        />
                    </div>

                </div>
            </CardBody>
        </Card>
    )
}