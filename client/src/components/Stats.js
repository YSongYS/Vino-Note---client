import React from "react";
import API from "../API";
import { Statistic, Grid } from "semantic-ui-react";
import CalendarLog from "./CalendarLog";

// props: all_logs
class Stats extends React.Component {
  state = {
    fav_country: undefined,
    fav_variety: undefined
  };

  componentDidMount() {
    const userID = localStorage.getItem("user_id");
    API.getFavorites(userID, "favorite_wine_country").then(country =>
      this.setState({ fav_country: country })
    );

    API.getFavorites(userID, "favorite_wine_variety").then(variety =>
      this.setState({ fav_variety: variety })
    );
  }

  render() {
    const { all_logs } = this.props;
    const { fav_country, fav_variety } = this.state;

    return (
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width={1} />
          <Grid.Column width={14}>
            <CalendarLog all_logs={this.props.all_logs} />
            <p>
              <span style={{ fontWeight: 700, marginRight: "5px" }}>
                Number of Logs:{" "}
              </span>
              1 Log{" "}
              <span
                className="color_calendar"
                style={{ backgroundColor: "#f3e5e8" }}
              />
              2 Logs{" "}
              <span
                className="color_calendar"
                style={{ backgroundColor: "#d19aa6" }}
              />
              3 Logs{" "}
              <span
                className="color_calendar"
                style={{ backgroundColor: "#af4f64" }}
              />
              More than 4 Logs{" "}
              <span
                className="color_calendar"
                style={{ backgroundColor: "#8d0422" }}
              />
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={4}>
          <Grid.Column width={3}>
            <br />
            <Statistic size="huge">
              <Statistic.Value>
                {all_logs.length > 0 ? all_logs.length : "0️⃣"}
              </Statistic.Value>
              <Statistic.Label>
                <h1>Wine Logs</h1>
              </Statistic.Label>
            </Statistic>
            <br />
            <br />
            <br />
            <br />
          </Grid.Column>

          <Grid.Column width={6}>
            <br />
            <Statistic size="huge">
              <Statistic.Value>
                {fav_country ? fav_country : "🤔"}
              </Statistic.Value>
              <Statistic.Label>
                <h1>Favorite Wine Origin</h1>
              </Statistic.Label>
            </Statistic>
            <br />
            <br />
            <br />
            <br />
          </Grid.Column>

          <Grid.Column width={6}>
            <br />
            <Statistic size="huge">
              <Statistic.Value>
                {fav_variety ? fav_variety : "🤔"}
              </Statistic.Value>
              <Statistic.Label>
                <h1>Favorite Grape Variety</h1>
              </Statistic.Label>
            </Statistic>
            <br />
            <br />
            <br />
            <br />
          </Grid.Column>

          <Grid.Column width={1} />
        </Grid.Row>
      </Grid>
    );
  }
}

export default Stats;
