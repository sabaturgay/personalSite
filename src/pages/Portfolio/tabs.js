import AframeCharts from './AframeCharts'
import C3 from './C3'
import ForceGraph from './ForceGraph'
import Nivo from './Nivo'
import Recharts from './Recharts'
import SolidAuth from './SolidAuth'
import Victory from './Victory'
import WebDataRocks from './WebDataRocks'
import FirebaseAuth from './FirebaseAuth'

export default {
  DataVisualization: {
    C3: {
      Component: C3,
    },
    Nivo: {
      Component: Nivo,
    },
    WebDataRocks: {
      Component: WebDataRocks,
    },
    Victory: {
      Component: Victory,
    },
    Recharts: {
      Component: Recharts,
    },
    ForceGraph: {
      Component: ForceGraph,
    },
    AframeCharts: {
      Component: AframeCharts,
    },
  },
  Authentication: {
    SolidAuth: {
      Component: SolidAuth,
    },
    FirebaseAuth: {
      Component: FirebaseAuth,
    },
  },
}
