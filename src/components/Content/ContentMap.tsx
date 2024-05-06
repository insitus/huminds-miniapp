import { Button, Image, Link } from '@nextui-org/react';
import { ContentMap } from '../../../types/types';

import srcAudio1 from '../../assets/audios/1_greetings.mp3';
import srcAudio2 from '../../assets/audios/2_source_of_problems.mp3';
import srcAudio3 from '../../assets/audios/3_nature_of_negativity.mp3';
import srcAudio4 from '../../assets/audios/4_nature_of_fear.mp3';
import srcAudio5 from '../../assets/audios/5_practice.mp3';
import srcAudio6 from '../../assets/audios/6_qa.mp3';




import howToSit from '../../assets/how_to_sit.png';
import imageReview from '../../assets/review.png';

import videoKatia from '../../assets/videos/katia.mp4';
import videoValya from '../../assets/videos/valya.mp4';
import videoReviews from '../../assets/videos/reviews.mp4';
import videoInvitation from '../../assets/videos/invitation.mp4';

import { Audioplayer } from '../AudioPlayer';

import coverKatia from '../../assets/videos/katia.jpg';
import coverValya from '../../assets/videos/valya.jpg';
import coverInvitation from '../../assets/videos/invitation.jpg';
import coverReviews from '../../assets/videos/reviews.jpg';
import { buttonHapticFeedback, openInstanView } from '../../WebApp/useWebapp';


const audio1 = { artist: 'Huminds', title: 'Приветствие', src: srcAudio1 };
const audio2 = { artist: 'Huminds', title: 'Корень проблем', src: srcAudio2 };
const audio3 = { artist: 'Huminds', title: 'Развеиваем миф', src: srcAudio3 };
const audio4 = { artist: 'Huminds', title: 'Природа страха', src: srcAudio4 };
const audio5 = { artist: 'Huminds', title: 'Практика', src: srcAudio5 };
const audio6 = { artist: 'Huminds', title: 'Вопросы и ответы', src: srcAudio6 };


function Title({ title }: { title: string }) {
    return (
        // <div className="flex justify-center text-center mb-6">
        <div className="flex mb-6">
            <h1 className="text-2xl font-medium">{title}</h1>
        </div>
    )
}

function SubTitle({ subtitle }: { subtitle: string }) {
    return (
        // <div className="flex justify-center text-center mb-4">
        <div className="flex mb-4">
            <h1 className="text-large font-medium">{subtitle}</h1>
        </div>
    )
}

const Paragraph = ({ children }: { children: React.ReactNode }) => {
    return (
        // classname for a lighter font weight
        // <p className="mb-4 text- text-foreground/80">
        <p className="mb-4 font-light text-medium">
            {children}
        </p >
    )
};

const Bold = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="font-medium">{children}</span>
    )
}

