import "./TextInputAndButton.less"
import { TextInput, TextInputProps } from "./TextInput";
import { IconButton, IconButtonProps} from "./IconButton";

export type TextInputAndButtonProps = TextInputProps & IconButtonProps &{
    buttonContent?: string;
    onClick?: () => void;
}
export function TextInputAndButton({iconName, buttonContent, onClick, ...textInputProps }:
    TextInputAndButtonProps) {
    return <div class="TextInputAndButton">
        <TextInput {...textInputProps} onEnter={onClick} />
        <IconButton iconName={iconName} buttonContent={buttonContent} onClick={onClick}/>
    </div>
}