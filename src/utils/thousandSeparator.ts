import { SetStateAction } from "react";

function addCommas(num :string | number) :string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function removeCommas(num :string | number | SetStateAction<Number>) :string {
  return num.toString().replace(",", " ")
}

function removeNonNumeric(num: string | number) :string {
  return num.toString().replace(/[^0-9]/g, "");
}

function thousandSeparator(num: string | number) :string {
  return addCommas(removeNonNumeric(num))
}

export {thousandSeparator, removeCommas}