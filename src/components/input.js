import React, { Component } from 'react'

export default class input extends Component {
    render() {
        return (
            <>
            <div class="input-group mb-3">
            
            <div class="input-group-prepend">
              <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
            </div>
            <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"></input>
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Property Type</button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Buy</a>
              <div role="separator" class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Rent</a>
            </div>
            </div>
            
          </>
        )
    }
}
