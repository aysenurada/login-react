import { Button } from "../Button/Button"
import { InputBox } from "../InputBox/InputBox"
import { Label } from "../Label/Label"
import './LoginForm.css'

const LoginForm = () => {

    const HandleOnSubmit = (e) => {
        e.preventDefault();
        const kullanici = document.getElementById('kullaniciAdi')
        const sifre = document.getElementById('sifre')

        console.log("Kullanıcı Adı:", kullanici.value)
        console.log("Şifre:", sifre.value)
    }

    return (
        <form className="form" onSubmit={HandleOnSubmit}>
            <Label className={'lbl'}>Kullancı Adı</Label>
            <InputBox type={"text"} placeholder={"kullanici@gmail.com"} id='kullaniciAdi'/> 
            <Label className={'lbl'}>Parola</Label>
            <InputBox type={"password"} placeholder={"********"} id='sifre'/>
            <Button>Giriş Yap</Button>
            <Button type="reset" className="reset-button">Temizle</Button>
        </form>
    )
}

export {LoginForm}