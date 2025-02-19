interface Props {
    size?: number;
    width?: number;
    height?: number;
    strokeWidth?: number;
    fill?: string;
    className?: string;
}
export const BackIcon = ({
    size = 24,
    width,
    height,
    strokeWidth = 1.5,
    fill = "none",
    ...props
}: Props) => (
    <svg
        aria-hidden="true"
        fill={fill}
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}

    // style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" 
    // viewBox="0 0 1024 1024" 
    // version="1.1" 
    >

        <path
            d="M528.527 1024c-16.05 0-32.099-5.98-44.345-17.981L24.469 555.5c-24.492-23.962-24.492-62.874 0-86.876l459.713-450.56c24.492-24.003 64.157-24.003 88.649 0 24.492 23.962 24.492 62.874 0 86.876L157.463 512.041l415.368 407.06c24.492 24.003 24.492 62.874 0 86.876-12.204 12.042-28.254 18.022-44.304 18.022z"
        // stroke="currentColor"
        // strokeLinecap="round"
        // strokeLinejoin="round"
        // strokeWidth={strokeWidth}
        />
    </svg>
);
