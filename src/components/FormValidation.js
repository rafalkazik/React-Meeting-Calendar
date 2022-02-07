export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);

export const validDate = new RegExp("([0-9]{4})-([0-9]{2})-([0-9]{2})");

export const validTime = new RegExp("([0-9]{2}):([0-9]{2})");
