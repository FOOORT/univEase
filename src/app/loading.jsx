import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <iframe
        src="https://giphy.com/embed/3AMRa6DRUhMli"
        width="480"
        height="480"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/bw-follow-back-3AMRa6DRUhMli">
          via GIPHY
        </a>
      </p>
    </div>
  );
};

export default Loading;