const Video = ({ src, cover }: { src: string; cover?: string; }) => {
    return (
        <video width={window.innerWidth} controls poster={cover}>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}

const onCalendarClick = () => {
    openInstanView('https://calendar.app.google/nNj7is3k7yvtmn4E6');
}

const onOpenProgramClick = () => {
    openInstanView('https://www.huminds.com/ru/course');
}

export const contentMap: ContentMap = [
    {
        Title: <Title title="Добро пожаловать" />,
        Content: (
            <>
                <Paragraph>
                    Добро пожаловать в Huminds! Этот практический урок создан специально для того, чтобы помочь вам разобраться в том, <Bold>как устроены ваши эмоции</Bold>, и начать освобождаться от <Bold>энергии страха и тревоги</Bold>.
                </Paragraph><Paragraph>
                    Пройдя всю теорию и сделав аудио-практику, вы познакомитесь с <Bold>мощным инструментом для отпускания негативных эмоций</Bold>. Уже совсем скоро вы почувствуете прилив жизненной энергии, больше расслабленности, ясности ума и уверенности в себе.
                </Paragraph><Paragraph>
                    <Bold>Приготовьте бумагу и ручку</Bold>. Делайте паузы по мере изучения материала, записывайте и применяйте новые знания к себе.
                </Paragraph><Paragraph>
                    Мы начинаем! Переходите к прослушиванию аудио.
                </Paragraph>

                <div className="flex justify-center  mt-10 mb-10">
                    <Audioplayer audio={audio1} />
                </div>

                <SubTitle subtitle="Задание:" />

                <Paragraph>
                    Прежде чем продолжить проходить материал, напишите на бумаге, какой запрос вам хотелось бы решить с помощью этого урока. С чем таким важным вам хотелось бы разобраться в данный период жизни? Как только выполните задание, переходите к следующей карточке.
                </Paragraph>
            </>
        ),
        audio: null,
    },
    {
        Title: <></>,
        Content: (
            <>
                <Title title="В чем корень наших проблем" />

                <Paragraph>
                    После знакомства с Huminds и введения в методику, самое время погрузиться глубже. Включайте следующее аудио, чтобы узнать, в чем корень наших проблем, почему порой мы не способны управлять своими реакциями и как, начиная <Bold>брать ответственность за собственные эмоции</Bold>, мы обнаруживаем в себе силу для изменения своей жизни к лучшему.
                </Paragraph>

                <div className="flex justify-center  mt-10 mb-10">
                    <Audioplayer audio={audio2} />
                </div>

                <SubTitle subtitle="Что происходит, когда мы избавляемся от страха" />
                <Paragraph>
                    Посмотрите два коротких видео, в которых наши ученицы делятся тем, как стала разворачиваться их жизнь после того, как они избавились даже от небольшого количества энергии страха.
                </Paragraph>

                <div className='mb-10'>
                    <Video src={videoKatia} cover={coverKatia} />
                </div>

                <div>
                    <Video src={videoValya} cover={coverValya} />
                </div>
            </>
        ),
        audio: null,
    },
    {
        Title: <Title title="Развеиваем главный миф о негативных эмоциях" />,
        Content: (
            <Paragraph>
                Сейчас мы с вами обсудим природу накопленных внутри негативных эмоций. С помощью примеров мы <Bold>попробуем развеять один важный миф – миф о том, что эмоции нам жизненно необходимы</Bold>. Понимание того, что это не так, позволит убрать один из самых главных барьеров, который мешает нам обрести свободу от страха, гнева, вины и апатии. Включайте следующее аудио.
            </Paragraph>
        ),
        audio: audio3,
    },
    {
        Title: <Title title="Что такое страх и как его преодолеть" />,
        Content: (
            <>
                <Paragraph>
                    На данный момент мы с вами обнаружили, что глубинной <Bold>причиной наших проблем является энергия негативных эмоций</Bold>, которые мы долго и тщательно накапливали внутри просто потому, что не знали, как по-другому. Мы также узнали, что нам <Bold>для успешной жизни не нужны негативные эмоции</Bold>, как бы сильно мы ни верили в обратное. Наконец, мы узнали, что <Bold>за всеми негативными эмоциями стоит страх</Bold>, мощная энергия которого подпитывает эго и склеивает все негативные эмоции.
                </Paragraph><Paragraph>
                    Теперь пришло время начать разбираться с самим страхом. Мы разложим эту сильную, но простую эмоцию на части и увидим, что <Bold>все это время бояться было абсолютно нечего</Bold>.
                </Paragraph><Paragraph>
                    Важно заметить, что сегодня у вас вряд ли получится полностью избавиться от страха (пока живо наше эго, страх будет держаться до последнего). Однако вам будет точно под силу освободиться от какой-то части этой неэффективной энергии и ослабить влияние страха на свою жизнь.
                </Paragraph><Paragraph>
                    Итак, переходите к следующему аудио.
                </Paragraph>
            </>
        ),
        audio: audio4,
    },
    {
        Title: <Title title="Практика “Отпускание тревоги и страха”" />,
        Content: (
            <>
                <SubTitle subtitle="Как подготовиться к практике" />

                <Paragraph>
                    Чтобы получить максимальную пользу от этой практики, <Bold>убедитесь, что вас никто не побеспокоит в ближайшие полчаса</Bold>. Выключите все уведомления на телефоне. Найдите удобное место. <Bold>Используйте наушники</Bold> для наибольшей концентрации. <Bold>Не делайте практику лежа</Bold>, иначе ум будет слишком расслабленным.
                </Paragraph><Paragraph>
                    Постарайтесь <Bold>оставаться неподвижными</Bold>: чем спокойнее тело, тем спокойнее ум. Если будет абсолютно необходимо сменить позу, сделайте это медленно.
                </Paragraph><Paragraph>
                    Создайте твердое намерение <Bold>досидеть до конца</Bold> – это поможет преодолеть сопротивление. Начинайте практику, <Bold>не ожидая никакого результата</Bold>, а просто следуйте всем инструкциям.
                </Paragraph>

                <div className="flex justify-center mt-10 mb-20">
                    <Image src={howToSit} width={'300px'} />
                </div>

                <SubTitle subtitle="Задание перед практикой" />

                <Paragraph>
                    Перед началом составьте список из 10 ваших страхов, от мелких, как боязнь пауков, до серьезных, например, страх за будущее или боязнь потерять кого-то. Кагда список будет готов, сразу переходите к практике.
                </Paragraph>

                <div className='mt-10' />

                <SubTitle subtitle="“Отпускание тревоги и страха”" />

                <div className="flex justify-center">
                    <Audioplayer audio={audio5} />
                </div>

            </>
        ),
        audio: null,
    },
    {
        Title: <Title title="Вопросы и ответы" />,
        Content: (
            <>
                <Paragraph>
                    Поздравляем! Вы сделали свою первую практику отпускания! Вполне вероятно, что у вас возникли вопросы. Действительно, несмотря на свою простоту, <Bold>у метода, множество нюансов</Bold>.
                </Paragraph><Paragraph>
                    В аудио ниже мы <Bold>ответили на такие важные вопросы, как</Bold>:
                </Paragraph><Paragraph>
                    <ul className="list-disc list-inside">
                        <li>Как можно изменить жизнь, пассивно наблюдая за телом?</li>
                        <li>Как узнать, что практика была успешной?</li>
                        <li>Откуда этот метод?</li>
                        <li>Что делать с мыслями?</li>
                    </ul>
                </Paragraph><Paragraph>
                    и другие…
                </Paragraph><Paragraph>
                    Если после прослушивания вам по-прежнему будет что-то неясно, или вы просто <Bold>захотите поделиться вашим опытом</Bold>, то обязательно свяжитесь с нами. Мы будем рады с вами пообщаться.
                </Paragraph>


                <div className="flex justify-center  mt-10 mb-10">
                    <Audioplayer audio={audio6} />
                </div>

                <SubTitle subtitle="Как прошел для вас урок?" />

                <Paragraph>
                    Поделитесь вашими впечатлениями с нами в чате. Так мы сможем сделать урок еще лучше, а также дать вам индивидуальную обратную связь.
                </Paragraph>
            </>
        ),
        audio: null,
    },
    {
        Title: <Title title="Следующий шаг" />,
        Content: (
            <>
                <SubTitle subtitle="Приглашаем в программу “Путь к себе!”" />
                <Video src={videoInvitation} cover={coverInvitation} />

                <div className='mb-10' />

                <Paragraph>
                    Вы только что сделали первый важный шаг к пониманию своих эмоций!
                </Paragraph>
                <Paragraph>
                    Приглашаем вас присоединиться к нашей программе “Путь к себе”, где через связь с телом вы освоите эффективные, практические <Bold>инструменты для управления своим внутренним состоянием</Bold> и приведения в порядок всей жизни.
                </Paragraph>
                <Paragraph>
                    Мы подготовили для вас системный, пошаговый и комфортный путь к:
                </Paragraph>
                <Paragraph>
                    <ul className="list-disc list-inside">
                        <li>самопознанию и принятию себя</li>
                        <li>спокойствию, доверию и наслаждению жизнью</li>
                        <li>большей соединенности с собой</li>
                        <li>улучшению отношений и восстановлению здоровья</li>
                    </ul>
                </Paragraph>
                <Paragraph>
                    Вас ждет <Bold>структурированная теория, аудио-практики с доступом навсегда</Bold>, которые станут верными помощниками, групповые и индивидуальные созвоны, а также поддержка сообщества и персональная обратная связь на протяжении всей программы.
                </Paragraph>

                <Paragraph>
                    Длительность: <Bold>от 5 до 10 недель</Bold>
                    <div>Старт: <Bold>2 июня</Bold></div>
                </Paragraph>

                <div className='flex  justify-center mb-10 mt-10'>
                    <Button color="secondary" variant="solid" style={{ color: 'white' }}
                        onPressStart={() => buttonHapticFeedback()}
                        onClick={onOpenProgramClick}
                    >
                        О программе “Путь к себе”
                    </Button>
                </div>


                <Paragraph>
                    Или забронируйте звонок с нами, чтобы узнать, как вы сможете решить ваши конкретные запросы с помощью программы.
                </Paragraph>

                <div className='flex  justify-center mb-10 mt-10'>
                    <Button color="primary" variant="solid" style={{ color: 'white' }}
                        onPressStart={() => buttonHapticFeedback()}
                        onClick={onCalendarClick}>
                        Забронировать встречу
                    </Button>
                </div>

                <SubTitle subtitle="Что говорят наши ученики:" />
                <Video src={videoReviews} cover={coverReviews} />

                <div className="flex justify-center mt-10 mb-5">
                    <Image src={imageReview} width={500} />
                </div>

                <div className='flex justify-center'>
                    <Link href="https://t.me/+1TEZumKnq_AxZDli" isExternal showAnchorIcon>
                        Больше отзывов здесь
                    </Link>
                </div>

            </>
        ),
        audio: null,
    },

];
