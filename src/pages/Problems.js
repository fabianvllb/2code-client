import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";

export default function Problems() {
  return (
    <div className="bg-perl flex h-screen flex-col items-center">
      <header className="w-full">
        <Navbar />
      </header>

      {/**Body */}
      <div className="flex h-full w-full flex-col sm:flex-row">
        {/**Left tabs */}
        <div className="flex flex-col items-center border-r sm:w-1/3">
          <Tabs className="h-full" />
        </div>

        {/**Right Panels */}
        <div className="flex max-h-full flex-col sm:w-2/3">
          <div className="flex border-l border-b p-3">
            <button className="mx-3 w-24 bg-gray-200 py-2 px-4">Prev</button>
            <button className="mx-3 w-24 bg-gray-200 py-2 px-4">Next</button>
            <p>something</p>
          </div>

          <div className="flex border-l border-b p-3">
            <button className="mx-3 w-24 bg-gray-200 py-2 px-4">Prev</button>
            <button className="mx-3 w-24 bg-gray-200 py-2 px-4">Next</button>
            <p>something</p>
            <button className="mx-3 w-24 bg-gray-200 py-2 px-4">
              End test
            </button>
          </div>

          <div className="flex h-full">
            <div className="flex w-10 flex-col border-l border-t border-r pl-5 pt-3 text-sm">
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>
            <div className=" h-full w-full border border-l border-t border-green-500 bg-white">
              <textarea className=" h-full w-full resize-none p-3" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}