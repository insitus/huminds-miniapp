import { CircularProgress } from "@nextui-org/react";

import { ModuleCard } from './ModuleCard';

// import humindsLogo from '../assets/huminds.png'; // dark theme
import humindsLogo from '../assets/huminds_black.png';
import instagramLogo from '../assets/socials/instagram-128.png';
import telegramLogo from '../assets/socials/telegram-128.png';
import youtubeLogo from '../assets/socials/youtube-128.png';

import thumbnail1 from '../assets/1-01.png';
import thumbnail2 from '../assets/2-01.png';
import thumbnail3 from '../assets/3-01.png';
import thumbnail4 from '../assets/4-01.png';
import thumbnail5 from '../assets/5-01.png';
import thumbnail6 from '../assets/6-01.png';
import thumbnail7 from '../assets/7-01.png';
import { useEffect, useState } from "react";
import { calculateProgress } from "../WebApp/useWebapp";

interface Props {
    onSelect: (nro: number) => void;
}

export function IndexPage({ onSelect }: Props) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        calculateProgress((result: number) => {
            setValue(result);
        });

        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            <div className='flex justify-center'>
                <a href="https://huminds.com" target="_blank">
                    <img src={humindsLogo} className="logo" alt="Huminds logo" />
                </a>
            </div>

            <h2 className="text-2xl font-medium flex text-center justify-center mt-10 ml-2 mr-2">
                Свобода от тревоги и страха
            </h2>

            <h1 className="text-gray-400 text-md font-medium flex text-center justify-center mt-4 mb-10">
                Как выйти из-под контроля эмоций и вернуть спокойствие, энергичность и уверенность
            </h1>

            <div style={{ position: 'absolute', top: 0, right: 0 }}>
                <CircularProgress
                    aria-label="Loading..."
                    // size="md"
                    value={value}
                    showValueLabel={true}

                    classNames={{
                        svg: "w-20 h-20",
                        indicator: "stroke-secondary",
                        track: "stroke-primary/10",
                        value: "text-md font-semibold text-primary",
                    }}
                    strokeWidth={4}
                />
            </div>

            <ModuleCard
                thumbnail={thumbnail1}
                upperTitle="Часть 1/7"
                title="Первый шаг: от теории к действиям"
                underTitle="8 мин"
                sectionNumber={1}
                onSelect={onSelect}
            />

            <ModuleCard
                thumbnail={thumbnail2}
                upperTitle="Часть 2/7"
                title="В чем истинный корень проблем: сужаем фокус"
                underTitle="11 мин"
                sectionNumber={2}
                onSelect={onSelect}
            />

            <ModuleCard
                thumbnail={thumbnail3}
                upperTitle="Часть 3/7"
                title="Страх как иллюзия: убираем барьеры к свободе"
                underTitle="13 мин"
                sectionNumber={3}
                onSelect={onSelect}
            />

            <ModuleCard
                thumbnail={thumbnail4}
                upperTitle="Часть 4/7"
                title="От борьбы к принятию: скрытая сила для победы над страхом"
                underTitle="9 мин"
                sectionNumber={4}
                onSelect={onSelect}
            />

            <ModuleCard
                thumbnail={thumbnail5}
                upperTitle="Часть 5/7"
                title="Аудио-практика “Отпускание тревоги и страха”"
                underTitle="24 мин"
                sectionNumber={5}
                onSelect={onSelect}
            />

            <ModuleCard
                thumbnail={thumbnail6}
                upperTitle="Часть 6/7"
                title="Интеграция урока: ответы на вопросы о методе отпускания"
                underTitle="11 мин"
                sectionNumber={6}
                onSelect={onSelect}
            />

            <ModuleCard
                thumbnail={thumbnail7}
                upperTitle="Часть 7/7"
                title="Следующий шаг: системный путь к самопознанию"
                underTitle="4 мин"
                sectionNumber={7}
                onSelect={onSelect}
            />

            <div className='flex justify-between m-20 mb-10'>

                <a href="https://www.instagram.com/olga.huminds/" target="_blank">
                    <img src={instagramLogo} alt="Huminds logo" width={40} />
                </a>

                <a href="https://t.me/olgasjourney" target="_blank">
                    <img src={telegramLogo} alt="Huminds logo" width={40} />
                </a>

                <a href="https://www.youtube.com/@huminds/videos" target="_blank">
                    <img src={youtubeLogo} alt="Huminds logo" width={40} />
                </a>

            </div>

        </div>
    )
}