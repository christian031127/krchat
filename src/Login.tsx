import { useState } from "preact/hooks";
import "./Login.less"
import { TextInput } from "./TextInput";
import { chatService } from "./ChatService";
import { IconButton } from "./IconButton";

export function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let [displayName, setDisplayName] = useState("");
    let [register, setRegister] = useState(false);

    function loginRegister() {
        if (register)
            chatService.send({ type: "register", email, password, displayName, staySignedIn: true });
        else
            chatService.send({ type: "login", email, password, staySignedIn: true });
    }

    localStorage["theme"] = localStorage["theme"] ? "" : "light";

    //let theme = localStorage[ "theme" ];

    return <div class="Login">
        <span class="logo" onClick={e => document.documentElement.classList.toggle("theme-light")}>🗪</span>
        <TextInput type="email" placeholder="Email (someone@example.com)" value={email} onChange={setEmail} autofocus={true} />
        <TextInput type="password" placeholder="Password" value={password} onChange={setPassword} autofocus={true} />

        {register && <TextInput type="text" placeholder="Display Name (Agent Smith)" value={displayName} onChange={setDisplayName} autofocus={true} />}

        <IconButton iconName="login" buttonContent={register ? "Register" : "Login"} onClick={loginRegister}/>

        <p>{register ? "Switch back to " : "Have no account yet? Go and "}
            <a href="#" onClick={e => {
                e.preventDefault();
                setRegister(!register);
            }}>
                {register ? "Login" : "Register"}
            </a>
        </p>

    </div>
}