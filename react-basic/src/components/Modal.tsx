import { useState } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

type modalPortalProps = {
  children: React.ReactNode;
};

const ModalPortal: React.FC<modalPortalProps> = ({ children }) => {
  // const target = document.querySelector("#modalContainer");
  const target = document.querySelector("#modalContainer") as Element;
  return createPortal(children, target);
};

type modalOverlayProps = {
  handleCloseClick: any; // TODO:  型がわからないので仮でany
};

const ModalOverlay: React.FC<modalOverlayProps> = ({ handleCloseClick }) => {
  return (
    <div className="modalOverlay">
      <div className="modalOverlay__body">
        <h2>モーダルを開きました</h2>
        <button onClick={handleCloseClick}>モーダル閉じる</button>
      </div>
    </div>
  );
};

const Modal: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="wrapper">
        <div id="modalContainer" className="modalContainer"></div>
        <button
          onClick={() => {
            setModalOpen(true);
          }}
          className={modalOpen ? "is-open" : ""}
          disabled={modalOpen}
        >
          モーダル開く
        </button>

        {modalOpen && (
          <ModalPortal>
            <ModalOverlay handleCloseClick={() => setModalOpen(false)} />
          </ModalPortal>
        )}
      </div>
    </>
  );
};

export default Modal;
