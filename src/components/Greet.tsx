type GreetProps = {
    name:string
    messageCount?:number //accessoires facultatifs
    isLoggedIn:boolean
}

export const Greet = (props:GreetProps) => {
    //props par défaut
    const { messageCount = 0 } = props;
    return (
      <div>
        <h2>
            {
                props.isLoggedIn ? `Bienvenu ${props.name}! Tu as ${messageCount} messages non lues` : 'Bienvenu'
            }
        </h2>
      </div>
    );
} 