import './ArtCard.css';
import { useState } from 'react';

function ArtCard({ title, description }) {

    return (
        <div className="art-card">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default ArtCard;