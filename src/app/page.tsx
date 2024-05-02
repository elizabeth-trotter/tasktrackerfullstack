'use client'
import { Navbar } from "flowbite-react";
import Image from "next/image";
import HideIcon from "@/app/assets/HidePassword.png"
import { useState } from "react"; import NavbarComponent from "./components/NavbarComponent";
import Profile from "./ProfilePage/page";
import { useRouter } from "next/navigation";
import { IToken } from "@/Interfaces/Interface";
import { createAccount, login } from "@/utils/Dataservices";

export default function Home() {
  const [registerBool, setRegisterBool] = useState<boolean>(true);
  const [hidePasswordBool, setHidePasswordBool] = useState<boolean>(true);
  const [typeInput, setTypeInput] = useState<string>("password")

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const handleRegister = () => {
    setRegisterBool(!registerBool);
  }
  const handleHidePassword = () => {
    setHidePasswordBool(!hidePasswordBool);
    if (hidePasswordBool) {

      setTypeInput("text")

    } else {

      setTypeInput("password");
    }
  }

  let router = useRouter();

  const handleSubmit = async () => {
    let userData = {
      username: username,
      password: password,
    };
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!registerBool) {
      // Logic for Login
      let token: IToken = await login(userData);
      if (token.token != null) {
        localStorage.setItem("Token", token.token);
        router.push('/ProfilePage');
      } else {
        alert("Login Failed");
      }
    } else {
      // Logic for Create Account
      createAccount(userData);
      alert("Account Created");
    }
  }


  return (

    <div>
      <NavbarComponent userColor=""/>
      <div className="grid grid-flow-row justify-center pt-[6rem] pb-[145px]">
        <div className="bg-[#3EBE9F] rounded-[5px] py-[70px]">
          <div>
            {registerBool ? <p className="text-[48px] font-[HoltwoodOneSC] text-center px-[112px]">Create Account</p> : <p className="text-[48px] font-[HoltwoodOneSC] text-center px-[270px]">Login</p>}
          </div>
          <div className="pt-[40px]">

            <div className="pb-[30px] px-[70px]">
              <p className="text-[24px] font-[HammersmithOne] pb-[5px] pl-[10px]">Username</p>
              <input onChange={(e) => setUsername(e.target.value)} type="text" className="font-[HammersmithOne] h-[56px] w-full rounded-[10px] border-none pr-10" placeholder="" required />
            </div>

            <div className="pb-[30px] px-[70px]">
              <p className="text-[24px] font-[HammersmithOne] pb-[5px] pl-[10px]">Password</p>
              <div className='relative flex items-center'>
                <input onChange={(e) => setPassword(e.target.value)} type={typeInput} className="font-[HammersmithOne] h-[56px] w-full rounded-[10px] border-none pr-10" placeholder="" required />
                <div className='absolute right-0 top-0 bottom-0 flex items-center'>
                  <div className='p-2'>
                    <Image src={HideIcon} alt="Hide/Show" onClick={handleHidePassword} />
                  </div>
                </div>
              </div>
            </div>

            {registerBool ? <div className="pb-[40px] px-[70px]">
              <p className="text-[24px] font-[HammersmithOne] pb-[5px] pl-[10px]">Confirm Password</p>
              <div className='relative flex items-center'>
                <input onChange={(e) => setConfirmPassword(e.target.value)} type={typeInput} className="font-[HammersmithOne] h-[56px] w-full rounded-[10px] border-none pr-10" placeholder="" required />
                <div className='absolute right-0 top-0 bottom-0 flex items-center'>
                  <div className='p-2'>
                    <Image src={HideIcon} alt="Hide/Show" onClick={handleHidePassword} />
                  </div>
                </div>
              </div>
            </div> : ""}

            <div className=" text-center">
              {registerBool ? <button className="font-[HammersmithOne] text-[28px] px-[40px] py-[15px] bg-[#0B7D61] text-white rounded-[10px] mb-[15px]" onClick={handleSubmit}>CREATE</button>
                : <button className="font-[HammersmithOne] text-[28px] px-[40px] py-[15px] bg-[#0B7D61] text-white rounded-[10px] mb-[15px]" onClick={handleSubmit}>LOGIN</button>
              }
              {
                registerBool ? <p className="font-[HammersmithOne] text-[20px]">Already have an account? <span onClick={handleRegister} className="underline cursor-pointer">Login</span></p>
                  : <p className="font-[HammersmithOne] text-[20px]">Don&apos;t have an account? <span onClick={handleRegister} className="underline cursor-pointer">Create one now!</span></p>

              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
