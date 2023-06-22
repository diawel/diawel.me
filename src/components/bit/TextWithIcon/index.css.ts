import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5em",
})

export const icon = style({
  width: "1.35em",
  height: "1.35em",
  objectFit: "contain",
})