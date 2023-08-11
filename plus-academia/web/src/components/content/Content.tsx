import { ContentProps } from "../types";

function Content({ children }: ContentProps) {
  return (
    <>
      <div className="content-container">
        <div className="video">
          <video src="./banvid.mp4" playsInline autoPlay muted loop></video>
        </div>
        <div className="container">{children}</div>
      </div>
    </>
  );
}

export default Content;
