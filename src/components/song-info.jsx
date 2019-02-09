import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { VictoryChart, VictoryBar, VictoryTheme, VictoryPolarAxis } from 'victory'

@observer class SongInfo extends Component {
  constructor(props) {
    super(props)
    const { songsStore } = this.props

    // this.state = {
    //   sampleData: [
    //     {feature: 'acousticness', value: songsStore.songToDisplay.acousticness},
    //     {feature: 'danceability', value: songsStore.songToDisplay.danceability},
    //     {feature: 'energy', value: songsStore.songToDisplay.energy},
    //     {feature: 'instrumentalness', value: songsStore.songToDisplay.instrumentalness},
    //     {feature: 'liveness', value: songsStore.songToDisplay.liveness},
    //     {feature: 'speechiness', value: songsStore.songToDisplay.speechiness},
    //     {feature: 'valence', value: songsStore.songToDisplay.valence}
    //   ]
    // }
  }
  

  render() {
    const { songsStore } = this.props
    // const { sampleData } = this.state

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
          polar
          theme={VictoryTheme.material}
          padding={30}
          width={220}
          height={220}
        >
          {
            ['acousticness', 'danceability', 'energy', 'instrumentalness', 'liveness',
            'speechiness', 'valence'].map((d, i) => {
              return (
                <VictoryPolarAxis 
                  key={i}
                  label={d}
                  labelPlacement="perpendicular"
                  // tickValues={[0.25, 0.5, 0.75, 1]}
                  style={{ 
                    // tickLabels: { fill: "none" },
                    // labels: { fontSize: '18px' }
                    tickLabels: { fill: '#CDB380'}
                  }}
                  axisValue={i}
                />
              )
            }
            )
          }
          <VictoryBar
            style={{ 
              data: { 
                fill: 'tomato', 
                width: 25 
              } 
            }}
            data={sampleData}
            x='feature'
            y='value'
          />
        </VictoryChart>
      </div>
    )
  }
}

export default SongInfo