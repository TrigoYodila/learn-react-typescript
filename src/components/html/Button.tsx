// type ButtonProps = {
//     variant:'primary' | 'secondary'
// } & React.ComponentProps<'button'>

//dire à typescript d'accepter les enfants en chaine de caractère et omettre les elts htmls
type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, 'children'>;


export const CustomButton = ({variant, children, ...rest}:ButtonProps) => {
    return <button className={`class-with-${variant}`} {...rest}>{children}</button>
}