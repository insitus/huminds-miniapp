import { Button } from "@nextui-org/react";

interface Props {
    onBackPress: () => void;
}
export function ContentPage({ onBackPress }: Props) {
    return (
        <div>
            <h1>Content Page</h1>

            <div className="m-40">
                <Button onClick={onBackPress}>
                    Go back
                </Button>
            </div>

        </div>
    )
}
