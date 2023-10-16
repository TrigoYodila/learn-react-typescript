type GreetProps = {
    name:string
    messageCount:number
    isLoggedIn:boolean
}

export const Greet = (props:GreetProps) => {
    return (
      <div>
        <h2>
            {
                props.isLoggedIn ? `Bienvenu ${props.name}! Tu as ${props.messageCount} messages non lues` : 'Bienvenu'
            }
        </h2>
      </div>
    );
} 