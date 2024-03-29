import { ArrowLeftIcon } from "@heroicons/react/outline";
import { sendEmailVerification } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, NavLink, useLocation } from "react-router-dom";
import Logo from "../components/Logo";
import { AuthContext } from "../contexts/authContext";
import { isEmailIsVerified } from "../services/firebase";

export default function VerifyEmail() {
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();
  let from = location.state?.from?.pathname;
  const [sendState, setSendState] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(120);

  useEffect(() => {
    let intervalId;
    function tick() {
      if (counter === 0) {
        setIsLoading(false);
        setCounter(120);
      } else {
        setCounter((prev) => prev - 1);
      }
    }

    if (isLoading === true) {
      intervalId = setInterval(() => tick(), 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isLoading, counter]);

  useEffect(() => {
    if (from === "/register" && !isLoading) {
      setIsLoading(true);
    }
  }, [from, isLoading]);

  async function resendEmail() {
    setIsLoading(true);
    sendEmailVerification(currentUser)
      .then(() => {
        // Email sent successfully
        setSendState("SUCCESS");
      })
      .catch((error) => {
        // Failed to send email
        setSendState("FAIL");
      });
  }

  if (currentUser === null) {
    //console.log(currentUser);
    return <Navigate to="/" replace={true} />;
  } else if (isEmailIsVerified()) {
    return <Navigate to="/dashboard" replace={true} />;
  }
  return (
    <div className="bg-perl flex h-screen flex-col items-center">
      <div className="mt-14 flex justify-center">
        <Logo />
      </div>

      {/**Body */}
      <div className=" m-40 w-full max-w-xs pb-14 sm:max-w-xl">
        <div className="mb-5 w-min cursor-pointer text-gray-400 opacity-70 hover:text-gray-500">
          <NavLink className=" hidden" to="/register">
            <ArrowLeftIcon className="mr-2 h-6 w-5" />
            Registrarse
          </NavLink>
        </div>

        <div className="mb-4 flex flex-col items-center space-y-4 rounded bg-white px-8 pt-6 pb-8 shadow-md">
          <div className=" flex w-3/4 justify-center border-b pb-5">
            <p className=" text-3xl">Verificar cuenta</p>
          </div>
          <p className=" text-lg">Se le ha enviado un email de verificación.</p>
          <div className="flex flex-col items-center space-y-8 pt-5">
            <button
              className={`${isLoading ? " hidden" : " block"} 
              focus:shadow-outline rounded bg-teal-500 py-2 px-4 font-semibold  text-white hover:bg-teal-600 focus:outline-none`}
              onClick={resendEmail}
            >
              Reenviar email
            </button>
            <p
              className={`${isLoading ? " block" : " hidden"} 
              focus:shadow-outline rounded bg-gray-300 py-2 px-4 font-semibold text-gray-500 focus:outline-none`}
            >
              Enviar de nuevo en {counter}
            </p>
          </div>
          <p
            className={`
                ${sendState === "" ? " hidden" : " block"} 
                ${sendState === "SUCCESS" ? "bg-green-400" : "bg-red-600"}
                  w-1/2 p-2 px-6 text-center`}
          >
            {sendState === "SUCCESS"
              ? "Email enviado"
              : "Error el enviar email"}
          </p>
        </div>
      </div>
    </div>
  );
}
