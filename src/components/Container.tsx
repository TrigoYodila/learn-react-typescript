type ContainerProps = {
    styles:React.CSSProperties
}


export const Container = ({styles}:ContainerProps) => {  //destruration du props
    return (
        <div style={styles}>
            Text content goes here
        </div>
    )
}