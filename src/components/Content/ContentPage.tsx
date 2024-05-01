import { Button, Checkbox } from "@nextui-org/react";

import { Audioplayer } from "../AudioPlayer";
// import iconBack from '../../../public/back.svg';

import { contentMap } from './ContentMap';
import { useEffect, useState } from "react";
import { buttonHapticFeedback, getUserProgress, isCompleteHapticFeedback, isNotCompleteHapticFeedback, SectionID, setUserProgress } from "../../WebApp/useWebapp";

interface Props {
    sectionNumber: number;
    onBackPress: () => void;
}


export function ContentPage({ sectionNumber, onBackPress }: Props) {
    const [isCompleted, setIsCompleted] = useState(false);

    const index = sectionNumber - 1;
    const content = contentMap[index];
    const sectionId: SectionID = (sectionNumber.toString() as SectionID);

    useEffect(() => {
        window.scrollTo(0, 0);

        const updateLocalStorage = (wasCompleted: boolean) => {
            setIsCompleted(wasCompleted);
        }

        getUserProgress(sectionId, updateLocalStorage);
    }, []);

    const onIsCompletedChange = (isChecked: boolean) => {

        if (isChecked) {
            isCompleteHapticFeedback();
        } else {
            isNotCompleteHapticFeedback();
        }

        setIsCompleted(isChecked);
        setUserProgress(sectionId, isChecked);
    }

    return (
        <div className="mt-4">
            {content.Title}
            {content.Content}


            {content.audio && (
                <div className="flex justify-center  mt-10">
                    <Audioplayer src={content.audio} />
                </div>
            )}

            <div className="mt-20 mb-5 flex justify-center">
                <Checkbox isSelected={isCompleted} color="default" size="lg" onValueChange={onIsCompletedChange}>Пройдено</Checkbox>
            </div>

            <div className=" mb-20 flex justify-center"
                onClick={() => {
                    buttonHapticFeedback();
                    onBackPress();
                }}>
                <Button
                    onPressStart={buttonHapticFeedback}
                    color="secondary" variant="bordered"
                    onClick={onBackPress}
                // startContent={<Image width={12} height={12} src={iconBack} />}
                >
                    Назад
                </Button>
            </div>

        </div>
    )
}
