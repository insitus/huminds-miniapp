export type AudioContent = {
    artist: string;
    title: string;
    src: string;
}

export type ContentMap = {
    Title: JSX.Element;
    Content: JSX.Element;
    audio: AudioContent | null;
}[];
