import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function QuestionSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchQuestions = useCallback(async () => {
        setLoading(true);
        setQuestions([]);
        try {
            const response = await axios.get('http://localhost:3001/getQues', {
                params: { search: searchTerm }
            });
            setQuestions(response.data);
        } catch (error) {
            console.error("Error fetching questions:", error);
        }
        setLoading(false);
    }, [searchTerm]);

    useEffect(() => {
        fetchQuestions();
    }, [fetchQuestions]);

    return (
        <div>
            <h1>Search Questions</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for a question..."
            />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {questions.length === 0 ? (
                        <li>No questions found</li>
                    ) : (
                        questions.map((question) => (
                            <li key={question._id}>
                                <strong>{question.title}</strong>: {question.type}
                            </li>
                        ))
                    )}
                </ul>
            )}
        </div>
    );
}

export default QuestionSearch;
