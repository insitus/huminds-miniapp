import { Button } from "@nextui-org/react";
import { AudioPlayer } from "./AudioPlayer/AudioPlayer";

interface Props {
    onBackPress: () => void;
}
export function ContentPage({ onBackPress }: Props) {
    return (
        <div className="mt-4">
            <div className="flex justify-center mb-4">
                <h1 className="text-2xl font-medium">Dobro pozhalobat</h1>
            </div>

            <p>
                Добро пожаловать в Huminds! Этот практический урок создан специально для того, чтобы помочь вам разобраться в том, как устроены ваши эмоции, и начать освобождаться от энергии страха и тревоги.

                Пройдя всю теорию и сделав аудио-практику, вы познакомитесь с мощным инструментом для отпускания негативных эмоций. Уже совсем скоро вы почувствуете прилив жизненной энергии, больше расслабленности, ясности ума и уверенности в себе.
                Приготовьте бумагу и ручку. Делайте паузы по мере изучения материала, записывайте и применяйте новые знания к своей ситуации.
                Переходите к следующему аудио. Мы начинаем!
            </p>

            <div className="flex justify-center  mt-6">
                <AudioPlayer />
            </div>

            <div className="mt-20">
                <Button onClick={onBackPress}>
                    Go back
                </Button>
            </div>

        </div>
    )
}
