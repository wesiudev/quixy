import { createOrder } from "@/firebase";
import { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export const ContactType = ({
  dispatch,
  data,
  setHeroDialogData,
}: {
  dispatch: any;
  data: any;
  setHeroDialogData: Function;
}) => {
  const [contactType, setContactType] = useState<any>("");
  const [email, setEmail] = useState<any>("");
  const [phone, setPhone] = useState<any>("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  function sendEmail(testType: string) {
    switch (testType) {
      case "email":
        if (email.includes("@") && email.includes(".")) {
          setEmailError("");
          data.step === 5 &&
            dispatch(
              setHeroDialogData({ ...data, contactType: email, step: 6 })
            );
          createOrder({ ...data, contactType: email, step: 6 });
        } else {
          setEmailError("Niepoprawny adres email");
          setTimeout(() => {
            setEmailError("");
          }, 5000);
        }
        break;
      case "phone":
        if (phone.length > 8) {
          setPhoneError("");
          data.step === 5 &&
            dispatch(
              setHeroDialogData({ ...data, contactType: phone, step: 6 })
            );
          createOrder({ ...data, contactType: phone, step: 6 });
        } else {
          setPhoneError("Niepoprawny numer telefonu");
          setTimeout(() => {
            setPhoneError("");
          }, 5000);
        }
        break;
      default:
        break;
    }
  }

  return (
    <div
      className={`w-full absolute left-[50%] top-[50%] -translate-x-[50%] flex flex-col items-center justify-center ${
        data.step === 5
          ? "-translate-y-[50%] opacity-100 z-50"
          : "-translate-y-[200%] opacity-0 z-[-50]"
      } duration-500 delay-300`}
    >
      <span className=" text-white w-max text-3xl lg:text-4xl xl:text-5xl font-bold font-coco -mt-12">
        Kontakt
      </span>
      <span className="text-sm -mb-4 mt-1 font-light italic">
        jaką formę kontaktu z nami preferujesz?
      </span>
      <div
        className={`${
          contactType !== "" ? "space-x-0" : "space-x-6"
        } flex flex-row items-center  mt-12 relative`}
      >
        <button
          title="Kontakt przez email"
          onClick={() => setContactType("email")}
          type="button"
          className={`${
            contactType !== ""
              ? "-translate-x-[55vw] opacity-0 !duration-1000"
              : "-translate-x-[0vw] opacity-100"
          } z-10 flex flex-row items-center text-gray-900 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-lime-800 shadow-lg  shadow-blue-800/80 font-medium rounded-lg text-sm px-2 lg:px-5 py-2.5 text-center mx-2 mb-3 hover:scale-105 `}
        >
          Wiadomość email
        </button>
        <div
          className={`-mt-8 flex flex-col items-center justify-center absolute !text-lg left-[50%] -top-[50%] delay-500 duration-300 -translate-x-[50%] translate-y-[50%] ${
            contactType !== "" ? "scale-100" : "scale-0"
          }`}
        >
          <div className="w-max relative">
            {contactType === "email" ? (
              <FaEnvelope className="text-gray-500 absolute left-3 top-[50%] -translate-y-[50%] text-2xl" />
            ) : (
              <FaPhone className="text-gray-500 absolute left-3 top-[50%] -translate-y-[50%] text-2xl" />
            )}
            <input
              value={contactType === "email" ? email : phone}
              onChange={(e) => {
                contactType === "email"
                  ? setEmail(e.target.value)
                  : setPhone(e.target.value);
              }}
              placeholder={
                contactType === "email"
                  ? "Wpisz adres email"
                  : "Wpisz numer telefonu"
              }
              className={`w-[300px] h-[50px] text-zinc-700 placeholder:font-light placeholder:text-center text-center shadow-lg  shadow-green-800/80 !z-[800]  bg-white rounded-lg p-3 "
            type="text`}
            />
          </div>
          <button
            onClick={() => {
              contactType === "email" ? sendEmail("email") : sendEmail("phone");
            }}
            className={`bg-green-400 px-3 py-2 text-white`}
          >
            Zatwierdź brief
          </button>

          <span className=" text-red-600 h-3">
            {emailError !== "" && emailError}
            {phoneError !== "" && phoneError}
          </span>
        </div>
        <button
          title="Kontakt przez telefon"
          onClick={() => setContactType("phone")}
          type="button"
          className={`${
            contactType !== ""
              ? "translate-x-[55vw] opacity-0 !duration-1000"
              : "translate-x-[0vw] opacity-100"
          } z-10 flex flex-row items-center text-gray-900 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-lime-800 shadow-lg  shadow-blue-800/80 font-medium rounded-lg text-sm px-2 lg:px-5 py-2.5 text-center mx-2 mb-3 hover:scale-105 duration-100`}
        >
          Połączenie telefoniczne
        </button>
      </div>
    </div>
  );
};
