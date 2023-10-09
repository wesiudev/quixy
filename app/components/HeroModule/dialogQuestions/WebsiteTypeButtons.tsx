import { setHeroDialogData } from "@/redux/slices/appState";

export const WebsiteTypeButtons = ({
  dispatch,
  data,
}: {
  dispatch: any;
  data: any;
  updateDialogStep: Function;
}) => {
  return (
    <>
      <button
        onClick={() => {
          dispatch(
            setHeroDialogData({
              ...data,
              step: 2,
              websiteName: "Strona wizytówka",
            })
          );
        }}
        type="button"
        className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-lime-800 shadow-lg  shadow-lime-800/80 font-medium rounded-lg text-sm px-2 lg:px-5 py-2.5 text-center mx-4 mb-6 hover:scale-105 duration-100"
      >
        Strona wizytówka
      </button>
      <button
        onClick={() => {
          dispatch(
            setHeroDialogData({
              ...data,
              step: 2,
              websiteName: "Sklep internetowy",
            })
          );
        }}
        type="button"
        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-red-800 shadow-lg  shadow-red-800/80 font-medium rounded-lg text-sm px-2 lg:px-5 py-2.5 text-center mx-4 mb-6 hover:scale-105 duration-100"
      >
        Sklep internetowy
      </button>
      <button
        onClick={() => {
          dispatch(
            setHeroDialogData({
              ...data,
              step: 2,
              websiteName: "Strona landingowa",
            })
          );
        }}
        type="button"
        className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-pink-800 shadow-lg shadow-pink-800/80 font-medium rounded-lg text-sm px-2 lg:px-5 py-2.5 text-center mx-4 mb-6 hover:scale-105 duration-100"
      >
        Strona landingowa
      </button>{" "}
    </>
  );
};
