import React from 'react'
import { RoadMapContainer, TitleContainerRoadMap, TaskRoadMap, Planned, InProgress, Live } from './RoadMap.style'

export default function () {
  return (
    <RoadMapContainer>
        <TitleContainerRoadMap>
             <h3>Roadmap</h3>
            <a href='/'>View</a>
        </TitleContainerRoadMap>
        <TaskRoadMap>
            <Planned>
                <ul>
                    <li>
                        Planned
                    </li>
                </ul>
                <p>3</p>
            </Planned>
            <InProgress>
                <ul>
                    <li>
                        InProgress
                    </li>
                </ul>
                <p>2</p>
            </InProgress>
            <Live>
                <ul>
                    <li>
                        Live
                    </li>
                </ul>
                <p>3</p>
            </Live>
           
        </TaskRoadMap>
    </RoadMapContainer>
  )
}
