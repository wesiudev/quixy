import { FaEnvelope, FaPhone } from "react-icons/fa";

export const Info = () => {
  return (
    <>
      <div className="flex flex-col text-white text-xl px-6">
        <div className="mb-4">
          <div className="flex flex-row items-center mb-1">
            <FaPhone className="mr-1" /> Numer telefonu
          </div>
          +48 664 205 952
        </div>
        <div className="mb-4">
          <div className="flex flex-row items-center mb-1">
            <FaEnvelope className="mr-1" /> Adres email
          </div>
          a.zebrovvska@gmail.com
        </div>
      </div>
    </>
  );
};
