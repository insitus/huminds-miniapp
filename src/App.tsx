import { useState } from 'react';

import './App.css'
import { NextUIProvider } from '@nextui-org/react';
import { IndexPage } from './components/IndexPage';
import { ContentPage } from './components/Content/ContentPage';

function App() {
    const [sectionNumber, setSectionNumber] = useState(0);

    const onIndexselected = (nro: number) => {
        setSectionNumber(nro);
    };

    const onBackPress = () => {
        setSectionNumber(0);
    }

    return (
        <NextUIProvider>
            <main className="p-4 light text-foreground bg-background">

                {!sectionNumber && (
                    <IndexPage onSelect={onIndexselected} />
                )}

                {sectionNumber > 0 && (
                    <ContentPage
                        sectionNumber={sectionNumber}
                        onBackPress={onBackPress}
                    />
                )}

            </main>

        </NextUIProvider>
    )
}

export default App
