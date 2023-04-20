const useConfirm = (message = "", callback) => {
    if (typeof callback !== "function") {
      return;
    }
    const confirmAction = () => {
      if (window.confirm(message)) {
        callback();
      }
    };
    return confirmAction;
  };

  export default useConfirm;