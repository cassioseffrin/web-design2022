function Menu(props) {
    return (

        <nav>
            <ul style={{ listStyle: 'none' }}>
                {props.children}
            </ul>
        </nav>
    );
}
export default Menu;