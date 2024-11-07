import "./IconButton.less"

export type IconButtonProps = {
    iconName?: string;
    buttonContent?: string;
    onClick?: () => void;
}

export function IconButton({ iconName, buttonContent, onClick }:
    Readonly<IconButtonProps>) {
    return <div class="IconButtonProps">
        <button type="button" onClick={onClick} className={iconName}>
            <span class="material-symbols-outlined">
                {iconName}
            </span>
            {buttonContent}
        </button>
    </div>
}

export default IconButton
