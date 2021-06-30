import { NavLink } from 'react-router-dom';
import React from 'react';

export default function Task({ name, status, id, description, type }) {
    let nameToDisplay = name;
    let idToDisplay = id.toString().substr(0, 4) + '...';
    let descriptionToDisplay = description;
    const task = {
        backgroundColor: '#ffffff',
        display: 'flex',
        borderRadius: '5px',
        position: 'relative',
    };
    const formatDisplay = () => {
        if (name.length > 30) {
            nameToDisplay = name.substr(0, 30) + '...';
        }
        if (description.length > 40) {
            descriptionToDisplay = description.substr(0, 40) + '...';
        }
    };
    const getStringColor = () => {
        if (type === 'QA') {
            return '#ded388';
        }
        if (type === 'Dev') {
            return '#9a65fc';
        }
        if (type === 'Feature') {
            return '#46ec4e';
        }
        if (type === 'Epic') {
            return '#f87092';
        }
    };
    const style = {
        width: '10px',
        height: '90%',
        backgroundColor: getStringColor(),
    };
    formatDisplay();
    return (
        <NavLink
            to={`/edit/` + id}
            exact
            style={{
                textDecoration: 'none',
                color: 'black',
            }}>
            <div className="w-100 p-3 h-25 mt-2" style={task}>
                <hr style={style} />
                <h6
                    className="position-relative top-50 start-50 translate-middle mt-2"
                    style={{ width: '100%', margin: 0, padding: 0 }}
                    onClick={console.log('testdd')}>
                    {nameToDisplay}
                </h6>
                <h6 className="position-absolute ms-3">{idToDisplay}</h6>
                <h6
                    className="position-absolute top-0 start-100 translate-middle mt-3 me-4"
                    style={{ marginLeft: '-8%' }}>
                    {type}
                </h6>
                <p
                    className="position-relative"
                    style={{ top: '50%', right: '30%', width: '100%' }}>
                    <b>description:</b> {descriptionToDisplay}
                </p>
            </div>
        </NavLink>
    );
}
