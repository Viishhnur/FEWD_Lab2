import React, { use } from 'react';
import { useState , useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SearchPage() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const query = params.get('term') || '';

    return (
        <div>
            <h1>Search Results</h1>
            <p>You searched for: <strong>{query}</strong></p>
            <p>Here you can display the search results based on the query.</p>
        </div>
    )
}