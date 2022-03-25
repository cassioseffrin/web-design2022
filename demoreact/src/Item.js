function Item(props) {
    return (
        <p><button onClick={function () { props.apertou('teste') }}  >{props.children}</button></p>
    );
}

export default Item;