// import { useState } from 'react';
// import WebApp from '@twa-dev/sdk'
import { NextUIProvider } from '@nextui-org/react';

import './App.css'
// import { Button } from "@nextui-org/button";
import { Card, CardBody, Image } from "@nextui-org/react";

import humindsLogo from './assets/huminds.png';
import thumbnail1 from './assets/1-01.png';
import thumbnail2 from './assets/2-01.png';



function App() {
    return (
        <NextUIProvider>
            <main className="p-4">

                <div className='flex justify-center'>
                    <a href="https://huminds.com" target="_blank">
                        <img src={humindsLogo} className="logo" alt="Huminds logo" />
                    </a>
                </div>

                <h1 className="text-xl font-medium flex justify-center m-10">Fundamentals</h1>

                {/* <div style={{ margin: 40 }}>
                    <Button onClick={() => WebApp.showAlert(`Hello there!`)}>
                        Just a button here
                    </Button>
                </div> */}


                <Card
                    isPressable
                    fullWidth
                    className="border-none bg-background/60 dark:bg-default-100/50"
                    shadow="sm"
                >
                    <CardBody>
                        <div className="grid grid-cols-4 items-center p-2">

                            <div className="flex flex-col col-span-3">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col gap-0">
                                        <h2 className="text-medium font-medium">Chast 1/7</h2>
                                        <h1 className="text-large font-semibold mt-2">Drobro Poshalobat!</h1>
                                        <h3 className="text-small text-foreground/80 mt-1">8 min</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center col-span-1">
                                <Image
                                    alt=""
                                    height={200}
                                    width={200}
                                    shadow="md"
                                    src={thumbnail1}
                                />
                            </div>

                        </div>
                    </CardBody>
                </Card>

                <Card
                    isPressable
                    fullWidth
                    className="border-none bg-background/60 dark:bg-default-100/50 mt-4"
                    shadow="sm"

                >
                    <CardBody>
                        <div className="grid grid-cols-4 items-center p-2">

                            <div className="flex flex-col col-span-3">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col gap-0">
                                        <h2 className="text-medium font-medium">Chast 2/7</h2>
                                        <h1 className="text-large font-semibold mt-2">B chem koren nashij problem</h1>
                                        <h3 className="text-small text-foreground/80 mt-1">11 min</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center col-span-1">
                                <Image
                                    alt=""
                                    height={200}
                                    width={200}
                                    shadow="md"
                                    src={thumbnail2}
                                />
                            </div>

                        </div>
                    </CardBody>
                </Card>


            </main>

        </NextUIProvider>
    )
}

export default App
