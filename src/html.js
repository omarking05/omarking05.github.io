import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="stylesheet" type="text/css" href="https://www.botme.com/plugin/widget.css"/>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <div id="botme-plugin"></div>
        <script src="https://www.botme.com/plugin/widget.js"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            var options = {"header_logo":"https://botme.s3.us-east-2.amazonaws.com/650eeab257207f59a19a3dee1a0d49bb.jpeg","header_color":"#ffffff","bot_side_color":"#f2f2f5","user_side_color":"#5badf0","font_family":"#000000","header_font_color":"#000000","bot_font_color":"#000","user_font_color":"#FFF","chat_bubble_shape":"rounded_style","header_title":"Hey there 👋","header_tag_line":"Questions, feedback? Let me know!","close_button_color":"#000000","botId":1572,"channelId":"wb_5da29129e7757f5b7f76f353","welcome":"a170061d5adc3df28cf8b990b3ead9c5","target":document.querySelector("#botme-plugin"),"channelType":"plugin"}
            var widget = JSWidget.initialize(options);
          `
        }}></script>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
