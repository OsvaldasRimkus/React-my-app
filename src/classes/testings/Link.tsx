import * as React from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

interface LinkState {
  class: any
}

interface LinkProps {
  text: string,
  page: string,
}

export default class Link extends React.Component<LinkProps, LinkState> {
  constructor(props: any) {
    super(props);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      class: STATUS.NORMAL,
    };
  }

  private onMouseEnter() {
    this.setState({class: STATUS.HOVERED});
  }

  private onMouseLeave() {
    this.setState({class: STATUS.HOVERED});
  }

  render() {
    return (
      <a
        className={this.state.class}
        href={this.props.page || '#'}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {this.props.text}
      </a>
    );
  }
}