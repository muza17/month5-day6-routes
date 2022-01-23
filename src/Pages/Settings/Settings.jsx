import useLang from "./../../Hook/useLang"
import useAuth from "./../../Hook/useAuth"

function Settings(){

    const [lang, setLang] = useLang()
    const [token, setToken] = useAuth()

    return(
        <>
            <h1>Settings</h1>
            <h2>Til o'zgartirish</h2>
            <select defaultValue={lang} onChange={(e) => setLang(e.target.value)}>
                <option value="uz">uz</option>
                <option  value="en">en</option>
                <option  value="ru">ru</option>
            </select>
            <h2>Log out qilish</h2>
            <button
                title="Double click on button !"
                onDoubleClick={() => setToken(null)}>
                    LogOut
            </button>
        </>
    );
}
export default Settings