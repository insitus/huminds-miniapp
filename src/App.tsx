import { useState } from 'react';

import { NextUIProvider } from '@nextui-org/react';
import './App.css'
import { IndexPage } from './components/IndexPage';
import { ContentPage } from './components/ContentPage';



function App() {
    const [showContent, setShowContent] = useState(false);

    return (
        <NextUIProvider>
            <main className="p-4">

                {!showContent && (
                    <IndexPage onSelect={() => setShowContent(true)} />
                )}

                {showContent && (
                    <ContentPage onBackPress={() => setShowContent(false)} />
                )}

            </main>

        </NextUIProvider>
    )
}

export default App
