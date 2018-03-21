import React, { Component } from 'react';

const CharSelect = () => {
    return <div>
        <img src="/images/monster-1.png" />
        <img src="/images/monster-2.png" />
        <img src="/images/monster-3.png" />
        <img src="/images/monster-4.png" />
        <br />
        <button type="button" className="btn charBtn btn-info">
            character one
       </button>
        <button type="button" className="btn charBtn btn-info">
            character two
       </button>
        <button type="button" className="btn charBtn btn-info">
            character three
       </button>
        <button type="button" className="btn charBtn btn-info">
            character four
       </button>
    </div>;

export default CharSelect;