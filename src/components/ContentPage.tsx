import { Button } from "@nextui-org/react";

import audio from '../assets/audios/1_greetings.mp3';
// import { useEffect, useState } from "react";
import { Audioplayer } from "./AudioPlayer";
import { useState } from "react";
// import { BackIcon } from "./BackIcon";

interface Props {
    onBackPress: () => void;
}
export function ContentPage({ onBackPress }: Props) {

    const [storageResponse, setStorageResponse] = useState('');
    const [storage, setStorage] = useState('');

    // get window size
    // const [windowSize, setWindowSize] = useState({
    //     width: window.innerWidth,
    //     height: window.innerHeight
    // });

    // update window size
    // useEffect(() => {
    //     function handleResize() {
    //         setWindowSize({
    //             width: window.innerWidth,
    //             height: window.innerHeight
    //         });
    //     }

    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);


    const initData = () => {
        const data = (window as any).Telegram?.WebApp?.initData;
        if (!data) return '';

        return JSON.stringify(data, null, 2);
    }

    const initData2 = () => {
        const data = (window as any).Telegram?.WebAppInitData;
        if (!data) return '';

        return JSON.stringify(data, null, 2);
    }

    const initData3 = () => {
        const data = (window as any).Telegram?.WebAppUser;
        if (!data) return '';

        return JSON.stringify(data, null, 2);
    }

    const getStorage = () => {
        const data = (window as any).Telegram?.WebApp?.CloudStorage?.getItem('key');
        if (!data) return '';

        const jsonData = JSON.stringify(data, null, 2);
        setStorage(jsonData);
    }

    return (
        <div className="mt-4">
            <div className="flex justify-center mb-4">
                <h1 className="text-2xl font-medium">Добро пожаловать</h1>
            </div>

            <p>
                Добро пожаловать в Huminds! Этот практический урок создан специально для того, чтобы помочь вам разобраться в том, как устроены ваши эмоции, и начать освобождаться от энергии страха и тревоги.
            </p><p>
                Пройдя всю теорию и сделав аудио-практику, вы познакомитесь с мощным инструментом для отпускания негативных эмоций. Уже совсем скоро вы почувствуете прилив жизненной энергии, больше расслабленности, ясности ума и уверенности в себе.
            </p><p>
                Приготовьте бумагу и ручку. Делайте паузы по мере изучения материала, записывайте и применяйте новые знания к своей ситуации.
            </p><p>
                Переходите к следующему аудио. Мы начинаем!
            </p>

            <div className="flex justify-center  mt-6">
                <Audioplayer src={audio} />
            </div>

            <div className="mt-20 flex justify-center">
                <Button
                    onClick={onBackPress}
                // startContent={<BackIcon />}
                >
                    Назад
                </Button>
            </div>

            <Button onClick={() => {
                const mainButton = (window as any).Telegram.WebApp.MainButton;

                if (mainButton.isVisible) {
                    mainButton.hide();
                } else {
                    mainButton.show();
                }
            }} className="m-4">Main button</Button>

            <Button onClick={() => {
                (window as any).Telegram.WebApp.sendData({ data: '/start' })
            }} className="m-4">Test sending command start 1</Button>

            <Button onClick={() => {
                (window as any).Telegram.WebApp.sendData('/start');
            }} className="m-4">Test sending command start 2</Button>

            <Button onClick={() => {
                (window as any).Telegram.WebApp.requestContact(function (result: any) {
                    if (result) {
                        (window as any).Telegram.WebApp.showAlert('Contact granted');
                    } else {
                        (window as any).Telegram.WebApp.showAlert('Contact denied');
                    }
                });
            }} className="m-4">Test request contact</Button>


            <Button onClick={() => {
                (window as any).Telegram.WebApp.showConfirm('confirmation message here');
            }} className="m-4">Test showConfirm</Button>


            <Button onClick={() => {
                (window as any).Telegram.WebApp.HapticFeedback.impactOccurred('soft');
            }} className="m-4">Test Haptic Soft</Button>


            <Button onClick={() => {

                const nowString = new Date().toISOString();

                (window as any).Telegram.WebApp.CloudStorage.setItem('key', nowString, (e: any) => {
                    setStorageResponse(JSON.stringify(e, null, 2))
                });

            }} className="m-4">Test Storage</Button>


            <Button onClick={() => {
                getStorage();
            }} className="m-4">Show storage data</Button>

            <div className="flex justify-center mt-3">
                <h1>{'Storage data: '}</h1>
                <p>{storage}</p>
            </div>

            <div className="flex justify-center mt-3">
                <h1>{'Storage response: '}</h1>
                <p>{storageResponse}</p>
            </div>

            <div className="flex justify-center mt-3">
                <p>{initData()}</p>

                <p>{initData2()}</p>

                <p>{initData3()}</p>
            </div>

        </div>
    )
}
