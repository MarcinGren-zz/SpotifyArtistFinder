import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { VictoryChart, VictoryBar, VictoryTheme, VictoryPolarAxis } from 'victory'

@inject('songsStore')
@observer
class SongInfo extends Component {
  render() {
    const { songsStore } = this.props

    const chartData = [
      { feature: 'acousticness', value: songsStore.songToDisplay.acousticness },
      { feature: 'danceability', value: songsStore.songToDisplay.danceability },
      { feature: 'energy', value: songsStore.songToDisplay.energy },
      { feature: 'instrumentalness', value: songsStore.songToDisplay.instrumentalness },
      { feature: 'liveness', value: songsStore.songToDisplay.liveness },
      { feature: 'speechiness', value: songsStore.songToDisplay.speechiness },
      { feature: 'valence', value: songsStore.songToDisplay.valence }
    ]

    return (
      <div className="si__container">
        <VictoryChart
          polar
          theme={VictoryTheme.material}
          padding={30}
          width={220}
          height={220}
        >
          {chartData.map((d, i) => (
            <VictoryPolarAxis
              key={i}
              label={d.feature}
              labelPlacement="perpendicular"
              style={{
                tickLabels: { fill: '#CDB380' }
              }}
              axisValue={i}
            />
          ))}
          <VictoryBar
            style={{
              data: {
                fill: 'tomato',
                width: 25
              }
            }}
            data={chartData}
            x="feature"
            y="value"
          />
        </VictoryChart>
      </div>
    )
  }
}

export default SongInfo
