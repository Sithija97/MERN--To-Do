import { AddEditNotes, Navbar, NoteCard } from "components";
import { AddEditModalType } from "enums";
import { useState } from "react";
import { MdAdd } from "react-icons/md";
import Modal from "react-modal";

export const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: AddEditModalType.ADD,
    data: null,
  });

  const openAddModal = () => {
    setOpenAddEditModal({
      isShown: true,
      type: AddEditModalType.ADD,
      data: null,
    });
  };

  const closeAddModal = () => {
    setOpenAddEditModal({
      isShown: false,
      type: AddEditModalType.ADD,
      data: null,
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4 mt-8">
          <NoteCard
            title="Meeting on 7th April"
            date="3rd April"
            content="Meeting on 7th April Meeting on 7th April"
            tags="#Meeting"
            isPinned
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
          <NoteCard
            title="Meeting on 7th April"
            date="3rd April"
            content="Meeting on 7th April Meeting on 7th April"
            tags="#Meeting"
            isPinned
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
          <NoteCard
            title="Meeting on 7th April"
            date="3rd April"
            content="Meeting on 7th April Meeting on 7th April"
            tags="#Meeting"
            isPinned
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
          <NoteCard
            title="Meeting on 7th April"
            date="3rd April"
            content="Meeting on 7th April Meeting on 7th April"
            tags="#Meeting"
            isPinned
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={openAddModal}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-auto"
        ariaHideApp={false}
      >
        <AddEditNotes type={openAddEditModal.type} close={closeAddModal} />
      </Modal>
    </>
  );
};
