import React, { Fragment } from "react"
import { Global, css } from '@emotion/core'
// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => (
    <Fragment>
        <Global
        styles={css`
            html, body, #___gatsby, #___gatsby > div{
                width:100%;
                height:100%;
                margin:0;
            }
        `} />
        {element}
    </Fragment>
)