import { ModuleCard } from './ModuleCard';

// import humindsLogo from '../assets/huminds.png';
import humindsLogo from '../assets/huminds_black.png';
import thumbnail1 from '../assets/1-01.png';
import thumbnail2 from '../assets/2-01.png';
import thumbnail3 from '../assets/3-01.png';
import thumbnail4 from '../assets/4-01.png';
import thumbnail5 from '../assets/5-01.png';
import thumbnail6 from '../assets/6-01.png';
import thumbnail7 from '../assets/7-01.png';

interface Props {
    onSelect: () => void;
}

export function IndexPage({ onSelect }: Props) {
    return (
        <>
            <div className='flex justify-center'>
                <a href="https://huminds.com" target="_blank">
                    <img src={humindsLogo} className="logo" alt="Huminds logo" />
                </a>
            </div>


            <h2 className="text-2xl font-medium flex text-center mt-10 ml-2 mr-2">
                {/* Практический урок от Huminds */}
                Как выйти из-под контроля эмоций и вернуть спокойствие, энергичность и уверенность

            </h2>

            <h1 className="text-gray-400 text-large font-medium flex justify-center mt-3 mb-10">
                Практика по освобождению от страха
                {/* Как выйти из-под контроля эмоций и вернуть спокойствие, энергичность и уверенность: практика по освобождению от тревоги и страха */}
            </h1>




            <ModuleCard
                thumbnail={thumbnail1}
                upperTitle="Часть 1/7"
                title="Добро пожаловать!"
                underTitle="8 мин"
                onSelect={onSelect}
            />

            <ModuleCard
                thumbnail={thumbnail2}
                upperTitle="Часть 2/7"
                title="В чем корень наших проблем"
                underTitle="11 мин"
                onSelect={onSelect}
            />

            <ModuleCard
                thumbnail={thumbnail3}
                upperTitle="Часть 3/7"
                title="Развеиваем главный миф о негативных эмоциях"
                underTitle="13 мин"
                onSelect={onSelect}
            />

            <ModuleCard
                thumbnail={thumbnail4}
                upperTitle="Часть 4/7"
                title="Что такое страх и как его преодолеть"
                underTitle="9 мин"
                onSelect={onSelect}
            />

            <ModuleCard
                thumbnail={thumbnail5}
                upperTitle="Часть 5/7"
                title="Практика по освобождению от тревоги и страха"
                underTitle="24 мин"
                onSelect={onSelect}
            />

            <ModuleCard
                thumbnail={thumbnail6}
                upperTitle="Часть 6/7"
                title="Вопросы и ответы "
                underTitle="11 мин"
                onSelect={onSelect}
            />

            <ModuleCard
                thumbnail={thumbnail7}
                upperTitle="Часть 7/7"
                title="Следующий шаг"
                underTitle="4 мин"
                onSelect={onSelect}
            />
        </>
    )
}