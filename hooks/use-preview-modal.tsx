// hooks/use-preview-modal.ts
import { Product } from "@/types";
import { create } from "zustand";

interface PreviewModalStore {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set, get) => ({
  isOpen: false,
  data: undefined,

  onOpen: (data) => {
    const { isOpen } = get();
    if (!isOpen) {
      console.log("Opening modal with:", data);
      set({ isOpen: true, data });
    }
  },

  onClose: () => {
    const { isOpen } = get();
    if (isOpen) {
      console.log("Closing modal");
      set({ isOpen: false, data: undefined });
    }
  },
}));

export default usePreviewModal;
