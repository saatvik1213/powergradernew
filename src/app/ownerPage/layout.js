"use client";
import React, { useState, useEffect } from 'react';

const OwnerPageLayout = () => {
    const [classes, setClasses] = useState([]);
    const [newClass, setNewClass] = useState('');

    // Fetch classes from the database (placeholder function)
    const fetchClasses = async () => {
        try {
            const response = await fetch('/api/classes'); // Update with actual API endpoint
            const data = await response.json();
            setClasses(data);
        } catch (error) {
            console.error('Error fetching classes:', error);
        }
    };

    // Save a new class to the database
    const saveClass = async (className) => {
        try {
            const response = await fetch('/api/classes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: className, grader: '' }),
            });
            const newClass = await response.json();
            setClasses([...classes, newClass]); // Add to state after successful save
        } catch (error) {
            console.error('Error saving class:', error);
        }
    };

    // Add a class to the list and database
    const addClass = () => {
        if (newClass.trim() !== '') {
            //saveClass(newClass);
            setNewClass('');
        }
    };

    // Update grader email for a specific class
    const assignGrader = (index, email) => {
        const updatedClasses = classes.map((cls, i) => 
            i === index ? { ...cls, grader: email } : cls
        );
        setClasses(updatedClasses);
        updateGrader(classes[index].id, email); // Persist to database
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-5">
            <h1 className="text-3xl font-bold text-center mb-8">Owner Page</h1>

            {/* Add Class Section */}
            <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mb-10">
                <input 
                    type="text" 
                    placeholder="Enter class name" 
                    value={newClass} 
                    onChange={(e) => setNewClass(e.target.value)} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                    onClick={addClass} 
                    className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                >
                    Add Class
                </button>
            </div>

            {/* Classes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {classes.map((cls, index) => (
                    <div key={index} className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
                        <h2 className="text-xl font-semibold mb-4 text-center">{cls.name}</h2>
                        <input 
                            type="email" 
                            placeholder="Enter grader email" 
                            value={cls.grader} 
                            onChange={(e) => assignGrader(index, e.target.value)} 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        />
                        <p className="text-center text-gray-600">Grader: {cls.grader || 'Not assigned'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OwnerPageLayout;
