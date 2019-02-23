import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { VictoryChart, VictoryBar, VictoryTheme, VictoryPolarAxis } from 'victory'

@inject('albumStore')
@observer
class SongInfo extends Component {
  render() {
    const { albumStore } = this.props

    const chartData = [
      { feature: 'acousticness', value: albumStore.songToDisplay.acousticness },
      { feature: 'danceability', value: albumStore.songToDisplay.danceability },
      { feature: 'energy', value: albumStore.songToDisplay.energy },
      { feature: 'instrumentalness', value: albumStore.songToDisplay.instrumentalness },
      { feature: 'liveness', value: albumStore.songToDisplay.liveness },
      { feature: 'speechiness', value: albumStore.songToDisplay.speechiness },
      { feature: 'valence', value: albumStore.songToDisplay.valence }
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
