import { Chart as ChartJS, defaults } from 'chart.js/auto'
import { Bar, Doughnut, Line } from 'react-chartjs-2'
import sourceData from './data/sourceData.json'
import revenueData from './data/revenueData.json'

defaults.maintainAspectRatio = true
defaults.responsive = true

defaults.plugins.title.display = true
defaults.plugins.title.align = 'start'
defaults.plugins.title.font.size = 20
defaults.plugins.title.color = 'black'

const App = () => {
  return (
    <div className='App'>
      <div>
        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: 'Revenue',
                data: revenueData.map((data) => data.revenue),
                backgroundColor: '#064FF0',
                borderColor: '#064FF0',
              },
              {
                label: 'Cost',
                data: revenueData.map((data) => data.cost),
                backgroundColor: '#FF3030',
                borderColor: '#FF3030',
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: 'Revenue Sources',
              },
            },
            elements: {
              line: {
                tension: 0.5,
              },
            },
          }}
        />
        <Bar
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: 'Count',
                data: sourceData.map((data) => data.value),
                backgroundColor: ['blue', 'red', 'yellow'],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: 'Revenue Sources',
              },
            },
          }}
        />
        <Doughnut
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: 'Count',
                data: sourceData.map((data) => data.value),
                backgroundColor: ['blue', 'red', 'yellow'],
                borderColor: ['blue', 'red', 'yellow'],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: 'Revenue Sources',
              },
            },
          }}
        />
      </div>
    </div>
  )
}

export default App
