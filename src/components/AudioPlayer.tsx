import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { AudioContent } from '../../types/types';

interface Props {
    audio: AudioContent;
}

export function Audioplayer({ audio }: Props) {

    const onPlay = () => {
        // update matadata
        navigator.mediaSession.metadata = new MediaMetadata({ title: audio.title, artist: audio.artist });
        // window.MediaSession.metadata = new MediaMetadata({ title: audio.title, artist: audio.artist });
    }

    return (
        <AudioPlayer
            autoPlay={false}
            src={audio.src}
            // onPlay={(e: any) => {
            onPlay={onPlay}
            progressJumpStep={5000}
            // customControlsSection={[]}
            customVolumeControls={[]}
            customAdditionalControls={[]}
            // customIcons={{}}
            customProgressBarSection={
                [
                    <div></div>, // RHAP_UI.CURRENT_TIME,
                    RHAP_UI.PROGRESS_BAR,
                    RHAP_UI.CURRENT_LEFT_TIME, // RHAP_UI.DURATION,
                ]
            }
        />
    )
}
