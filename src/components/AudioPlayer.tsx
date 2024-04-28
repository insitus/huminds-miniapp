// import { AudioPlayer } from 'react-audio-player-component';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

interface Props {
    src: string;
}

export function Audioplayer({ src }: Props) {
    return (
        <AudioPlayer
            autoPlay={false}
            src={src}
            // onPlay={(e: any) => {
            onPlay={() => {
                // console.log(e, "onPlay");
            }}
        />
    )
}
