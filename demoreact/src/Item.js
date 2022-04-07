function Item(props) {
    return (
        <p><button onClick={function () { props.apertou(props.children) }}>{props.children}</button></p>
    );
}
export default Item;