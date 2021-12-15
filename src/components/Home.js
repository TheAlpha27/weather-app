import React from 'react'
import '../Styles/Home.css'
import sunny from '../Images/Sunny.png';

function Home() {
    return (
        <div className="container-fluid bg">
            <div className="container-fluid main">
                <div className="container contentBox">
                    <div className="upperhalf">
                        <div className="upleft">
                            <h1 className='city'>Jhansi</h1>
                            <h4 className='date'>December 15, 2021</h4>
                            <div className="weather">
                                <img src={sunny} alt="Weather" />
                                <span>Sunny</span>
                            </div>
                        </div>
                        <div className="upright">
                            <div className="currTemp">
                                <span>26&#176;</span>   
                            </div>
                            <div className="minmax">
                                <span className='min'>18&#176;</span>/<span className='max'>28&#176;</span>
                            </div>
                        </div>
                    </div>
                    <div className="lowerhalf">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit, similique asperiores quidem id harum quasi eveniet recusandae voluptas facilis alias autem pariatur, suscipit rem adipisci. Quidem voluptatum tempora eligendi minima, nesciunt ducimus cum, hic dignissimos suscipit, delectus nobis architecto aperiam libero. Eligendi corrupti incidunt maiores doloribus facilis quo, harum vero quaerat! Quis, rem veritatis quod aspernatur dolorum, esse ipsam iusto ab asperiores minima fugit dolores magni praesentium delectus? Maiores quidem provident, doloremque, necessitatibus inventore consequatur repellat, quod illo amet aut temporibus facere quae maxime corporis reprehenderit atque architecto. Delectus quos et ut consequatur ea necessitatibus magnam laborum ipsam quidem.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
