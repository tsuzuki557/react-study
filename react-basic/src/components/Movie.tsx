import React, { useRef, useState } from "react";
import movieFile from "./../assets/sample.mp4";

const Movie = () => {
  const [playing, setPlaying] = useState(false);
  const movieRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div>
      <h2>動画の再生・停止</h2>
      <video
        src={movieFile}
        width={300}
        height={"auto"}
        loop
        muted
        ref={movieRef}
      ></video>
      <button
        onClick={(e) => {
          //console.log(movieRef);

          if (playing) {
            // 停止する
            movieRef.current?.pause();
          } else {
            // 再生する
            movieRef.current?.play();
          }
          // setPlaying((prev) => !prev);
          setPlaying(!playing);
          // {
          //   console.log(!playing);
          // }
        }}
      >
        {playing ? "停止する" : "再生する"}
      </button>
    </div>
  );
};

export default Movie;
