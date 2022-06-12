import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Media = {
  Desktop: "@media(max-width:1189px)",
  Tablet: "@media(max-width:768px)",
  MobileL: "@media(max-width:550px)",
  MobileM: "@media(max-width:375px)",
};
const Iframe = styled.div`
  iFrame {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 100px;
    border-radius: 10px;
    margin-bottom: 100px;
    ${Media.Tablet} {
      max-width: 400px;
      height: 350px;
    }
    ${Media.MobileL} {
      max-width: 250px;
      height: 200px;
    }
    ${Media.MobileM} {
      max-width: 150px;
      height: 100px;
    }
  }
`;
const YoutubeEmbed = ({ embedId }) => (
  <Iframe>
    <iframe
      width="560"
      height="315"
      src={"https://www.youtube.com/embed/8GGGliIxpgc/${embedId}"}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      tittle="Embedded video"
    ></iframe>
  </Iframe>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
