export const usePreventLeave = () => {
  const listener = e => {
    e.preventDefault();
    e.returnValue = '';
  };
  const checkLeave = () => window.addEventListener('beforeunload', listener);

  return { checkLeave };
};
