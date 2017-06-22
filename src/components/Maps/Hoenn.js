import React, {Component} from 'react'
import ReactTooltip from 'react-tooltip'

export default class Hoenn extends Component {
  constructor() {
    super()

    this.state = {
      selected: null,
      key: Date.now()
    }

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.matchedAreas !== nextProps.matchedAreas) {
      this.setState({ key: Date.now() })
    }
  }

  render() {
    const {
      selectedArea, setSelectedArea, matchedAreas, mode
    } = this.props

    return (
      <div key={this.state.key}>
        <ReactTooltip />
        <div className="route-101" data-tip="Route 101" style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '201px',
          left: '91px',
          width: '9px',
          height: '8px',
          backgroundColor: mode === 0 ? selectedArea.indexOf('route-101') >= 0 ? 'indianred' : ''
            : matchedAreas && matchedAreas.indexOf('route-101') >= 0 ? 'indianred' : '' ,
          animation: mode === 0 ? selectedArea.indexOf('route-101') >= 0 ? 'pulse 2s infinite' : ''
            : matchedAreas && matchedAreas.indexOf('route-101') >= 0 ? 'pulse 2s infinite' : ''
        }} onClick={(e) => {
          if (mode === 1) return
          if (e.stopPropagation) e.stopPropagation()
          setSelectedArea(['route-101'])
        }}>
        </div>

      </div>
    )
  }
}