import React, { Component } from 'react'

export default class Filtros extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            
            <div className="col s12 m12 l3">
              <nav className="search-title-filter">
                <div className="nav-wrapper">
                  <form>
                    <div className="input-field">
                      <input id="search" type="search" required />
                      <label for="search"><i className="material-icons">search</i></label>
                      <i className="material-icons">close</i>
                    </div>
                  </form>
                </div>
              </nav>
              <ul className="collapsible" data-collapsible="expandable">
                <li className="">
                  <div className="collapsible-header active"><i className="material-icons">event_note</i>Date</div>
                  <div className="collapsible-body filter-container" >
                    <form action="#">
                      <ul>
                        <li>
                          <input className="with-gap" name="group1" type="radio" id="Today" />
                          <label for="Today">Today</label>
                        </li>
                        <li>
                          <input className="with-gap" name="group1" type="radio" id="week" />
                          <label for="week">This week</label>
                        </li>
                        <li>
                          <input className="with-gap" name="group1" type="radio" id="month" selected />
                          <label for="month">This month</label>
                        </li>
                        <li>
                          <input className="with-gap" name="group1" type="radio" id="year" />
                          <label for="year">This year</label>
                        </li>
                        <li>
                          <input className="with-gap" name="group1" type="radio" id="Custom" />
                          <label for="Custom">Custom date</label>
                        </li>
                      </ul>
        
        
                    </form>
                  </div>
                </li>
                <li className="">
                  <div className="collapsible-header active"><i className="material-icons">local_activity</i>Styles</div>
                  <div className="collapsible-body " >
                    <p>
                      <select multiple>
        
                      <option value="1" selected>Lindy Hop</option>
                      <option value="2" selected>Blues</option>
                      <option value="3" selected>Balboa</option>
                      <option value="3" selected>Jazz</option>
                      <option value="3" selected>Shag</option>
                      <option value="3" selected>Charleston</option>
                      <option value="3" selected>Other</option>
                    </select>
                      <label>Materialize Select</label>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header active"><i className="material-icons">pin_drop</i>Country</div>
                  <div className="collapsible-body">
                    <p><select id="country-select"></select>
                      <label>Optgroups</label></p>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header active"><i className="material-icons">label</i>Event type</div>
                  <div className="collapsible-body filter-container">
        
                    <ul>
                      <li>
                        <input type="checkbox" name="event-type-filter" className="event-type-filter filled-in" id="socials" checked="checked" value="social" />
                        <label for="socials">Socials</label>
                      </li>
                      <li>
                        <input type="checkbox" name="event-type-filter" className="event-type-filter  filled-in" id="classNamees" checked="checked" value="className" />
                        <label for="classNamees">classNamees</label>
                      </li>
                      <li>
                        <input type="checkbox" name="event-type-filter" className="event-type-filter filled-in" id="festival-event" checked="checked" value="festival" />
                        <label for="festival-event">Festivals & events</label>
                      </li>
                    </ul>
        
                  </div>
                </li>
              </ul>
        
            </div>
 
        
        )
    }

}

Filtros.PropTypes = {

}