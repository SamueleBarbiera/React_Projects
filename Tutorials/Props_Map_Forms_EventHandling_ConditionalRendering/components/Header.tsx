const Header = ({ titolo }: { titolo: String }) => {
    //PASSAGGIO DEI PROPS+
        return (
        <div>
            <h1 style={headerCSS}>{titolo}</h1>
        </div>
    )
}

const headerCSS = {
    color: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export default Header
