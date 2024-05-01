import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
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
