import { ModuleCard } from './ModuleCard';

import humindsLogo from '../assets/huminds.png';
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

            <h1 className="text-xl font-medium flex justify-center m-10">Fundamentals</h1>


            <ModuleCard
                thumbnail={thumbnail1}
                upperTitle="Chast 1/7"
                title="Drobro Poshalobat!"
                underTitle="8 min"
                onSelect={onSelect}
            />

            <ModuleCard
                thumbnail={thumbnail2}
                upperTitle="Chast 2/7"
                title="B chem koren nashij problem"
                underTitle="11 min"
                onSelect={onSelect}
            />

            <ModuleCard
                thumbnail={thumbnail3}
                upperTitle="Chast 3/7"
                title="B chem koren nashij problem"
                underTitle="13 min"
                onSelect={onSelect}
            />

            <ModuleCard
                thumbnail={thumbnail4}
                upperTitle="Chast 4/7"
                title="B chem koren nashij problem"
                underTitle="9 min"
                onSelect={onSelect}
            />

            <ModuleCard
                thumbnail={thumbnail5}
                upperTitle="Chast 5/7"
                title="B chem koren nashij problem"
                underTitle="25 min"
                onSelect={onSelect}
            />

            <ModuleCard
                thumbnail={thumbnail6}
                upperTitle="Chast 6/7"
                title="B chem koren nashij problem"
                underTitle="11 min"
                onSelect={onSelect}
            />

            <ModuleCard
                thumbnail={thumbnail7}
                upperTitle="Chast 7/7"
                title="B chem koren nashij problem"
                underTitle="4 min"
                onSelect={onSelect}
            />
        </>
    )
}