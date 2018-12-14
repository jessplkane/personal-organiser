import React, { Component } from "react";
import Page from "./components/Page";
import CalendarContainer from "./components/Calendar";

class App extends Component {
  render() {
    return (
      <div>
        <Page>
          <CalendarContainer />
        </Page>
      </div>
    );
  }
}

export default App;
