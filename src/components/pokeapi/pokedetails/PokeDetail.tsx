import React, { Component } from "react";
import { Table, Grid, Row, Col } from "react-bootstrap/lib/";
import { has, map as _map } from "lodash";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { RouteComponentProps } from "@reach/router";

import { fetchPokeData } from "services/fetchData";

import "./PokeDetail.scss";

interface State {
  activePage?: number;
  pokemon: {
    name: string;
    height: string | number;
    order: string | number;
    base_experience: string | number;
  };
  pokemonImages: {
    back_female?: string;
    back_shiny_female?: string;
    back_default?: string;
    front_female?: string;
    front_shiny_female?: string;
    back_shiny?: string;
    front_default?: string;
    front_shiny?: string;
  };
  photos: any[];
}

interface Props {
  id: string;
  pokemon: string;
}

export default class PokeDetail extends Component<RouteComponentProps<Props>> {
  public static propTypes = {
    id: PropTypes.array,
    pokemon: PropTypes.object
  };

  public state: State = {
    activePage: 0,
    pokemon: {
      name: "",
      height: "",
      order: "",
      base_experience: ""
    },
    pokemonImages: {},
    photos: []
  };

  public componentDidMount() {
    const { pokemon } = this.props;
    let pathName = "";

    if (pokemon) {
      pathName = pokemon;
    } else if (this.props.id) {
      pathName = this.props.id;
    } else {
      return;
    }

    fetchPokeData({ selectedPoke: pathName }).then(response => {
      this.setState({
        pokemon: response,
        pokemonImages: has(response.sprites, "back_default")
          ? response.sprites
          : []
      });

      this.renderImages();
    });
  }

  private renderImages() {
    const imgArr = _map(this.state.pokemonImages, (imgSrc: string) => {
      return imgSrc;
    });

    this.setState(() => {
      return {
        photos: imgArr
      };
    });
  }

  public render() {
    const { name, height, order, base_experience } = this.state.pokemon;

    return name ? (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={6}>
            <div className="carousel-pokedetail">
              <TransitionGroup>
                {this.state.photos.map((img, index) => (
                  <CSSTransition
                    key={img}
                    timeout={500}
                    classNames="item-fadein"
                  >
                    {img ? (
                      <img key={img} src={img} alt={`${name}-${index}`} />
                    ) : (
                      <span />
                    )}
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Table responsive={true}>
              <thead>
                <tr>
                  <th>{name.toUpperCase()}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Height</td>
                  <td>{height}</td>
                </tr>
                <tr>
                  <td>Order</td>
                  <td>{order}</td>
                </tr>
                <tr>
                  <td>Base Experience</td>
                  <td>{base_experience}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Grid>
    ) : null;
  }
}
