import React from 'react'
import FeedbackBoard from '../feedbackBoard/FeedbackBoard'
import LeftControls from '../leftControls/LeftControls'
import RoadMap from '../roadmap/RoadMap'

export default function () {
  return (
    <div>
        <FeedbackBoard />
      <LeftControls />
      <RoadMap />
    </div>
  )
}
