export const chartColors = {
  red:    'rgb(255,  99, 132)',
  orange: 'rgb(255, 159,  64)',
  yellow: 'rgb(255, 205,  86)',
  green:  'rgb( 75, 192, 192)',
  blue:   'rgb( 54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey:   'rgb(201, 203, 207)',
}

export const randomScalingFactor = () => Math.round(Math.random() * 100)

export const reloadData = model => {
  model.loaded = false
  model.getData()
}

export const randomizeData = model => {
  model.config.data.datasets.forEach(dataset => {
    dataset.data = dataset.data.map(() => randomScalingFactor())
  })
  model.instance.update()
}
