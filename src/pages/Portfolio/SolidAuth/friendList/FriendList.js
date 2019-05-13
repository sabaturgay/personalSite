import React, {Component} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import List from "@material-ui/core/List";

import Friend from "./friend";
import Typography from "@material-ui/core/Typography";

export default class FriendList extends Component {

  static defaultProps = {
    friends: [], // list of all the friends to be shown
    height: 300,
    showInitially: 10, // number  of friends to show initially
    fetchCount: 5 // number of friends to fetch at a time, when scrolling through the list
  };

  state = {
    items: this.props.friends.slice(0, this.props.showInitially),
    hasMore: this.props.friends.length > this.props.showInitially
  };

  fetchMoreData = () => {
    const allFriends = this.props.friends;
    const shownFriends = allFriends.slice(0, this.state.items.length + this.props.fetchCount);
    this.setState({
      items: shownFriends,
      hasMore: shownFriends.length < allFriends.length
    });
  };

  render() {
    return (
        <List dense>
          <InfiniteScroll
              dataLength={this.state.items.length}
              next={this.fetchMoreData}
              hasMore={this.state.hasMore}
              loader={<h4>Loading...</h4>}
              height={this.props.height}
          >
            {this.state.items.map((webId) => (
                <Friend key={webId.toString()} webId={webId}/>
            ))}
          </InfiniteScroll>
          <Typography variant="caption" style={{margin: 10}}>
            {this.state.items.length} / {this.props.friends.length} shown. {this.state.hasMore ? 'Scroll to load more.' : "That's all."}
          </Typography>
        </List>
    );
  }
}
