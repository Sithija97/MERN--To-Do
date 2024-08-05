export const isEmptyString = (param: string) => {
  let isEmpty = false;
  param.length === 0 ? (isEmpty = true) : (isEmpty = false);
  return isEmpty;
};
