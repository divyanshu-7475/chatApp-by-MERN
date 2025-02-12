import React from "react";

export default function ImageFullview({ socket, image }) {
  console.log("socket",socket)

  return (
    <div className="w-full h-full ">
      <div className="w-full h-10 flex justify-center mb-3">
        <div className="w-32 h-full bg-green-500 flex rounded-xl">
        <div
          className={`w-1/2 hover:bg-green-700 flex items-center justify-center rounded-l-lg`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-forward-up"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 14l4 -4l-4 -4" />
            <path d="M19 10h-11a4 4 0 1 0 0 8h1" />
          </svg>
        </div>
        <div
          className={`w-1/2 hover:bg-green-700 flex items-center justify-center rounded-r-lg cursor-pointer`}
          onClick={() => {
            deleteClick(id);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-trash"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7l16 0" />
            <path d="M10 11l0 6" />
            <path d="M14 11l0 6" />
            <path
              d="M5 7l1 12a2 
                           2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
            />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
        </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <img src={image?.message} alt="" className="w-1/2" />
      </div>
    </div>
  );
}
