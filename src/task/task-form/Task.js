export default function Task(props) {
    const style = {
        transform: 'rotate(90deg)',
        transition: 'transform 150ms ease',
        display: 'block',
        width: '70%',
        height: '4%',
        left: '-33%',
        top: '40%',
    };
    return (
        <div
            className="w-100 p-3 h-25 d-inline-block position-relative"
            style={{ backgroundColor: 'white' }}>
            <hr style={style} className="position-absolute bg-success" />
            <h4 className="position-absolute bottom-75 end-0 w-75 p-3">name</h4>
            <p className="position-absolute top-0 end-0">HR-421</p>
            <p className="position-absolute top-0 start-0 d-block ms-3">Type</p>
            <div className="position-absolute bottom-0 end-0 p-3 mb-2 ms-5 w-100 ">
                descriptionh rtrth wef wer qt reg dfbd erg df ggr erhe dfg
                reg...
            </div>
        </div>
    );
}
