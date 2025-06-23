import { useState } from 'react'

export default function Content() {
    return (
        <div className='card'>
            <div className='card-title'>
            <h3>Online & In-person Tutoring for:</h3>
            </div>
            <div className='card-content'>
                <ul>
                    <li>SAT/ACT Math</li>
                    <li>Pre-Algebra 1 & 2</li>
                    <li>Geometry</li>
                    <li>Pre-Calculus</li>
                    <li>Statistics</li>
                    <li>Computer Science
                    <ul>&#9702; With Bachelor's Degree</ul>
                    </li>
                </ul>
                <img src='books.png' />
            </div>
            <div className='bio'>
                <span>&#8226;</span>
                <p>With 4 years of experience, helping build confidence in math and tailoring lessons to suit each student's individual needs</p>
                <span>&#8226;</span>
            </div>
        </div>
    )
}