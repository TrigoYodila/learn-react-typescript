type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

// type ToastProps = {
//     position:`${HorizontalPosition}-${VerticalPosition}`
// }

//exclure certaines combinaisons
type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

export const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>;
};
