import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { VictoryChart, VictoryBar, VictoryTheme, VictoryPolarAxis } from 'victory'

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
        {/* <VictoryChart
          // theme={VictoryTheme.material}
          domainPadding={{ y: 80 }}
          domain={{x: [0, 1] }}
          style={{ labels: { display: 'none' }}}
          // padding={{ left: 40 }}
          // height={250}
        >
        <VictoryBar horizontal
          style={{
            data: { 
              fill: '#790579',
              fillOpacity: 0.8
            },
            labels: { 
              fill: '#2E0C45',
              fontSize: '18px'
            }
          }}
          data={sampleData}
          labels={(d) => d.feature}
          x='feature'
          y='value'
          // width='80%'
        />
        </VictoryChart> */}

        <VictoryChart polar
          theme={VictoryTheme.material}
          padding={30}
          width={220}
          height={220}
        >
          {
            sampleData.map((d, i) => {
              return (
                <VictoryPolarAxis
                  key={i}
                  label={d.feature}
                  labelPlacement="perpendicular"
                  tickValues={[0.25, 0.5, 0.75, 1]}
                  style={{ 
                    // tickLabels: { fill: "none" },
                    // labels: { fontSize: '18px' }
                  }}
                  axisValue={i}
                />
              )
            })
          }
          <VictoryBar
            style={{ data: { fill: "tomato", width: 25 } }}
            data={sampleData}
            x='feature'
            y='value'
            // data={[
            //   { x: 0, y: 10 },
            //   { x: 1, y: 25 },
            //   { x: 2, y: 40 },
            //   { x: 3, y: 50 },
            //   { x: 4, y: 50 }
            // ]}
          />
        </VictoryChart>

      </div>
    )
  }
}

export default SongInfo