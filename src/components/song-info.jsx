import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { VictoryChart, VictoryBar, VictoryTheme } from 'victory'

@observer class SongInfo extends Component {
  constructor(props) {
    super(props)

  }
  

  render() {
    const { songsStore } = this.props

    const sampleData = [
      {feature: 'acousticness', value: songsStore.songToDisplay.acousticness},
      {feature: 'danceability', value: songsStore.songToDisplay.danceability},
      {feature: 'energy', value: songsStore.songToDisplay.energy},
      {feature: 'instrumentalness', value: songsStore.songToDisplay.instrumentalness},
      {feature: 'liveness', value: songsStore.songToDisplay.liveness},
      {feature: 'speechiness', value: songsStore.songToDisplay.speechiness},
      {feature: 'valence', value: songsStore.songToDisplay.valence}
    ]

    return (
      <div className='si__container'>
        <VictoryChart
          // theme={VictoryTheme.material}
          // domainPadding={{ y: 10 }}
          domain={{x: [0, 1] }}
          // height={250}
        >
          <VictoryBar horizontal
            style={{
              data: { fill: '#c4a12'}
            }}
            data={sampleData}
            x='feature'
            y='value'
            width='80%'
          />
        </VictoryChart>
      </div>
    )
  }
}

export default SongInfo