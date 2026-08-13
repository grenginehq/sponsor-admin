import type { IconNames } from "./icon";

export type Route = {
  path: string;
  text: string;
  icon: IconNames;
};

export type ButtonType = "submit" | "reset" | "button";
export type ButtonVariant = "primary" | "secondary";
export type PillVariant = "success" | "pending" | "failed";
