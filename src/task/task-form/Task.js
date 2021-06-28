export default function Task({ name, status, id, description, type }) {
    const style = {
        backgroundColor: 'black',
        width: '10px',
        height: '90%',
    };
    const task = {
        backgroundColor: '#ffffff',
        display: 'flex',
        borderRadius: '5px',
        position: 'relative',
    };
    const formatDisplay = () => {};
    const getStringColor = () => {};
    return (
        <div className="w-100 p-3 h-25 mt-2" style={task}>
            <hr style={style} className="bg-success" />
            <h6
                className="position-relative top-50 start-50 translate-middle mt-1"
                style={{ width: '40%', margin: 0, padding: 0 }}>
                {name}
            </h6>
            <h6 className="position-absolute ms-3">{id}</h6>
            <h6
                className="position-absolute top-0 start-100 translate-middle mt-3 me-4"
                style={{ marginLeft: '-8%' }}>
                {type}
            </h6>
            <p
                className="position-relative"
                style={{ top: '50%', right: '20%', width: '100%' }}>
                <b>description:</b> {description}
            </p>
        </div>
    );
}
