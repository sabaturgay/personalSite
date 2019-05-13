import React from 'react'
import { Button, Tabs, Tab } from 'react-bootstrap'
import PropTypes from 'prop-types'
import ForceGraph3D from '3d-force-graph'
import SpriteText from 'three-spritetext'

import { Wrapper, FormInput } from '../../../components'
import { utilAPI } from '../../../utils'

const { THREE } = window

class ForceGraphComponent extends React.Component {
  componentDidMount() {
    this.loadNodeImage()
    this.loadNodeText()
  }

  loadNodeImage = () => {
    const imgs = ['cat.jpg', 'dog.jpg', 'eagle.jpg', 'elephant.jpg', 'grasshopper.jpg', 'octopus.jpg', 'owl.jpg', 'panda.jpg', 'squirrel.jpg', 'tiger.jpg', 'whale.jpg']
    // Random connected graph
    const gData = {
      nodes: imgs.map((img, id) => ({ id, img })),
      links: [...Array(imgs.length).keys()]
        .filter(id => id)
        .map(id => ({
          source: id,
          target: Math.round(Math.random() * (id - 1)),
        })),
    }
    ForceGraph3D()(this.nodeImage)
      .nodeThreeObject(({ img }) => {
        // use a sphere as a drag handle
        const obj = new THREE.Mesh(
          new THREE.SphereGeometry(7),
          new THREE.MeshBasicMaterial({ depthWrite: false, transparent: true, opacity: 0 }),
        )
        // add img sprite as child
        const imgTexture = new THREE.TextureLoader().load(`./img/${img}`)
        const material = new THREE.SpriteMaterial({ map: imgTexture })
        const sprite = new THREE.Sprite(material)
        sprite.scale.set(12, 12)
        obj.add(sprite)
        return obj
      })
      .graphData(gData)
  }

  loadNodeText = () => {
    const graph = ForceGraph3D()(this.nodeText)
      .jsonUrl('/forceGraphTextData.json')
      .nodeAutoColorBy('group')
      .nodeThreeObject((node) => {
        // use a sphere as a drag handle
        const obj = new THREE.Mesh(
          new THREE.SphereGeometry(10),
          new THREE.MeshBasicMaterial({ depthWrite: false, transparent: true, opacity: 0 }),
        )
        // add text sprite as child
        const sprite = new SpriteText(node.id)
        sprite.color = node.color
        sprite.textHeight = 8
        obj.add(sprite)
        return obj
      })
    // Spread nodes a little wider
    graph.d3Force('charge').strength(-150)
  }

  render() {
    const {
      props: {
        isLoading, redirectPath, shouldRedirect, onClick,
      },
    } = this
    return (
      <Wrapper isLoading={isLoading}>
        <h2>ForceGraph</h2>
        <Tabs
          defaultActiveKey="node-image"
        >
          <Tab
            eventKey="node-image"
            title="Node as Image"
            key="node-image"
          >
            <div
              ref={(c) => { this.nodeImage = c }}
            />
          </Tab>
          <Tab
            eventKey="node-text"
            title="Node as Text"
            key="node-text"
          >
            <div
              ref={(c) => { this.nodeText = c }}
            />
          </Tab>
        </Tabs>

        {utilAPI.redirect(redirectPath, shouldRedirect)}
      </Wrapper>
    )
  }
}

ForceGraphComponent.propTypes = {
  isLoading: PropTypes.bool,
  redirectPath: PropTypes.string,
  shouldRedirect: PropTypes.bool,
  onClick: PropTypes.func,
}
ForceGraphComponent.defaultProps = {
  isLoading: false,
  redirectPath: '',
  shouldRedirect: false,
  onClick: () => console.log('button clicked'),
}


export default ForceGraphComponent
