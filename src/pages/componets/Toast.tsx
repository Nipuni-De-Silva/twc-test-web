import toast from "react-hot-toast";

const commonToast = (message: string) => toast.custom((t) => (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
          ❌
          </div>
          <div className="ml-3 flex-1">
            <p className="text-xl font-medium text-gray-900">
              {message}
            </p>
            
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red hover:text-red focus:outline-none focus:ring-2 focus:ring-red"
        >
          Close
        </button>
      </div>
    </div>
  ))

  export default commonToast