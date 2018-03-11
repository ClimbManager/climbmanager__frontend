import React from 'react';

const events = [
    {
        id: 0,
        img: 'http://climbingcenter.ru/images/I6lQcih0Ib4.jpg',
        title: 'TBB 2017',
        author: 'jill111',
        cols: 2,
    },
    {
        id: 1,
        img: 'http://climbingcenter.ru/images/I6lQcih0Ib4.jpg',
        title: 'TBB 2017',
        author: 'director90',
    },
    {
        id: 2,
        img: 'http://climbingcenter.ru/images/I6lQcih0Ib4.jpg',
        title: 'TBB 2017',
        author: 'Danson67',
    },
    {
        id: 3,
        img: 'http://climbingcenter.ru/images/I6lQcih0Ib4.jpg',
        title: 'TBB 2017',
        author: 'fancycrave1',
    },
    {
        id: 4,
        img: 'http://climbingcenter.ru/images/I6lQcih0Ib4.jpg',
        title: 'TBB 2017',
        author: 'Hans',
    },
];

/* eslint-disable react/prefer-stateless-function */
class Main extends React.Component {
    render() {
        return (
            <div>
                Climb Manager
                {events.map(event => (
                    <div>
                        <p>{event.title}</p>
                        <img src={event.img} width="200" alt={`Афиша соревнований ${event.title}`} />
                    </div>
                ))}
            </div>
        );
    }
}

export default Main;
