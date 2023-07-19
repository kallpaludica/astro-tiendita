import { useState } from "react";
export default function OffcanvasAlgoliaFilter({
  children,
  right,
}: {
  children: any;
  right: boolean;
}) {
  let [show, setShow] = useState(false);

  const toggleChecked = () => setShow((value) => !value);

  function closeModal() {
    setShow(false);
  }

  function openModal() {
    setShow(true);
  }

  return (
    <>
      <div>
        <button
          type="button"
          onClick={closeModal}
          aria-label="Backdrop"
          className={`${
            !show ? "opacity-0 select-none -z-10" : "opacity-100 z-[998]"
          } fixed inset-0 bg-gray-900/60 duration-300 backdrop-blur w-full`}
        />
        <button
          type="button"
          onClick={toggleChecked}
          className={`${
            right ? "right-2" : "left-2"
          } offcanvasBtn lg:hidden fixed text-lg justify-center items-center opacity-80 rounded-md overflow-hidden hover:opacity-100 p-0.5 bg-gray-700/80 hover:bg-gray-800/90 duration-1000 font-bold text-gray-100  z-[99999] flex top-4`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        {right ? (
          <div
            onClick={closeModal}
            className={`OffcanvasNav OffcanvasNavRight ${
              !show ? "translate-x-full" : "translate-x-0"
            } `}
          >
            {children}
          </div>
        ) : (
          <div
            className={`OffcanvasNav OffcanvasNavLeft ${
              !show ? "-translate-x-full" : "translate-x-0"
            } `}
          >
            {children}
          </div>
        )}
      </div>
    </>
  );
}
