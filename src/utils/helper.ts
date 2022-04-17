export const trimString = (str: string) => {
  return str.length < 20 ? str : str.slice(0, 20) + "...";
};

export const convertPriceToNaira = (price: string | number) => {
  const options = { style: "currency", currency: "NGN" };
  return new Intl.NumberFormat("en-NG", options).format(100 * Number(price));
};
