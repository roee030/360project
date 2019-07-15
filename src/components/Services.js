import React, { Component } from "react";
import { FaVrCardboard, FaCameraRetro, FaMoneyBillAlt, FaEye } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCameraRetro />,
        title: "Free photographer",
        info:
          "We provide our customers a photographer from us to photograph the whole structure."
      },
      {
        icon: <FaVrCardboard />,
        title: "VR Services",
        info:
          "We have the best 360 technology."
      },
      {
        icon: <FaMoneyBillAlt />,
        title: "Low cost advertising",
        info:
          "Just 1 Dollar to post your apartment."
      },
      {
        icon: <FaEye />,
        title: "Significant exposure",
        info:
          "Advertising the structure on our site earns the best advertising there is."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}