import React, { useState, useEffect } from 'react'
import './Section4.css'

function Section4() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    days: 15,
    minutes: 59,
    seconds: 30
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, days, minutes, seconds } = prev
        
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
          seconds = 59
        }
        
        return { hours, days, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="section4-container">
      <div className="section4-content">
        <span className="section4-subtitle">Kategoriyalar</span>
        <h2 className="section4-title">Musiqa tajribangizni yaxshilang</h2>
        <div className="section4-timer">
          <div className="section4-time-box">
            <span className="section4-time-value">{String(timeLeft.days).padStart(2, '0')}</span>
            <p className="section4-time-label">Kun</p>
          </div>
          <div className="section4-time-box">
            <span className="section4-time-value">{String(timeLeft.hours).padStart(2, '0')}</span>
            <p className="section4-time-label">Soat</p>
          </div>
          <div className="section4-time-box">
            <span className="section4-time-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <p className="section4-time-label">Daqiqa</p>
          </div>
          <div className="section4-time-box">
            <span className="section4-time-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <p className="section4-time-label">Soniya</p>
          </div>
        </div>
        <button className="section4-btn">Sotib olish</button>
      </div>

      <div className="section4-image-wrapper">
        <img src="/imgs/music.png" alt="Music Speaker" className="section4-image" />
        <div className="shadow"></div>
      </div>
    </div>
  )
}

export default Section4
