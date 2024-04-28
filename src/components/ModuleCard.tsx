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
            style={{ backgroundColor: '#e7e7e7' }}
        // style={{ backgroundColor: 'rgb(55,55,55)' }}

        // #e8e8e8
        // #e9e9e9
        // #ffffff (pure white)
        // #eae9e8
        // #eaeaea
        // #f0f0f0
        // #ebebeb
        // #eceae8
        // #ececec
        // #e7e7e7



        >
            <CardBody>
                <div className="grid grid-cols-4 items-center p-1">

                    <div className="flex flex-col col-span-3 items-start justify-start">
                        <h2 className="text-medium font-medium" style={{ color: 'orange' }}>{upperTitle}</h2>
                        {/* dark: <h1 className="text-large font-semibold mt-0" style={{ color: 'rgba(255, 255, 255, 0.87)' }}>{title}</h1> */}
                        <h1 className="text-large font-semibold mt-0" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>{title}</h1>
                        <h3 className="text-small text-foreground/80 mt-2" style={{ color: '#7f7e80' }}>{underTitle}</h3>
                    </div>

                    <div className="flex items-center justify-end">
                        <Image
                            alt="module thumbnail"
                            height={200}
                            width={200}
                            // shadow="md"
                            src={thumbnail}
                        />
                    </div>

                </div>
            </CardBody>
        </Card>
    )
}